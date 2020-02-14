var x = 10;

function addNumbers1() {
    document.write(20+x+"<br>");
}

function addNumbers2() {
    document.write(x+100+"<br>"+"<br>");
}

function addNumbers3() {
    var y = 10;
    //document.write(20+y+"<br>");
    console.log(20+y+"<br>");
}

function addNumbers4() {
    //document.write(y+100+"<br>"+"<br>");
    console.log(y+100+"<br>"+"<br>");
}

addNumbers1();
addNumbers2();
addNumbers3();
addNumbers4();

function getDate() {
    if (new Date().getHours() <18) {
        document.getElementById("greeting").innerHTML="Good Afternoon!";
    }
}