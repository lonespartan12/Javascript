var str="Hello World!";
var n=str.length;
document.write(n+"<br>");

var instruments=["guitar", "drums", "piano", "bass", "violin", "trumpet", "flute"];
var content="";
var y;
function call_loop() {
    var i=0;
    while (i<10) {        
        document.write(i+"<br>");
        i++;
    }
}
function for_loop(){
    for(y=0; y<instruments.length; y++) {
        content += instruments[y] + "<br>";
    }
    document.getElementById("list_of_instruments").innerHTML=content;
}

function array_pics() {
    var picture = [];
    var pics="";
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

    for(i=0; i<picture.length; i++) {
        pics += picture[i] + "<br>";
        document.getElementById("array_pics").innerHTML="in this picture there is a " + picture[i]+".";
    }
    //document.getElementById("array_pics").innerHTML="in this picture there is a " + picture[pics]+".";
}

function constant_funct() {
    const musical_instrument = {type:"guitar", brand:"fender", color:"black", 
        sytle:"electric"};
    musical_instrument.color="blue";
    musical_instrument.price="$900";
    //musical_instrument= {style:"accoustic"};
    document.getElementById("constant").innerHTML="The cost of the " + 
    musical_instrument.sytle +" "+ musical_instrument.type + " was " +
     musical_instrument.price;    
}

function let_funct() {
    var x=82;
    document.write(x);
    {
        let x=33;
        document.write("<br>"+x);
    }
    document.write("<br>"+x);
}

function return_stuffs() {
    return Math.PI;
}
document.getElementById("return").innerHTML=return_stuffs();

let car={
    make: "Dodge ",
    model: "Viper ",
    year: "2021 ",
    color: "red ",
    description: function() {
        return "The car is a " + this.year + this.color + this.make + this.model;
    }
};
document.getElementById("car_object").innerHTML=car.description();

function breakstuff(){
    var txt="";
    var i;
    for (i=0; i<10; i++) {
        if(i===3) {break;}
        txt += "The number is " + i + "<br>";
        document.getElementById("breakstuff").innerHTML=txt;
    }
}

function continueStuff(){
    var txt="";
    var i;
    for (i=0; i<10; i++) {
        if(i===3) {continue;}
        txt += "The number is " + i + "<br>";
        document.getElementById("breakContinue").innerHTML=txt;
    }
}

// this is my comment for step 202