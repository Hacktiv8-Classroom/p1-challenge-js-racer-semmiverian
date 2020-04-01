---
layout: challenge
title: JSRacer - Outrageous Fortune
---

## Learning Competencies

* Menggunakan input / output dari console
* Memodelkan sistem di dunia nyata denga JavaScript code
* Dapat membuat sistem berdasarkan unit test yang telah dibuat

## Summary

Vroom vroom! Kita akan membuat game sederhana dengan nama *JSRacer*. Game ini mirip [Snakes and Ladders](http://en.wikipedia.org/wiki/Snakes_and_Ladders), di negara kita terkenal dengan nama Ular Tangga. *JSRacer* merupakan game yang sangat sederhana dan ber-genre board. Game ini menggunakan dadu yang diacak dan menentukan pergerakan pemainnya. Arena/lintasan permainan untuk *JSRacer* hanya sebuah garis lurus saja tanpa tikungan.

Permainan yang akan kamu buat adalah permainan balapan untuk menuju garis finish.
Untuk memulai permainan ini minimal harus ada 2 pemain dan setiap pemain memiliki mobil yang berada di garis start.
Jalurnya adalah kotak-kotak pada papan permainan. Kemudian pemain bergantian
melempar dadu untuk mendapatkan angka dimana angka tersebut akan menentukan
seberapa jauh mobil akan bergerak.

Kamu akan belajar
tentang bagaimana cara kerja console dalam menampilkan output yang kamu
inginkan. Gunakanlah skeleton code awal yang sudah disediakan, perhatikan method yang sudah ada, input dan output yang dihasilkan.
Skeleton code sudah menyediakan beberapa method penting untuk kamu gunakan seperti method `clearScreen` dan `sleep` di `js-racer.js`. Jika kesulitan melengkapi method yang ada di `js-racer.js`, kalian diperbolehkan menggunakan [library terminal-kit berikut](https://github.com/cronvel/terminal-kit). Namun fokus utama kita adalah logika ketika game dimulai.

Berikut simulasi dari game yang luar biasa ini :)

![](jsracer.gif)

## Prerequisites

Jalankan perintah `npm install` untuk melakukan instalasi module yang dibutuhkan demi kepentingan test kamu nantinya.

## Releases

### Release 0 : Implement `process argv`
Seperti yang sudah diterangkan di atas bahwa jumlah pemain pada permainan *JSRacer* minimal 2. Pada release ini user dapat memasukkan berapa jumlah pemain yang ingin dimainkan dan panjang lintasan arena dari *JSRacer*.

Manfaatkanlah materi `process argv` yang telah disampaikan pagi ini. Buatlah aplikasi permainan *JSRacer* supaya dapat menerima input dari user dimana argument ke-1 adalah jumlah pemain dan argument ke-2 adalah panjang lintasan, seperti dibawah ini:

```sh

$ node index 2 15

```

Pastikan kode yang kamu tulis telah sesuai dengan test case yang telah disediakan, jalankan command berikut untuk memastikan

```sh

$ npm test

```

**Note**:
- Jumlah pemain minimal 2
- Panjang lintasan minimal 15

### Release 1 : Implement Using the Skeleton Code

Untuk mempermudah logika berpikir kamu maka buatlah permainan *JSRacer* untuk pertama kalinya dengan 2 pemain terlebih dahulu. Jika dengan 2 pemain permainan *JSRacer* kamu telah selesai/berhasil. Seharusnya dengan menambahkan lebih dari dua pemain juga bisa berjalan dengan semestinya.

Kira-kira dengan jumlah pemain yang minimal 2, tipe data apa yang akan kamu gunakan? Jika dadu dilempar untuk setiap pemain, dimanakah kamu akan menyimpan posisi pemain tersebut?


**Note**:
- Hanya boleh ada 1 pemenang. Jika salah satu pemain sudah mencapai garis finish, maka pemain lain harus berhenti
- Posisi pemain tidak boleh melebihi panjang dari lintasan


Gunakanlah library [ASCII art ini](https://www.npmjs.com/package/ascii-art) jika kamu ingin ber-eksperimen dengan warna, font, dll pada console kamu.


### Release 2 : Think of Fun Additions

Sebagai eksperimen lebih lanjut, pikirkan caranya supaya game ini lebih
seru. Tambahkan obstacle atau superpower di tempat
tertentu agar permainan *JSRacer* kamu makin keren.

Apakah code yang kamu buat memudahkan jika kita menambah fitur atau malah
lebih sulit?
