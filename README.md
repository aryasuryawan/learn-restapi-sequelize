# learn-restapi-sequelize
Simple Open REST API CRUD Expressjs, sequelize, mysql, bcrypt, jwt

Saya coba implementasikan seakan-akan ini adalah layanan Open API yang dibuka untuk publik yang memiliki akun. Setiaf pengakses akan diverifikasi secara sederhana melalui apikey dan secret (bila apikey dan secret tersedia baru bisa mengakses layanan). Sementara apikey adalah email dan secret adalah password

Password di database disimpan dalam keadaan terenkripsi dengan alogaritma blowfish melalui modul Bcrypt

Cookie parser dan JWT di sini sebenarnya disiapkan untuk nanti digunakan untuk autentikasi lanjutan saat akan dihubungkan ke frontend. Di dalamnya sudah tersedia endpoint /login yang akan mengenerate token ke database da mengirimkan cookie berisi token ke client. Endpoint /logout juga disediakan untuk mengakhiri sesi dan menghapus token dan cookie

Jangan lupa install node modules dengan perintah npm init

Buat juga file dotenv dengan parameter:

SERVER_PORT=3000
MYSQL_USERNAME=
MYSQL_PASSWORD=
MYSQL_DATABASE=
MYSQL_HOST=
MYSQL_PORT=3306
ACCESS_TOKEN_SECRET="rahasiabareng"
REFRESH_TOKEN_SECRET="rahasiabareng"

Untuk menjalankan gunakan perintah nodemon src/app.js