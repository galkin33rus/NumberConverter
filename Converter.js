class Converter{

    constructor(math) {
        this.math = math;
    }

    toHex(_val){
        var decArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']; 
        var dec = "" + _val.trim().toUpperCase().replace(/\s+/g, "");
        if (dec.length <= 2 && (+dec) < 16) {            
            return  decArray[dec];
        };
        var tval = 0;
        var tdec = "";
        var tres = "";
        var tmul = "";

        while (dec.length > 2 || (+dec) >= 16) {
            tdec = "" + dec;
            dec = "" + this.math.divide(dec.toString());
            tmul = this.math.multi(dec, '16');
            tval = this.math.subtraction(tdec, tmul);
            tres += "" + decArray[tval];
        }
        
        tres += "" + decArray[+dec];
        return tres.split('').reverse().join('');
    }

    toDec(_val){
        var decArray = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15 };        
        var hex = "" + _val.trim().toUpperCase().replace(/\s+/g, "");
        var hexArray = hex.split("").reverse();
        var dec = "0";        
        var mult = "0";
        var po16 = "0";

        for (var i = 0; i < hexArray.length; i++) {
            po16 = this.pow16('16', i);
            mult = this.math.multi("" + po16, "" + decArray[hexArray[i]]);
            if (mult.split('').reduce(function (a, b) { return a + b; }, 0) == 0)
                mult = "0";
            dec = this.math.sum(dec, mult);
        }

        return dec;
    }
   
    pow16(x, y){
        if (y == 0)
            return 1;
        var p16 = "16";
        for (var i = 1; i < y; i++) {
            p16 = this.math.multi(p16, '16');
        }
        return p16;
    }

}