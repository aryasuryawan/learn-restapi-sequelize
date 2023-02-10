# Simple Open API with Expressjs, Mysql dan Sequelize 
### Built With

* [![Next][Next.js]][Next-url]
* [![React][React.js]][React-url]
* [![Vue][Vue.js]][Vue-url]
* [![Angular][Angular.io]][Angular-url]
* [![Svelte][Svelte.dev]][Svelte-url]
* [![Laravel][Laravel.com]][Laravel-url]
* [![Bootstrap][Bootstrap.com]][Bootstrap-url]
* [![JQuery][JQuery.com]][JQuery-url]

## Tugas NodeJS - Kak Faizul harisenin.com 
- Generate an express app, make sure it running and have a service that perform CRUD to database then push the project to your github with different repository.
- Boleh menggunakan Auth tetapi tidak wajib. Jika menggunakan, merupakan nilai plus.

Saya coba implementasikan seakan-akan ini adalah layanan Open API yang dibuka untuk publik yang memiliki akun. 

Password di database disimpan dalam keadaan terenkripsi dengan alogaritma blowfish melalui modul Bcrypt

Cookie parser dan JWT di sini sebenarnya disiapkan untuk nanti digunakan untuk autentikasi lanjutan saat akan dihubungkan ke frontend. Di dalamnya sudah tersedia endpoint /login yang akan mengenerate token ke database da mengirimkan cookie berisi token ke client. Endpoint /logout juga disediakan untuk mengakhiri sesi dan menghapus token dan cookie

## Available API Services
Setiap pengakses akan diverifikasi secara sederhana melalui apikey dan secret (bila apikey dan secret tersedia baru bisa mengakses layanan). Sementara apikey adalah email dan secret adalah password. Untuk menguji pastikan kamu memasukan apikey dan secret di dalam request header ya

### Pelatihan
`GET /api/pelatihan/` Menampilkan seluruh data pelatihan
`GET /api/pelatihan/:id/` Menampilkan pelatihan tertentu berdasarkan id
`POST /api/pelatihan/` Buat pelatihan baru
`PUT /api/pelatihan/:id/` Update data pelatihan berdasarkan id
`DELETE /api/pelatihan/:id/` Update data pelatihan berdasarkan id

### User
`GET /api/user/` Menampilkan seluruh data user
`GET /api/user/:id/` Menampilkan user tertentu berdasarkan id
`POST /api/user/` Buat user baru
`PUT /api/user/:id/` Update data user berdasarkan id
`DELETE /api/user/:id/` Update data user berdasarkan id
`POST /api/user/login` Untuk Login
`POST /api/user/logout` Untuk Logout


## Getting Started
Jangan lupa install node modules dengan perintah npm init

```sh
npm init
```

## Database Schema
Saya letakan di masing-masing model, silahkan lihat folder models

## dotenv
Beberapa pengaturan saya letakan di sini, sesuaikan dengan kebutuhan

```sh
SERVER_PORT=3000
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_HOST=
MYSQL_PORT=3306
ACCESS_TOKEN_SECRET="rahasiabareng"
REFRESH_TOKEN_SECRET="rahasiabareng"
```

## Start Application
Untuk menjalankan gunakan perintah 

```sh
nodemon src/app.js
```
