function RideFunction() {
    var Height, canRide;
    Height=document.getElementById("Height").value;
    canRide=(Height<52) ? "you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=canRide + " to ride.";
}

function vote() {
    var age, eligable;
    age=document.getElementById("age").value;
    eligable=(age<18) ? " to grow up slacker!":" to submit votes for the deceased!";
    document.getElementById("vote").innerHTML="it's time" + eligable;
}

function vehicle(make,model,year,color) {
    this.vehicle_make=make;
    this.vehicle_model=model;
    this.vehicle_year=year;
    this.vehicle_color=color;
}

var jack = new vehicle("dodge","viper",2020,"red");
var emily = new vehicle("jeep","trail hawk",2019,"white and black");
var erik = new vehicle("ford","pinto",1971,"mustard");

function myFunct() {
    document.getElementById("keywords_and_constructors").innerHTML=
    "Erik drives a " + erik.vehicle_color + "-colored " + erik.vehicle_model + 
    " manufactured in " + erik.vehicle_year;

}

function valve(pwrOn,pos,flt) {
    this.energized=pwrOn;
    this.position=pos;
    this.fault=flt;
}

var xv201 = new valve("on","Open",long);
var xv301 = new valve("off","open","faulted");
var xv401 = new valve("on","closed","faulted");

function vlvStatus() {
    document.getElementById("New_and_This").innerHTML = "valve xv201 is turned " + 
    xv201.energized + " and in the " + xv201.position + " position and is " + xv201.fault;
}