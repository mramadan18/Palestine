let box = document.getElementsByClassName("box")[0],
    blocks = document.getElementsByClassName("blocks");

for (let i = 0; i < 400; i++) {
  box.innerHTML += "<div class='blocks'></div>";
  blocks[i].style.animationDelay = `${i * 0.05}s`;
}
