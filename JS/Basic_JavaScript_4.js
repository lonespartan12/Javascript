function myDictionary() {
    var Animal = {
        species:"Dog",
        color:"Black",
        breed:"Labrador",
        age:5,
        sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML=Animal.sound;
}