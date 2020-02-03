document.write('Hello, world!<br><br>');

var A = "This is a string";
document.write(A);

var B = "this is my second variable";
window.alert(B);

var c="<br>", d = "-Dr. Seuss";

var d=d.fontcolor("green");


document.write("Lisa told bart, \"knock it off, Bart! Or I'll tell dad!\" <br> \"Eat my shorts!\" Bart respnded.<br><br>");

document.write("\"Be who you are and say what you feel,"
+ " because those who mind don\'t matter and those who matter don\'t mind.\""
+ c + d);

document.write(c+(3+3));

function myFirstFunction() {
    var str="This text is green!";
    var result=str.fontcolor("green");
    document.getElementById("Green_text").innerHTML=result;
}