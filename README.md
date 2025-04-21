
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

1. **Persiapan File untuk Deploy**

   a. **Download dan Install Git** (Jika belum ada)
      - Kunjungi https://git-scm.com/downloads
      - Download Git sesuai sistem operasi (Windows/Mac/Linux)
      - Install Git dengan mengikuti wizard instalasi
      - Buka Command Prompt/Terminal untuk memastikan Git terinstall dengan mengetik:
        ```bash
        git --version
        ```

   b. **Siapkan Folder Project**
      - Buat folder baru di komputer Anda (misal: "safety-riding")
      - Pindahkan semua file aplikasi ke folder tersebut:
        - index.html
        - dashboard.html
        - auth.js
        - basic.html
        - braking.html
        - hazard.html
        - microsleep.html
        - blindspot.html
        - analytics.html
        - README.md

   c. **Buka Terminal/Command Prompt**
      - Buka Command Prompt (Windows) atau Terminal (Mac/Linux)
      - Navigasi ke folder project menggunakan perintah:
        ```bash
        cd path/ke/folder/safety-riding
        ```
        Contoh di Windows: `cd C:\Users\NamaUser\Documents\safety-riding`
        Contoh di Mac/Linux: `cd /Users/NamaUser/Documents/safety-riding`

   d. **Inisialisasi Git Repository**
      - Ketik perintah berikut satu per satu:
        ```bash
        # 1. Ketik perintah ini untuk membuat repository baru:
        git init

        # Setelah berhasil akan muncul pesan:
        # Initialized empty Git repository in [lokasi folder]/.git/

        # 2. Ketik perintah ini untuk melihat status file:
        git status

        # Akan muncul daftar file berwarna merah

        # 3. Ketik perintah ini untuk menambahkan semua file:
        git add .

        # 4. Ketik lagi untuk melihat perubahan:
        git status

        # Sekarang file akan berwarna hijau

        # 5. Setting identitas Git (WAJIB DILAKUKAN):
        
        # Ketik perintah ini untuk setting email (ganti dengan email Anda):
        git config --global user.email "emailanda@gmail.com"
        
        # Tekan Enter
        
        # Ketik perintah ini untuk setting nama (ganti dengan nama Anda):
        git config --global user.name "Nama Anda"
        
        # Tekan Enter
        
        # Contoh yang benar:
        # git config --global user.email "budi@gmail.com"
        # git config --global user.name "Budi Santoso"
        
        # Untuk memastikan setting berhasil, ketik:
        git config --list
        
        # Jika muncul banyak setting seperti ini:
        # diff.astextplain.textconv=astextplain
        # filter.lfs.clean=git-lfs clean -- %f
        # filter.lfs.smudge=git-lfs smudge -- %f
        # ... dan seterusnya ...
        
        # Scroll ke bawah untuk mencari baris:
        # user.email=emailanda@gmail.com
        # user.name=Nama Anda
        
        # Jika user.email dan user.name tidak muncul,
        # atau nilainya masih kosong, ketik ulang:
        git config --global user.email "emailanda@gmail.com"
        git config --global user.name "Nama Anda"
        
        # Kemudian cek lagi dengan:
        git config user.email
        git config user.name
        
        # Pastikan muncul email dan nama yang benar

        # 6. Setelah setting berhasil, baru ketik:
        git commit -m "Initial commit"

        # Contoh tampilan setelah berhasil:
        # [main (root-commit) f12a568] Initial commit
        # 10 files changed, 1500 insertions(+)
        # create mode 100644 index.html
        # create mode 100644 dashboard.html
        # ... dan seterusnya
        ```

        Note: 
        - Pastikan email yang digunakan adalah email yang terdaftar di akun GitHub Anda
        - Ketik persis: git commit -m "Initial commit"
        - Gunakan tanda kutip ganda (")
        - Spasi setelah -m
        - Huruf "I" pada "Initial" kapital
        
        TROUBLESHOOTING:
        
        Jika muncul error seperti ini:
        ```bash
        *** Please tell me who you are.
        Run
          git config --global user.email "you@example.com"
          git config --global user.name "Your Name"
        
        fatal: unable to auto-detect email address (got 'admin@DESKTOP-IK6TDL8.(none)')
        ```

        Ini berarti Git belum mengenali identitas Anda. Ikuti langkah berikut:

        1. Tutup Command Prompt/Terminal yang sekarang
        2. Buka Command Prompt/Terminal baru
        3. Navigasi ke folder project lagi:
           ```bash
           cd path/ke/folder/safety-riding
           ```
        4. Setting ulang identitas:
           ```bash
           git config --global user.email "emailanda@gmail.com"
           git config --global user.name "Nama Anda"
           ```
        5. Cek setting dengan cara cepat:
           ```bash
           # Cek email:
           git config user.email
           
           # Cek nama:
           git config user.name
           ```
           
           Pastikan muncul email dan nama yang baru saja di-setting.
           Jika masih kosong atau tidak muncul, ulangi langkah 4.

        6. Jika email dan nama sudah benar, ulangi langkah commit:
           ```bash
           git add .
           git commit -m "Initial commit"
           ```

        PENTING: 
        - Pastikan tidak ada typo saat mengetik perintah
        - Gunakan email yang valid
        - Jangan gunakan email contoh (you@example.com)
        - Gunakan nama lengkap Anda yang sebenarnya

2. **Deploy Manual ke Netlify** (Cara Paling Mudah)
   
   a. **Deploy Manual ke Netlify:**
   1. Buka browser dan kunjungi [Netlify](https://app.netlify.com/)
   2. Klik tombol "Sign up" jika belum punya akun
      - Pilih "Sign up with email"
      - Isi email dan password
      - Verifikasi email Anda
   3. Setelah login, klik tombol "Add new site"
   4. Pilih "Deploy manually"
   5. Buka folder project di komputer Anda
   6. Pilih semua file dalam folder (Ctrl+A atau Command+A)
   7. Drag & drop semua file ke area upload di Netlify
   8. Tunggu proses upload dan deploy selesai (1-2 menit)
   9. Setelah selesai, Anda akan mendapatkan URL unik dari Netlify
      - Contoh: https://your-site-name.netlify.app
   10. Klik tombol "Site settings"
      - Di bagian "Site information", Anda bisa mengganti nama situs
      - URL akan berubah sesuai nama yang Anda pilih
   11. Selesai! Situs Anda sudah online dan bisa diakses

   b. **Cara Membagikan Link:**
   1. Copy URL situs Anda (https://your-site-name.netlify.app)
   2. Bagikan link tersebut kepada pengguna
   3. Pengguna bisa langsung akses dan:
      - Melihat statistik yang sudah ada
      - Mendaftar sebagai pengguna baru
      - Mengakses semua materi
      - Mengerjakan quiz
      - Melihat progress pembelajaran

   c. **Memastikan Data Tersimpan:**
   1. Data pengguna dan statistik tersimpan di localStorage browser
   2. Setiap pengguna baru yang mendaftar akan terlihat di statistik
   3. Statistik bisa dilihat di halaman analytics.html
   4. Data akan tersimpan permanen selama:
      - Browser pengguna tidak dibersihkan
      - Website tetap online di Netlify

   d. **Tips Tambahan:**
   1. Backup folder project Anda
   2. Simpan URL Netlify dan kredensial login
   3. Pantau statistik penggunaan di dashboard Netlify
   4. Update konten dengan cara:
      - Edit file di komputer
      - Upload ulang ke Netlify dengan cara yang sama

   e. **Deploy via Git (Opsional - Untuk Developer):**
   1. Buat repository di GitHub:
      - Kunjungi github.com dan login
      - Klik "New repository"
      - Beri nama repository (misal: "safety-riding")
      - Klik "Create repository"
   
   2. Push code ke GitHub:
      ```bash
      # 1. Copy URL repository dari GitHub
      # (Klik tombol hijau "Code" di GitHub, copy HTTPS URL)
      # URL akan seperti: https://github.com/username/safety-riding.git

      # 2. Ketik perintah ini (ganti <repository-url> dengan URL yang dicopy):
      git remote add origin https://github.com/username/safety-riding.git

      # 3. Ketik perintah ini untuk mengirim code ke GitHub:
      git push -u origin main

      # Akan muncul prompt login GitHub
      # Masukkan username dan password/token GitHub Anda
      
      # Jika berhasil, akan muncul progress upload
      # dan link ke repository GitHub Anda
      ```

      Note:
      - Ganti "username" dengan username GitHub Anda
      - Ganti "safety-riding" dengan nama repository yang Anda buat
      - Pastikan URL diketik dengan benar
      
   3. Deploy di Netlify:
      - Di Netlify, klik "Add new site" 
      - Pilih "Import an existing project"
      - Pilih GitHub dan repository Anda
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
