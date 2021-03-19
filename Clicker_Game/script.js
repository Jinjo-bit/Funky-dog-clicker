var clicks = 0;

function onClick() {
  clicks += 1;
  document.getElementById("clicks").innerHTML = clicks;
};

//music
var source = "Race.mp3"
var audio = document.createElement("audio");

audio.autoplay = true;

audio.load()
audio.addEventListener("load", function() { 
    audio.play(); 
}, true);
audio.src = source;