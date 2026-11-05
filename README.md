# AbdUmar Broadcast

Website publik AbdUmar Broadcast — desain orisinal bertema navy, biru, putih, dan cyan. Dibangun dengan HTML5, CSS3, Bootstrap 5, dan JavaScript.

## Isi proyek
- `index.html` — homepage
- `about.html`, `contact.html`
- `services/` — halaman layanan radio, video, hosting, mobile apps, jingle
- `pricing/index.html` — katalog paket awal
- `support/index.html` — FAQ dan kontak
- `assets/css/style.css` — desain responsif
- `assets/js/` — JavaScript dan starter Firebase

## Jalankan lokal
Buka `index.html` di browser. Untuk modul ES Firebase, gunakan local server (misalnya VS Code Live Server), bukan `file://`.

## Upload ke GitHub
1. Buat repository baru bernama `abdumar-broadcast`.
2. Ekstrak seluruh isi ZIP ke folder repository.
3. Commit dan push ke branch `main`.
4. Untuk preview proyek statis, aktifkan GitHub Pages pada Settings → Pages → Deploy from a branch → `main` → `/ (root)`.

**Penting:** GitHub Pages ditujukan untuk situs statis proyek/pribadi/organisasi dan tidak boleh digunakan sebagai hosting gratis untuk menjalankan bisnis online, e-commerce, atau SaaS. Untuk website bisnis yang beroperasi, gunakan GitHub sebagai repository dan deploy frontend ke Cloudflare Pages atau hosting/VPS yang sesuai. Lihat kebijakan GitHub Pages.

## Konfigurasi Firebase (tahap integrasi)
1. Buat project di https://console.firebase.google.com/
2. Tambahkan Web App pada Project settings.
3. Salin konfigurasi web ke `assets/js/firebase-config.js`.
4. Aktifkan Authentication provider yang diperlukan.
5. Buat Cloud Firestore.
6. Tambahkan domain deployment ke Authentication → Settings → Authorized domains.
7. Terapkan Firestore Security Rules sebelum menyimpan data pengguna.

`firebase-init.js` hanya starter inisialisasi. Form kontak saat ini adalah demo validasi browser dan **belum menyimpan data**. Jangan menganggap dashboard, pembayaran, order management, atau streaming server telah aktif.

## Placeholder yang harus diganti sebelum publikasi
- `hello@abdumarbroadcast.example` dengan email resmi.
- Link media sosial.
- Detail legalitas, alamat, nomor WhatsApp, kebijakan privasi, dan syarat layanan.
- Harga, SLA, kapasitas server, dan spesifikasi yang sudah benar-benar tersedia.

## Keamanan
- Firebase web config bukan private key, tetapi akses data harus dilindungi dengan Authentication, Firestore Rules, App Check, dan validasi server-side bila diperlukan.
- Jangan pernah memasukkan Firebase Admin SDK service account key, private key, password, atau kredensial server ke frontend/repository publik.
- Integrasi provisioning server radio/video dan pembayaran harus dilakukan melalui backend tepercaya (misalnya Cloud Functions atau API server), bukan langsung dari browser.

## Catatan merek
Website ini merupakan rancangan orisinal AbdUmar Broadcast, bukan salinan kode, aset, atau identitas Broadcastindo. Gunakan hanya merek dan materi visual yang Anda miliki haknya.
