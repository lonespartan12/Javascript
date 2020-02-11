function myDictionary() {
    var Animal = {
        species:"Dog",
        color:"Black",
        breed:"Labrador",
        age:5,
        sound:"Bark!",
        sound:"kraB!"
    };
    delete Animal.sound;
    document.getElementById("Dictionary").innerHTML=Animal.sound;
}