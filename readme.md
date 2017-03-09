Deskripsi dari program
  Aplikasi ini bersifat REST API CRUD sederhana dengan menggunakan framework Express JS & database MongoDB. Dibuat dengan menggunakan struktur MVC.

  Adapun collection yang perlu kalian buat yaitu collection foods yang memiliki field name, price, expired_date.
  Aplikasi ini menggunakan 2 collection, yaitu;
  1. foods
    Att: dataId, name, price, expired_date

  2. restaurants
    Att: dataId, name, owner, address, open_status

Langkah-langkah yang perlu dijalankan untuk menjalankan program tersebut
  - npm install
  - npm run dev
  - Aplikasi bisa di akses via http://localhost:3000
  - silahkan, lihat pada bagian API Endpoint untuk mengetahui cara mengakses fitur Crud nya

Serta daftar API Endpoint yang bisa diakses untuk mengambil data
  foods
  http://localhost:3000/food/all        ||  GET   || melihat semua data food yang Ada
  http://localhost:3000/food/:id        ||  GET   || melihat salah satu data food berdasarkan id
  http://localhost:3000/food/create     ||  POST  || membuat data food baru & memasukkan ke dalam database
  http://localhost:3000/food/update/:id ||  PUT   || mengupdate salah satu data food yang ada  
  http://localhost:3000/food/remove/:id || DELETE || menghapus salah satu data food dari database

  http://localhost:3000/restaurant/all        ||  GET   || melihat semua data restaurant yang Adapun
  http://localhost:3000/restaurant/:id        ||  GET   || melihat salah satu data restaurant berdasarkan id
  http://localhost:3000/restaurant/create     ||  POST  || membuat data restaurant baru & memasukkan ke dalam database
  http://localhost:3000/restaurant/update/:id ||  PUT   || mengupdate salah satu data restaurant yang ada  
  http://localhost:3000/restaurant/remove/:id || DELETE || menghapus salah satu data restaurant dari database
