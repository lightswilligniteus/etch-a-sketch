createGrid(16);
doHover();

function createGrid(dimension) {
  let container = document.querySelector(".container");
  for(let j=0; j < dimension*dimension; j++) {
    container.innerHTML += "<div class='grid-item'></div>";
  }
  let gridTemplate = "grid-template-columns:repeat(" + dimension + ", auto)";
  container.setAttribute('style', gridTemplate);
}

function doHover() {
  let gridItems = document.querySelectorAll(".grid-item");
  console.log(gridItems.length);
  for(let i=0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseover", () => {
      gridItems[i].setAttribute("class", "colored");
    });
  }
}
