import { readdirSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

/*
 * Generates .webp and .avif renditions of the photographic sources in public/:
 * the full-bleed automation-*.png and teacher-teal.png section backgrounds,
 * founder_plain.jpg, and the owner-*.jpg apprenticeship photos on the About
 * page. The sources are multi-MB and the encoded variants land around
 * 100-190 KB (webp) and 80-130 KB (avif). index.css / the JSX serve the
 * variants and the source is left on disk only as an encoder input
 * (postbuild.mjs drops it from the deploy).
 *
 * The generated files are gitignored and rebuilt here on every `npm run
 * build`, ahead of `vite build` copying public/ into dist/.
 */

// Keep in sync with the same expression in postbuild.mjs.
const PHOTO_SRC = /^(?:automation-.*\.png|teacher-teal\.png|founder_plain\.jpg|owner-[\w-]+\.jpg)$/

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '../public')

const WEBP = { quality: 80 }
const AVIF = { quality: 55 }

// Renditions to emit per source basename. Default: one rendition, same name,
// native width. founder_plain.jpg (a 2544x3392 portrait) fans out to the full
// `founder` portrait plus a `founder-avatar` for the circular crop on the About
// page: `square` renditions are centre-cropped to a square with fit: 'cover',
// so only real source pixels are kept, nothing is synthesised or stretched.
const RENDITIONS = {
  founder_plain: [
    { name: 'founder', maxWidth: 720 }, // full portrait, used by the About zoom
    { name: 'founder-avatar', maxWidth: 512, square: true }, // About circle
  ],
}

function isStale(src, out) {
  try {
    return statSync(src).mtimeMs > statSync(out).mtimeMs
  } catch {
    return true // output missing
  }
}

const ENCODERS = [
  ['webp', (img) => img.webp(WEBP)],
  ['avif', (img) => img.avif(AVIF)],
]

const sources = readdirSync(publicDir).filter((f) => PHOTO_SRC.test(f))

let built = 0
let skipped = 0

for (const file of sources) {
  const src = join(publicDir, file)
  const base = file.replace(/\.(?:png|jpg)$/, '')
  const renditions = RENDITIONS[base] ?? [{ name: base }]

  for (const { name, maxWidth, square } of renditions) {
    for (const [ext, encode] of ENCODERS) {
      const out = join(publicDir, `${name}.${ext}`)
      if (!isStale(src, out)) {
        skipped += 1
        continue
      }
      let img = sharp(src)
      if (square) {
        img = img.resize(maxWidth, maxWidth, {
          fit: 'cover',
          position: 'centre',
          withoutEnlargement: true,
        })
      } else if (maxWidth) {
        img = img.resize({ width: maxWidth, withoutEnlargement: true })
      }
      await encode(img).toFile(out)
      built += 1
      console.log(`optimized ${file} -> ${name}.${ext}`)
    }
  }
}

console.log(`Image variants: ${built} built, ${skipped} up to date (${sources.length} sources)`)
