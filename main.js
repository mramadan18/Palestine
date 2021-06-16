let box = document.querySelector(".box"),
    blocks = document.getElementsByClassName("blocks");

for (let i = 0; i < 400; i++) {
  box.innerHTML += "<div class='blocks'></div>";
  blocks[i].style.animationDelay = `${i * 0.05}s`;
};

let audio = document.createElement("audio");

audio.src = "AUDIO.m4a";

audio.play();
