// var penumpang = [];
// var tambahPenonton = function(namaPenonton, kursiPenonton){
  //     if (kursiPenonton.length == 0){
    //         kursiPenonton.push(namaPenonton);
    //         return kursiPenonton;
    //     }else{
      //         for( var i = 0; i < kursiPenonton.length; i++){
        //             if(kursiPenonton[i] == undefined){
          //                 kursiPenonton[i] = namaPenonton;
          //                 return kursiPenonton;
          //             }else if(i == kursiPenonton.length -1){
            //                 kursiPenonton.push(namaPenonton);
            //                 return kursiPenonton;
            //             }else if(kursiPenonton.indexOf(namaPenonton) >- 1){
              //                 console.log(namaPenonton + " Sudah ada didalam angkot")
              //                 return kursiPenonton
              //             }
              //         }
              //     }
              // }
              
              // membuat data list untuk bioskop (lebih sederhana)
              
var penonton = [];

function tambahPenonton(namaPenonton, kursiPenonton) {
  if (kursiPenonton.indexOf(namaPenonton) > -1) {
    // Jika nama penonton sudah ada maka cetak console.log
    console.log(namaPenonton + " Sudah ada di bioskop");
  }else{
        var kosong = kursiPenonton.findIndex(Object.is.bind(null,undefined));
            if(kosong >= 0){
                //jika kursi penonton undifind atau 0 maka cettak nama penonton atau istilahnya mengisai
                kursiPenonton[kosong] = namaPenonton;
            }else{
                //jika semua sudah terisis maka tambahkan penonton dari belakang atau PUSH
                kursiPenonton.push(namaPenonton);
            }
    }
    return kursiPenonton;
}
function hapusPenonton(namaPenonton,kursiPenonton){
  if( kursiPenonton.length == 0 ){
    console.log("BIOSKOP masih kosong");
  }else{
    for( var isi = 0; isi < kursiPenonton.length; isi++){
      if(kursiPenonton[isi] == namaPenonton){
        kursiPenonton[isi] = undefined;
        return kursiPenonton;
      }else if( isi == kursiPenonton.length - 1){
        console.log(namaPenonton + " tidak ada dalam BIOSKOP")
        return kursiPenonton
      }
    }
  }
  return kursiPenonton;
}

