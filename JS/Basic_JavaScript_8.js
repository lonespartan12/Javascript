function full_sentence() {
    var part1="I have ";
    var part2="made this ";
    var part3="into a complete";
    var part4="sentence";
    var whole_sentence=part1.concat(part2,part3,part4);
    document.getElementById("concat").innerHTML=whole_sentence;
}

function slice_Method() {
    var sentence = "All work and no play makes Johnny a dull boy.";
    var section = sentence.slice(27,33);
    document.getElementById("slice").innerHTML=section;
}

function upperTime() {
    var text = document.getElementById("upper").innerHTML;
    document.getElementById("upper").innerHTML=text.toUpperCase();
}

function findStuff() {
    var str=document.getElementById("me").innerHTML;
    var pos=str.search("you");
    document.getElementById("findMe").innerHTML=pos;
}

function string_Method() {
    var x=182;
    document.getElementById("Num2String").innerHTML=x.toString();
}

function precision_Method() {
    var x=12938.30202938475093282;
    document.getElementById("precision").innerHTML=x.toPrecision(10);
}

function fxd() {
    var num = 4.5887467589;
    var n = num.toFixed(3);
    document.getElementById("hola").innerHTML= n;
}

function primitive() {
    var str="Poke it with a stick";
    var res=str.valueOf();
    document.getElementById("smash").innerHTML=res;
}