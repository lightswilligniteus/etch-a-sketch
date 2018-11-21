
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
  // let color = changeColor();
  for(let i=0; i < gridItems.length; i++) {
    gridItems[i].addEventListener("mouseover", () => {
      // gridItems[i].style.backgroundColor = color;
      let colour = (shadesOfBlack(gridItems[i].style.backgroundColor));
      gridItems[i].style.backgroundColor = "rgb(" + colour + "," + colour + "," + colour + ")";

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
  });
}

function shadesOfBlack(currentColour) {
  let colour = 250 / 10;
  let currValue = currentColour.substring(
    currentColour.lastIndexOf(",") + 1,
    currentColour.lastIndexOf(")")
  );
  
  if (currValue == 0) {
    return 251;
  } else if (currValue < 254 && currValue > 1) {
    return currValue - colour;
  } else if (currValue < 5) {
    return 1;
  }
}

//Change hover to a random colour
// function changeColor() {
//   var num = Math.round(0xffffff * Math.random());
//   var r = num >> 16;
//   var g = num >> 8 & 255;
//   var b = num & 255;
//   return 'rgb(' + r + ', ' + g + ', ' + b + ')';
// }
