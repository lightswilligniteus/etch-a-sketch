createGrid(16);

function createGrid(dimension) {
  let container = document.querySelector(".container");
  for(let j=0; j < dimension*dimension; j++) {
    container.innerHTML += "<div class='grid-item'></div>";
  }
  let gridTemplate = "grid-template-columns:repeat(" + dimension + ", auto)";
  container.setAttribute('style', gridTemplate);
}
