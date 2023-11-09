function HalteBus (bus, destinasi, sopir, tiket){
    this.bus = bus;
    this.destinasi = destinasi;
    this.sopir = sopir;
    this.tiket = tiket;

    this.busDatang = function(namaBus){
        this.bus.push(namaBus);
        return this.bus;
    }
    
    this.busKeluar = function(namaBus, bayar){
        
        if( this.bus.length == 0 ){
            alert("Penumpang kosong!")
            return false;
        }
        for( var i = 0; i < this.bus.length; i++ ){
            
            // if(this.bus[i] == namaBus){
            //     this.bus[i] = undefined;
            //     this.tiket += bayar;
            //     return this.bus;
            // }
            if(this.bus.pop(namaBus)){
                this.bus[i] = undefined;
                this.tiket += bayar;
                return this.bus
            }
        }
    }

};


var Halte1 = new HalteBus([], ["kediri","malang"], "Khansa aufa", 0 )
var Halte1 = new HalteBus([], ["malang","surabaya"], "yoyok susilo", 0 )