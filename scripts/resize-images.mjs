#!/usr/bin/env node
/**
 * 記憶荘 画像リサイズスクリプト
 * ─────────────────────────────
 * public/images/ 内の全 .webp 画像に対して 480px幅の -sm.webp 版を生成する。
 * すでに -sm.webp が存在する画像はスキップ。
 *
 * 使い方:
 *   node scripts/resize-images.mjs              # 全画像を処理
 *   node scripts/resize-images.mjs --force      # 既存 -sm も再生成
 *   node scripts/resize-images.mjs image1.webp  # 指定ファイルのみ
 *
 * 前提: npm install sharp
 */
import sharp from 'sharp';
import { readdir, stat, access } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const IMG_DIR = path.resolve(__dirname, '..', 'public', 'images');
const SM_WIDTH = 480;
const QUALITY = 80;

// ヒーロー画像はオリジナルを維持（srcSetで対応）
const HERO_SKIP = ['lp-hero.webp', 'group-hero-sakura.webp'];

const args = process.argv.slice(2);
const force = args.includes('--force');
const specificFiles = args.filter(a => a.endsWith('.webp'));

const files = specificFiles.length > 0
  ? specificFiles
  : (await readdir(IMG_DIR)).filter(f => f.endsWith('.webp') && !f.includes('-sm.'));

let generated = 0, skipped = 0, totalOrig = 0, totalSm = 0;

for (const f of files) {
  const smName = f.replace('.webp', '-sm.webp');
  const input = path.join(IMG_DIR, f);
  const output = path.join(IMG_DIR, smName);

  // Skip hero images
  if (HERO_SKIP.includes(f)) { skipped++; continue; }

  // Skip if -sm already exists (unless --force)
  if (!force) {
    try { await access(output); skipped++; continue; } catch {}
  }

  try {
    const meta = await sharp(input).metadata();
    const origStat = await stat(input);

    if (meta.width <= SM_WIDTH) {
      console.log(`SKIP ${f} (${meta.width}px already ≤ ${SM_WIDTH}px)`);
      skipped++;
      continue;
    }

    await sharp(input)
      .resize(SM_WIDTH, null, { withoutEnlargement: true })
      .webp({ quality: QUALITY })
      .toFile(output);

    const newStat = await stat(output);
    totalOrig += origStat.size;
    totalSm += newStat.size;
    generated++;
    console.log(`OK ${f}: ${meta.width}→${SM_WIDTH}px | ${(origStat.size/1024).toFixed(0)}KB → ${(newStat.size/1024).toFixed(0)}KB`);
  } catch (err) {
    console.error(`ERR ${f}: ${err.message}`);
  }
}

console.log(`\n✅ ${generated} generated, ${skipped} skipped`);
if (totalOrig > 0) {
  console.log(`   ${(totalOrig/1024).toFixed(0)}KB → ${(totalSm/1024).toFixed(0)}KB (${((1-totalSm/totalOrig)*100).toFixed(0)}% saved)`);
}
