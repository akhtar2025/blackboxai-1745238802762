# E-Learning Safety Riding Application

Aplikasi pembelajaran online untuk keselamatan berkendara sepeda motor dengan fitur tracking progress dan statistik pengguna.

## Struktur Aplikasi

```
├── index.html          # Halaman login
├── dashboard.html      # Dashboard utama
├── auth.js            # Manajemen autentikasi
├── basic.html         # Materi dasar safety riding
├── braking.html       # Materi teknik pengereman
├── hazard.html        # Materi antisipasi bahaya
├── microsleep.html    # Materi micro sleep
├── blindspot.html     # Materi blind spot
└── analytics.html     # Halaman statistik
```

## Fitur Aplikasi

1. **Sistem Login**
   - Input NPK
   - Input Nama
   - Pilihan Bagian/Departemen

2. **Materi Pembelajaran**
   - Dasar Safety Riding
   - Teknik Pengereman
   - Antisipasi Bahaya
   - Micro Sleep
   - Blind Spot

3. **Fitur Tracking**
   - Progress pembelajaran per modul
   - Nilai quiz
   - Statistik departemen
   - Komitmen keselamatan

4. **Statistik & Analisis**
   - Akses bagian terbanyak
   - Performance bagian terbaik
   - Rata-rata score quiz
   - Statistik penyelesaian modul

## Cara Deploy ke Netlify

1. **Persiapan Repository**
   ```bash
   # Buat repository Git baru
   git init
   
   # Tambahkan semua file
   git add .
   
   # Commit perubahan
   git commit -m "Initial commit"
   ```

2. **Deploy ke Netlify**
   
   a. **Manual Deploy:**
   - Kunjungi [Netlify](https://app.netlify.com/)
   - Login/Register akun
   - Klik "Add new site" > "Deploy manually"
   - Drag & drop folder project ke area upload
   - Tunggu proses deploy selesai

   b. **Deploy via Git:**
   - Buat repository di GitHub/GitLab/Bitbucket
   - Push code ke repository:
     ```bash
     git remote add origin <repository-url>
     git push -u origin main
     ```
   - Di Netlify, klik "Add new site" > "Import an existing project"
   - Pilih repository
   - Klik "Deploy site"

3. **Konfigurasi Site**
   
   a. **Domain Settings:**
   - Klik site yang baru dibuat
   - Ke tab "Domain settings"
   - Gunakan domain default Netlify atau tambahkan custom domain

   b. **Environment Variables:**
   - Ke tab "Site settings" > "Build & deploy" > "Environment"
   - Tambahkan variable yang diperlukan (jika ada)

4. **Pengujian**
   - Buka URL yang diberikan Netlify
   - Test semua fitur:
     - Login
     - Akses materi
     - Quiz
     - Statistik
     - Komitmen & Logout

## Penyimpanan Data

Aplikasi ini menggunakan localStorage untuk menyimpan data pengguna. Data yang tersimpan meliputi:

1. **Data Pengguna**
   - NPK
   - Nama
   - Bagian/Departemen
   - Progress pembelajaran
   - Nilai quiz
   - Komitmen keselamatan

2. **Data Statistik**
   - Akses per departemen
   - Nilai rata-rata
   - Status penyelesaian modul

## Pemeliharaan

1. **Backup Data**
   - Export data statistik secara berkala
   - Simpan backup di lokasi yang aman

2. **Update Konten**
   - Edit file HTML untuk memperbarui materi
   - Test setelah setiap perubahan
   - Deploy ulang ke Netlify

3. **Monitoring**
   - Pantau statistik penggunaan di dashboard Netlify
   - Periksa error logs jika ada masalah

## Troubleshooting

1. **Masalah Login**
   - Periksa input NPK dan Nama
   - Pastikan pemilihan Bagian valid
   - Clear localStorage jika diperlukan

2. **Data Tidak Tersimpan**
   - Pastikan localStorage tersedia
   - Periksa kuota storage browser
   - Validasi format data

3. **Masalah Deploy**
   - Periksa log deploy di Netlify
   - Pastikan semua file termasuk dalam deploy
   - Verifikasi konfigurasi build

## Pengembangan Lanjutan

1. **Peningkatan Fitur**
   - Tambah materi baru
   - Tingkatkan interaktivitas quiz
   - Tambah fitur reporting

2. **Optimasi**
   - Kompresi gambar
   - Minifikasi CSS/JS
   - Implementasi caching

3. **Keamanan**
   - Enkripsi data sensitif
   - Validasi input
   - Rate limiting

## Support

Untuk bantuan teknis atau pertanyaan, hubungi tim IT support atau buat issue di repository project.

## Lisensi

Hak cipta dilindungi. Penggunaan aplikasi terbatas untuk keperluan internal perusahaan.
