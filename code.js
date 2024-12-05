function createGrid(numberOfSquares) {
  for (let i = 1; i <= numberOfSquares; i++) {
    divList[i - 1] = document.createElement("div");
    divList[i - 1].className = `grid-element`;
    divList[i - 1].id = `${i}`;
  }

  divList.forEach((element) => {
    gridContainer.appendChild(element);
  });

  divList.forEach((element) => {
    element.addEventListener("mouseover", () => {
      element.style.backgroundColor = "#F96167";
    });
  });
}

const gridContainer = document.createElement("div");
gridContainer.className = "grid-container";

const body = document.querySelector("body");
body.appendChild(gridContainer);

let divList = [];

createGrid(15);

let buttonDiv = document.createElement("div");
buttonDiv.className = "button-div";
body.appendChild(buttonDiv);

let createNewGrid = document.createElement("button");
createNewGrid.className = "create-new-grid";
createNewGrid.textContent = "Create New Grid";

buttonDiv.appendChild(createNewGrid);

buttonDiv.addEventListener("click", () => {
  let numberOfSquares = +window.prompt("Enter the number of squares");
  if (numberOfSquares && numberOfSquares <= 100) {
    divList = [];
    gridContainer.innerHTML = "";
    createGrid(numberOfSquares);
  }
  if (numberOfSquares > 100) {
    alert("maximum number of squares is 100");
  }
});
