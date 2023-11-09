var semuaangkot = prompt("masukan jumlah angkot");
var ulangi = true
while(ulangi){
        var beroprasi = prompt("masukan angkot yang beroprasi");
        ulangi = confirm("Ulangi mengisi angkot yang beroprasi ??..");      
}
// parseINt berguna untuk membuat atau MEMAKSA string menjadui integer
    confirm("cuman kita kasih 3 angkot untuk lembur ")
    var lembur = parseInt(prompt("masukan angkot yang lembur"));
    var lembur2 = parseInt(prompt("masukan angkot yang lembur"));
    var lembur3 = parseInt(prompt("masukan angkot yang lembur"));
for (angkot = 1; angkot <= semuaangkot; angkot ++)  {
    if ( angkot <= beroprasi && angkot != lembur3 && angkot != lembur2 && angkot != lembur){
        console.log("Angkot No. " + angkot + " beroprasi dengan baik.");
    }else if( angkot === lembur || angkot === lembur2 || angkot === lembur3){
        console.log("Angkot No. " + angkot + " sedang lembur.");
    }
    else{
        console.log("Angkot No. " + angkot + " sedang tidak beroprasi.");
    }
}