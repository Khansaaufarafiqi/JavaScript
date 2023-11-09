// var jmlAngkot = prompt("Masukan jumlah angkot = ");
// var angkotBeroperasi = prompt("Angkot yang sedang beroperasi = ");


// for (var angkot = 1; angkot <= jmlAngkot; angkot++) {
//   if (angkot <= angkotBeroperasi) {
//     console.log("Angkot No." + angkot + " beroperasi dengan baik");
//   } else {
//     console.log("Angkot No." + angkot + " tidak beroperasi dengan baik");
//   }
// }

// seceond chois
var beroprasi = prompt("masukan angkot yang beroprasi")
for (angkot = 1; angkot <= 10; angkot ++) {
    if ( angkot <= beroprasi){
        console.log("Angkot No. " + angkot + " beroprasi dengan baik.");
    }else{
        console.log("Angkot No. " + angkot + " sedang tidak beroprasi.");
    }
}