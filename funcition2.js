// function menghitungKubus(sisi){
//     if (sisi <= 0){
//         return;
//     }
//     var volume = sisi * sisi * sisi;
//     return volume;
// }
//     var sisiKubusA = prompt("masukan") ;
//     var sisiKubusB = prompt("masukan") ;
//     var volume1 = menghitungKubus(sisiKubusA);
//     var volume2 = menghitungKubus(sisiKubusB);
//     console.log(volume1 + volume2)
// function menghitungSisiKubus(a , b){
//     var pangkat = 3; //rumusu kubus adalah V3 = v*v*v

//     var kubusA = Math.pow(a, pangkat);
//     var kubusB = Math.pow(b, pangkat);

//      var hasil = kubusA + kubusB;
//      return hasil;
// }
// alert("Halo, Disini kamu bisa menjumlahkan volume 2 kubus \nAyo Coba!");
// var tanya = true;
// while (tanya) {
//   var kubus1 = parseInt(prompt("Masukkan panjang sisi kubus pertama!"));
//   var kubus2 = parseInt(prompt("Masukkan panjang sisi kubus kedua!"));
//   alert("Baiklah Panjang sisi peratama adalah " + kubus1 + "\nDan panjang sisi kedua adalah " + kubus2);
//   alert("Jadi hasil penjumlahan volume kedua kubus tersebut adalah " + menghitungSisiKubus(kubus1, kubus2));
//   tanya = confirm("Apakah anda ingin menjumlahkan volume kubus lagi?");
// }
// alert("Terimakasih sudah menggunakan fitur Saya");

function rumus(a){
    var kubus = Math.pow(a,3);

    return kubus;
}
var nilai = parseInt(prompt(" INi adalah rumus \nkubus"))
console.log(rumus(nilai))