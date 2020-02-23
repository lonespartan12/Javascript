function ranger() {
    var favorite_ranger;
    var rangers=document.getElementById("color_input").value;
    var ranger_string= " Ranger is your favorite Power Ranger"
    switch(rangers) {
        case "Red":
            favorite_ranger="Red" + ranger_string;
        break;
        case "Yellow":
            favorite_ranger="Yellow" + ranger_string;
        break;
        case "Green":
            favorite_ranger="Green" + ranger_string;
        break;
        case "Blue":
            favorite_ranger="Blue" + ranger_string;
        break;
        case "Pink":
            favorite_ranger="Pink" + ranger_string;
        break;
        case "Black":
            favorite_ranger="Black" + ranger_string;
        break;
        default:
            favorite_ranger="Zordon is better than any Power Ranger";
    }
    document.getElementById("output").innerHTML=favorite_ranger;
}

function Hello_World_Function() {
    var A = document.getElementsByClassName("click");
    A[0].innerHTML="The text has changed!";
}