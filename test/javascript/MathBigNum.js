class MathBigNum{
    static multi(x, y) {
        var xStr = x.split('').reverse();
        var l = xStr.length;
        var multi = "0";
        var z = "";
        var r = 0;
        for (var i = 0; i < l; i++) {
            r = xStr[i] * (+y);
            r = "" + r + z;
            z += "0";
            multi = this.sum(multi, r);
        }
        return multi.toString();
    }

    static sum(x, y) {
        var a = (x).split('').reverse();
        var b = (y).split('').reverse();
        var c = 0;
        var p = 0;
        var n = 0;
        var m = 0;
        var big = "";
        var len = (a.length > b.length) ? a.length : b.length;
        for (var i = 0; i < len; i++) {
            n = (i < a.length) ? a[i] : 0;
            m = (i < b.length) ? b[i] : 0;
            var c = (+n) + (+m) + p;
            if (c >= 10) {
                p = 1;
                c = c - 10;
            } else {
                p = 0;
            }
            big += "" + c;
        }
        if (p == 1)
            big += "" + p;
        return ("" + big).split('').reverse().join('');
    }
    
    static divide(dividend) {
        var divider = 16;
        var quotient = 0;
        var result = '';
        var tResult = '';
        dividend = dividend.split('');

        for (var i = 0; i < dividend.length; i++) {
            tResult += '' + dividend[i];
            if (+tResult < +divider) {
                result += '' + 0;
                continue;
            }
            tResult = +tResult;
            quotient = Math.floor(tResult / divider);
            result += '' + quotient;
            tResult = tResult - (divider * quotient);
        }
        return result.replace(/^0+/, '');
    }
    
    static subtraction(x, y) {
        var a = (x).replace(/^0+/, '').split('');
        var b = (y).replace(/^0+/, '').split('');
        if (a.length < 5 && b.length < 5) {
            a = a.join('');
            b = b.join('');
            return (+a) - (+b);
        }
        if (a.length != b.length)
            return -1;
        for (var i = 0; i < a.length; i++) {
            if (a[i] === b[i]) {
                a[i] = 0;
                b[i] = 0;
            } else {
                a = a.join('');
                b = b.join('');
                return (+a) - (+b);
            }
        }
        return 0;
    }  
}