/* ============================================================
   Validasi copy & positioning website (www.nugi.biz.id)
   Jalankan: node website/site-check.test.js
   Memeriksa bahwa klaim/positioning halaman utama sudah selaras
   dan tidak ada label LIVE/misleading yang tersisa.
   ============================================================ */
'use strict';

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname);
const files = {
  home: path.join(root, 'index.html'),
  demo: path.join(root, 'demo', 'demo.js'),
  demoHtml: path.join(root, 'demo', 'index.html'),
  leads: path.join(root, 'sistem-leads-whatsapp', 'index.html'),
  crm: path.join(root, 'crm-properti', 'index.html'),
  custom: path.join(root, 'sistem-custom', 'index.html'),
  landing: path.join(root, 'landing-page-properti', 'index.html')
};

let failures = 0;
function assert(cond, msg) {
  if (cond) console.log('PASS: ' + msg);
  else { failures += 1; console.error('FAIL: ' + msg); }
}

const home = fs.readFileSync(files.home, 'utf8');
const demoJs = fs.readFileSync(files.demo, 'utf8');
const demoHtml = fs.readFileSync(files.demoHtml, 'utf8');
const servicePages = {
  'sistem-leads-whatsapp': fs.readFileSync(files.leads, 'utf8'),
  'crm-properti': fs.readFileSync(files.crm, 'utf8'),
  'sistem-custom': fs.readFileSync(files.custom, 'utf8'),
  'landing-page-properti': fs.readFileSync(files.landing, 'utf8')
};

// --- Positioning homepage ---
assert(/Sistem Distribusi Lead & CRM Properti/.test(home), 'title = positioning distributor lead & CRM');
assert(/Lead dari Meta Ads Masih Dibagikan/.test(home), 'hero headline fokus lead Meta Ads');
assert(/Lihat Demo Sistem/.test(home), 'CTA primary "Lihat Demo Sistem" ada');
assert(/mockup-live">● DEMO/.test(home), 'mockup berlabel DEMO (bukan LIVE)');
assert(/DEMO SIMULATION · Data simulasi/.test(home), 'mockup chip menandai data simulasi');
assert(!/● LIVE/.test(home), 'tidak ada label LIVE di homepage');
assert(/Sudah Bayar Iklan untuk Mendapatkan Lead/.test(home), 'problem section fokus pasca-iklan');
assert(/Distribusi Otomatis/.test(home), 'solution flow menampilkan distribusi otomatis');
assert(/Buka Demo Sistem/.test(home), 'section demo memuat CTA buka demo');
assert(/Satu Sistem untuk Merapikan Operasional Lead/.test(home), 'fitur utama ada');
assert(/Apakah Sistem Ini Cocok untuk Tim Anda\?/.test(home), 'section kecocokan ada');
assert(/Bukan Sekadar Membuat Software/.test(home), 'kenapa nugi fokus domain properti');
assert(/Demo Simulation/.test(home), 'portfolio tidak mengklaim Live Deployed');
assert(/Estimasi sistem inti/.test(home), 'proses mencantumkan estimasi durasi');
assert(/Biaya layanan pihak ketiga/.test(home), 'pricing mencantumkan disclaimer biaya pihak ketiga');
assert(/Berapa lama pengerjaannya\?/.test(home), 'FAQ berisi durasi pengerjaan');
assert(/Konsultasi Gratis via WhatsApp/.test(home), 'CTA final konsultasi ada');

// --- Demo page label ---
assert(/MODE DEMO/.test(demoJs), 'demo.js menampilkan banner MODE DEMO');
assert(/Data simulasi/.test(demoHtml), 'demo HTML menyebut data simulasi');
assert(/noindex/.test(demoHtml), 'demo tidak diindeks (noindex)');
assert(!/production system/i.test(demoHtml + demoJs), 'demo tidak mengklaim production system');

// --- Service pages: mockup label & link demo ---
for (const [name, html] of Object.entries(servicePages)) {
  assert(/mockup-live">● DEMO/.test(html), name + ': mockup berlabel DEMO');
  assert(!/● LIVE|● YOURS|● READY/.test(html), name + ': tidak ada label LIVE/YOURS/READY');
  assert(/href="\.\.\/demo"/.test(html), name + ': navbar memuat link Demo');
}

console.log('\n' + (failures === 0 ? 'SEMUA CEK WEBSITE LULUS.' : failures + ' CEK GAGAL.'));
process.exit(failures === 0 ? 0 : 1);
