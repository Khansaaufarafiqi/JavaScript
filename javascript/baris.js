// var b = "";
// for (let i = 10; i >= 0; i--){
//     for(var j = 0; j <= i; j++){
//         b += "@";
//     }
//     for( var z = 20; z >= i; z--){
//         b += "@";
//     }
//     b += "\n";
// }
// for (let k = 0; k < 20; k++){
//     for(var f = 0; f <= k; f++ ){
//         b += "@";
//     }
//     b += "\n";
// }
// console.log(b);
// var    n      = 5; // jumlah baris
// var result = '';

// // buat baris
// for (var row = 1; row <= n; row++) {

//   // cetak spasi
//   for (var space = 0; space < n - row; space++) {
//     result += ' ';
//   }
  
//   // buat pola
//   for (var star = 0; star < row; star++) {
    
//     // jika nilai var star lebih dari atau sama dengan 1 tambahkan simbol tambah (+) setelahnya 
//     if (star >= 1) {
//         result += '+'
//     }
    
//     // selain dari itu langsung cetak *
//     result += '*';
//   }
  
//   // print row
//   result += '\n';
// }

// console.log(result);

// var baris = 7;
// var hasil = "";

// for (var horizo = 1; horizo <= baris; horizo++ ){

//     for(var sepasi = 0; sepasi <= baris - horizo; sepasi++){
//         hasil+=" ";
//     }
//     for(var pola = 0; pola < horizo; pola++){
//         if (pola >= horizo ){
//             hasil+="*";
//         }
//         hasil +="V ";
//     }
//     for(var sepasi = 0; sepasi < baris - horizo; sepasi++){
//         hasil+="  ";
//     }
//     for(var pola = 0; pola < horizo; pola++){
//         if (pola >= horizo ){
//             hasil+="*";
//         }
//         hasil +=" V";
//     }
//     hasil+=("\n");

// }
// for (var k = 9; k >= 0; k--){
//     for(var sepasi = 11; sepasi > k; sepasi--){
//         hasil+="  ";
//     }
//     for(var f = 0; f <= k; f++ ){
//         hasil += "V";
//         for(var sepasi = 0; sepasi <= 1; sepasi++){
//             hasil+=" ";
//         }
//     }
//     hasil += "\n";
//         }
// console.log(hasil)
// var data = 15;
// var hasil = "";
// for(var atas = 0; atas <= data; atas++){
//     // for(var kanan = 0; kanan <= data; kanan++){
//     //     hasil += "Y";
//     // }
//     // for(var bentuk = 15; bentuk >= atas; bentuk-- ){
//     //     hasil += "p";
//     // }
//     for(var bawah = 0; bawah <= atas; bawah++){
//         hasil += "p";
        
//     }
//     hasil += "\n"
//  }
// console.log(hasil)
let ulang = true;

while (ulang) {

  let chance = 7;

  let c = Math.floor(Math.random() * 10) + 1;

  let hasil = '';



  while (chance ) {

    alert("Memulai permainan dengan " + chance + " kesempatan");

    let p = parseInt(prompt("Tebak angka 1-10"));

    if (p === c) {

      hasil = 'BENAR';

      alert('Anda ' + hasil + ' angka yang anda tebak adalah ' + c);

      break;

    } else if (p < c) {

      hasil = 'RENDAH';

      chance -= 1;

      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');

    } else if (p > c) {

      hasil = 'TINGGI';

      chance -= 1;

      alert('Terlalu ' + hasil + ' angka yang anda tebak adalah ' + p + '\ntersisa ' + chance + ' kesempatan lagi.');

    }



    if (chance === 0) {

      alert('Anda gagal \nangka yang dicari adalah ' + c);

    }

  }

  ulang = confirm('Ulang Lagi?');

}

alert("Terima kasih");