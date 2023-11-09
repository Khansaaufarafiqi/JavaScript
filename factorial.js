function faktorial(n){
    if( n === 0) return 1;
    return n * faktorial(n-1);
}
var isi = parseInt(prompt("masukan ilangan"));
var tampil = faktorial(isi);
console.log(tampil)
// function cetak(n){
//     if( n === 0 )return;
//     console.log(n);
//     cetak(n-2)
// }
// cetak(parseInt(prompt("masukan bilangan")))