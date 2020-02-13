function RideFunction() {
    var Height, canRide;
    Height=document.getElementById("Height").value;
    canRide=(Height<52) ? "you are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML=canRide + " to ride.";
}