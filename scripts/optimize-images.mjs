import { readdirSync, statSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

/*
 * Generates .webp and .avif siblings for every public/automation-*.png.
 * These full-bleed section photos are ~2 MB each as PNG; the encoded
 * variants land around 100-190 KB (webp) and 80-130 KB (avif). index.css
 * serves them via image-set() with the PNG left on disk only as a source.
 *
 * The generated files are gitignored and rebuilt here on every `npm run
 * build`, ahead of `vite build` copying public/ into dist/.
 */

const __dirname = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dirname, '../public')

const WEBP = { quality: 80 }
const AVIF = { quality: 55 }

function isStale(src, out) {
  try {
    return statSync(src).mtimeMs > statSync(out).mtimeMs
  } catch {
    return true // output missing
  }
}

const sources = readdirSync(publicDir).filter((f) => /^automation-.*\.png$/.test(f))

let built = 0
let skipped = 0

for (const file of sources) {
  const src = join(publicDir, file)
  const base = file.replace(/\.png$/, '')

  const targets = [
    { out: join(publicDir, `${base}.webp`), run: (img) => img.webp(WEBP) },
    { out: join(publicDir, `${base}.avif`), run: (img) => img.avif(AVIF) },
  ]

  for (const { out, run } of targets) {
    if (!isStale(src, out)) {
      skipped += 1
      continue
    }
    await run(sharp(src)).toFile(out)
    built += 1
    console.log(`optimized ${file} -> ${out.slice(publicDir.length + 1)}`)
  }
}

console.log(`Image variants: ${built} built, ${skipped} up to date (${sources.length} sources)`)
