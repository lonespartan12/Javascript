
function mouseOver() {
    document.getElementById("btn1").style.background="blue";
}

function mouseOut() {    
    document.getElementById("btn1").style.background="red";
}


var c=false;
function clickMe() {
    if(c==false) {
    var strG="This text is Green!";
    var result=strG.fontcolor("green");
    document.getElementById("btn1").innerHTML=result;
    c=true;
    } else{
    var strR="This text is Red!";
    var result=strR.fontcolor("pink");
    document.getElementById("btn1").innerHTML=result;
    c=false;
    }
}
