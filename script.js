
createGrid(16);
doHover();
reset();

function createGrid(dimension) {
  let container = document.querySelector(".container");
  for(let j=0; j < dimension*dimension; j++) {
    let div = document.createElement('div');
    div.classList.add('grid-item');
    container.appendChild(div);
  }
  let gridTemplate = "grid-template-columns:repeat(" + dimension + ", auto)";
  container.setAttribute('style', gridTemplate);
}

function doHover() {
  let gridItems = document.querySelectorAll(".grid-item");
  for(let i=0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseover", () => {
      gridItems[i].classList.add("class", "colored");
    });
  }
}

function reset() {
  let reset = document.querySelector("#reset");
  let container = document.querySelector(".container");
  reset.addEventListener("click", () => {
    container.innerHTML = "";
    let userDimensions = prompt();
    userDimensions = Number(userDimensions);
    createGrid(userDimensions);
    doHover();
    reset();
  });
}
