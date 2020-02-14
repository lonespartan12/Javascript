function full_sentence() {
    var part1="I have ";
    var part2="made this ";
    var part3="into a complete";
    var part4="sentence";
    var whole_sentence=part1.concat(part2,part3,part4);
    document.getElementById("concat").innerHTML=whole_sentence;
}