function clearText(){
    var res = document.getElementById("result");
    var calc = document.getElementById("calc");
    res.innerHTML = "";
    calc.value = "";
}

function reverce(){
    var res = document.getElementById("result");
    var calc = document.getElementById("calc");
    var btn = document.getElementById("btnGo");
    var tbtn = document.getElementById("titleBtn");
    res.innerHTML = "";
    calc.value = "";			
    tbtn.innerHTML = (tbtn.innerHTML == "DEC &gt;&gt; HEX") ? "HEX >> DEC": "DEC >> HEX";
    btn.onclick = (btn.onclick == toHex)?toDec:toHex;
}

function toDec(){
    var res = document.getElementById("result");
    var calc = document.getElementById("calc");
    var converter = new Converter(MathBigNum);

    res.innerHTML = converter.toDec(calc.value);
}

function toHex(){
    var res = document.getElementById("result");
    var calc = document.getElementById("calc");
    var converter = new Converter(MathBigNum);

    res.innerHTML = converter.toHex(calc.value);
}