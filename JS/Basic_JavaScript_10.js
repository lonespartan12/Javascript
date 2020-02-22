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