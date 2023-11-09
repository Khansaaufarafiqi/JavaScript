//Bab menambahkan element di HTML mengunakan JS
//#1 Buat Elemnt Dulu
const wadah = document.createElement("h1");
//#2 Buat text utuk di tambakan 
const textPertama = document.createTextNode("Selamat Datang !!");

//#3 Masukan text yang sudah dibuat kedalam element MEnggunakan (appendChild)
wadah.appendChild(textPertama);
//Note apendchild difgunakan untuk memasukan apa saja
//#4 Simpan element/wadah berisi text kemana saja ,yang di tunjuk

const sectionB = document.querySelector("#container section#b");
//#4 masukan element/wadah kedalam nya (sectionB)
sectionB.appendChild(wadah)

const h1 = document.querySelector("#container section#a");
const untukJudul = h1.querySelector(":nth-child(1)");// Menggunakan selector CSS :nth-child(1) untuk memilih elemen pertama di dalam h1
// Menggunakan `insertBefore` untuk menyisipkan elemen `wadah` sebelum elemen `untukJudul`
h1.insertBefore(wadah, untukJudul);

const sectionA = document.querySelector("section#a a");

//remove child diganakan untuk menghapus anaka kebrapa yang ditentukan
h1.removeChild(sectionA);


const p4 = sectionB.querySelector("p");

const pbaru = document.createElement("h2");
const isinya = document.createTextNode("Selamat Datang !!");
pbaru.appendChild(isinya)

sectionB.replaceChild(pbaru, p4)
pbaru.style.backgroundColor = "purple"
wadah.style.backgroundColor = "purple"