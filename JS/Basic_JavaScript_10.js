var str="Hello World!";
var n=str.length;
document.write(n+"<br>");

var instruments=["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];
var content="";
var y;

function for_loop(){
    for(y=0; y<instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML=content;
}

function array_pics() {
    var picture = [];
    picture[0]="boat";
    picture[1]="ice";
    picture[2]="red";
    picture[3]="pointy";
    picture[4]="safety";
    picture[5]="street";
    picture[6]="sunrise";
    picture[7]="waterfall";
    picture[8]="fallwater";
    picture[9]="eagle";
    document.getElementById("array_pics").innerHTML="in this picture there is a " + picture[6]+".";
}