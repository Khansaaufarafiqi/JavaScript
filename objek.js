// var idCard = {
//     nama : "Khansa aufa rafiqi",
//     umur : 19,
//     sekolah : "SMK Al - Huda",
//     jurusan : "TKJ",
//     noAbsen : [6,7,10]
// };

// function Datadiri(nama, umur, sekolah, jurusan, noAbsen){

//     this.nama = nama;
//     this.umur = umur;
//     this.sekolah = sekolah;
//     this.jurusan = jurusan;
//     this.noAbsen = noAbsen;
// }

// var data = new Datadiri("khansa", 19, "smk alhuda", "tkj", 6);



// function datasaya(nama, umur, jurusan){
//     var saya = {};
//     saya.nama = nama;
//     saya.umur = umur;
//     saya.jurusan = jurusan;
//     return saya;
// }

// var saya1 = [datasaya("khansa", 19, "TKJ")]

// function soal1() {
//     console.log(this)
//     console.log("soal1")
// };
// this.soal1();
// mengembalikan objek global

// var soal2 = {nama : "khansa" , umr :19, jurusan : "TKJ"}
// soal2.tes = function(){
//     console.log(this)
//     console.log("soal2")
// }
// soal2.tes()

function Soal3(){
    console.log(this)
    console.log("soal3")
}
new Soal3();