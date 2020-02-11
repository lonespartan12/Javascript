document.write(typeof"keystone ");

function myFunction() {
    //document.getElementById("Test").innerHTML=0/0;
    //document.getElementById("Test").innerHTML=isNaN('This is a string');    
    document.getElementById("Test").innerHTML=isNaN('007');
}

document.write(2E310);
document.write(-3E310);
document.write(10>2);
document.write(2>10);

console.log(2+2);
document.write("10"+5);
console.log(2>10);

document.write(10==10);

document.write(11==3);
x=10;
y=10;
document.write(x===y);
a=76;
b="76";
document.write(a===b);
c="Magnus";
d="Magnus";
document.write(c===d);
a=69;
b="76";
document.write(a===b);
x=89;
y=10;
document.write(x===y);

x=10;
y=10;
a=5;
b=7
document.write(a<b&&x==y);
document.write(a>b&&x==y);
document.write(a>b||x==y);
document.write(a>b||x>y);

function notFunction() {
    document.getElementById("Not").innerHTML=!(5>10);
    //document.getElementById("Not").innerHTML=!(20>10);
}