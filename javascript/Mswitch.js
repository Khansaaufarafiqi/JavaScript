var menu = prompt("silahkan pilih makan / minum");

switch(menu){
    case "makan":
        console.log("MENU \n 1 nasi goreng \n 2 Pasta Carbonara: \n 3 Sushi Roll Variasi:")
        alert ("Mohon pilih hidangan nya");
        var makan = prompt ("masukan nomornya ")
        switch(makan){
            case "nasi goreng":
                alert ("Trimakasih nasi goreng Segera Kami Proses!!");
                break;
            case "pasta":
                alert ("Trimakasih pasta Segera Kami Proses!!");
            console.log(" \n anda memilih pasta")
                break;
            default:
            alert("Yang kamu masukan tidak ada di menu")
        }
        var makan = (" \n nasiGoreng")
        break;
    case"minum":    
        console.log(" 1 Es Teh Manis \n 2 Cappuccino: \n 3 Smoothie Berry Blast:")
        alert ("silahkan ini adalah menunya");
        prompt ("masukan nomornya ")
        alert ("Trimakasih Minuman Segera Kami Proses!!") 
        break;
    default :
        alert("anda tidak memilik menu!!")
}
// tobecontinon