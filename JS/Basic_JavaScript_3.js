function add(x,y) {
    return x+y;
}
var z = add(5,2);
document.getElementById("add").innerHTML = z;

function subtract(x,y) {
    return x-y;
}
s=subtract(5,2);
document.getElementById("subtract").innerHTML="5-2= " + s;

function mult(x,y) {
    return x*y;
}
m=mult(5,2);
document.getElementById("mult").innerHTML="5*2= " + m;

function div(x,y) {
    return x/y;
}
d=div(5,2);
document.getElementById("div").innerHTML="5/2= " + d;

function moar(x,y,a,b,c) {
    return (x+y)*a/b-c;
}
mo=div(5,2,7,249,1902875434);
document.getElementById("moar").innerHTML="moar!= " + mo;

function mod(x,y) {
    return x%y;
}
md=mod(5,2);
document.getElementById("mod").innerHTML="5/2= " + md;

function negate(x) {
    return -x;
}
neg=negate(5);
document.getElementById("negate").innerHTML="neg= " + neg;3

function increment(x) {
    return x++;
}
inc=increment(5);
inc++;
document.getElementById("increment").innerHTML="++= " + inc;

function decrement(x) {
    return x--;
}
dec=decrement(5);
dec--;
document.getElementById("decrement").innerHTML="--= " + dec;

window.alert(Math.random());

window.alert(Math.random()*100)

document.getElementById("expo").innerHTML = Math.exp(25,5);

document.getElementById("PI").innerHTML="The Cake is a LIE! " + Math.PI;