# 📦 Project Setup

Panduan singkat untuk menginstal dan menjalankan project ini di local development environment Anda.

## ✅ Prasyarat

- Pastikan sudah menginstall [Node.js LTS](https://nodejs.org/en/download) (versi terbaru LTS).
- Disarankan menggunakan [PNPM](https://pnpm.io/) sebagai package manager.

## 🛠️ Langkah Instalasi

1. **Download dan Install Node.js (LTS)**

   Unduh dari [nodejs.org](https://nodejs.org/en/download), lalu install sesuai OS Anda.

2. **Install PNPM secara global**

   ```bash
   npm install -g pnpm
   ```

3. **Install dependencies project**

   ```bash
   pnpm install
   ```

4. **IBuat file .env**

   Salin isi dari .env.example ke file .env, lalu sesuaikan nilainya dengan kebutuhan Anda.

   ```bash
   cp .env.example .env
   ```

5. **Menjalankan Projek**

   ```bash
   pnpm dev
   ```

   atau

   ```bash
   pnpm start
   ```
