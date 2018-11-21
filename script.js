createGrid();

function createGrid() {
  let container = document.querySelector(".container");
  for(let i=0; i < 16; i++) {
    container.innerHTML += "<div>";
    for(let j=0; j < 16; j++) {
      container.innerHTML += "<div class='innerDiv'></div>";
    }
    container.innerHTML += "</div>"
  }
}
