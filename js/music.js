document.addEventListener("DOMContentLoaded", function(){
    var audio = document.getElementById("audio");
    var img = document.querySelector(".rotating");

    audio.addEventListener("play", function() {
        img.style.animationPlayState = "running";
    });

    audio.addEventListener("pause", function() {
        img.style.animationPlayState = "paused";
    })
});