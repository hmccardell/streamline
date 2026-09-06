import { existsSync, readdirSync, rmSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

/*
 * The photographic sources (automation-*.png, teacher-teal.png,
 * founder_plain.jpg, owner-*.jpg) live in public/ so optimize-images.mjs can
 * read them, which means Vite copies them into both dist/ and the dist/server/
 * SSR bundle. Nothing references the sources any more (index.css and the JSX
 * use the .webp/.avif built by optimize-images.mjs), so drop them from the
 * deploy to keep the upload small.
 */

// Keep in sync with the same expression in optimize-images.mjs.
const PHOTO_SRC = /^(?:automation-.*\.png|teacher-teal\.png|founder_plain\.jpg|owner-[\w-]+\.jpg)$/

const __dirname = dirname(fileURLToPath(import.meta.url))
const distDir = join(__dirname, '../dist')

let removed = 0
for (const dir of [distDir, join(distDir, 'server')]) {
  if (!existsSync(dir)) continue
  for (const file of readdirSync(dir)) {
    if (PHOTO_SRC.test(file)) {
      rmSync(join(dir, file))
      removed += 1
    }
  }
}

console.log(`Pruned ${removed} unreferenced photo source(s) from dist/`)
