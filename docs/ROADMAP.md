# ROADMAP.md — NUGI: Prioritas Pengembangan

**Prinsip:** CASHFLOW & OUTCOME FIRST. Jangan bangun SaaS/registrasi/billing otomatis
sebelum 3 klien berbayar manual. Jangan belanja iklan sebelum offer terbukti closing.

> **Konteks repo:** Source code core product TIDAK ada di repo ini (ada di repo
> eksternal GREN/Yanproland). Prioritas P0 di bawah dikerjakan sejauh dapat
> dilakukan di dalam repo ini; yang butuh repo eksternal ditandai [X-REPO].

## Fase A — VALIDASI (saat ini) [HAMBATAN #1]
1. Kirim 3–5 pesan riset santai ke network properti (script di `business/sales/`).
   Target: 5–10 discovery call. Validasi V1–V3.
2. Buat video demo 60 detik + demo bersih (tanpa data klien lama).

## Fase B — OFFER & ALAT JUAL
3. Finalisasi 1-Page Proposal + SOW/template kontrak (2x revisi, DP 50%).
4. Tegaskan satu "Hero Offer": Property Lead-Engine & WhatsApp Round-Robin.

## Fase C — PENJUALAN & DELIVERY KL#1
5. Tutup Klien #1 (DP 50%). Deliver 3–5 hari.
6. Setelah live: dokumentasikan hasil & testimoni.

## Fase D — MESIN AKUISISI DIGITAL (setelah ada bukti/uang)
7. Isi ID Meta Pixel + GA4 di SEMUA halaman (perbaiki loader agar ada di tiap halaman).
8. Google Search Console, Business Profile, submit sitemap; konten `/kontak`, artikel backlog.

## Fase E — SKALA (setelah 3 klien ≈ Rp15jt)
9. Klien #2–3 harga standard; mulai retainer Rp500rb/bln bulan ke-2.
10. Pertimbangkan whitelabel engine + SaaS bila recurring stabil; jaga IP inti tetap milik studio.

---

## Status Fase AUDIT CODE (Phase 2–3) — Demo-Readiness

### Core Workflow (Lead masuk → tersimpan → distribusi → sales terima → follow-up → manager lihat)
| Tahap | Status | Keterangan |
|---|---|---|
| Lead masuk (Meta Ads/LP/webhook) | ❌ [X-REPO] | Mesin eksternal; belum diverifikasi |
| Lead tersimpan | ❌ [X-REPO] | Mesin eksternal; belum diverifikasi |
| Distribusi round-robin | ❌ [X-REPO] | Mesin eksternal; belum diverifikasi |
| Sales menerima via WA | ❌ [X-REPO] | Mesin eksternal; belum diverifikasi |
| Follow-up dicatat | ❌ [X-REPO] | Mesin eksternal; belum diverifikasi |
| Manager lihat status | ❌ [X-REPO] | Mesin eksternal; belum diverifikasi |

### P0 — WAJIB (sebelum demo #1)
- [x] **P0-4** Fix menu mobile (inline-style menu macet saat resize) — `website/app.js`.
      State-based toggle + reset inline style saat viewport >900px. **Selesai & tervalidasi.**
- [x] **P0-3** Demo simulasi alur leads (siap presentasi) — `website/demo/` + tautan "Demo"
      di nav utama. **Selesai (Phase 4).** Data dummy berlabel, tanpa data pribadi.
- [ ] **P0-1** [X-REPO] Impor/hubungkan engine eksternal → env demo end-to-end.
- [ ] **P0-2** [X-REPO] Data dummy bersih + akun demo tiap role; uji 2 lead bersamaan.

### P1 — PENTING
- [ ] tracking.js bersama (config+loader) di semua halaman; hapus duplikasi.
- [ ] site-config.js single source kontak (ganti 89 hardcode WA/email).
- [ ] Satu jalur event tracking (cegah double push dataLayer).
- [ ] Checklist uji pra-demo (happy path + error path).
- [ ] [X-REPO] Sanitasi data/kredensial project lama untuk demo.

### P2 — NANTI
- [ ] Refactor partial (header/footer/CTA) kurangi duplikasi markup.
- [ ] Studi kasus berangka + testimoni pasca klien #1.
- [ ] Backlog SEO/kontak/GBP; lalu whitelabel config-driven.
