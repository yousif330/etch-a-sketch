function setGrid(grid) {
  if (grid === 'invalid') {
    grid = 16;
  }
  const totalSize = 672;
  iterationNumber = grid * grid;

  for (let i = 0; i < iterationNumber; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", `height: ${totalSize / grid}px; width: ${totalSize / grid}px;`);
    div.classList.toggle("pixel");
    frame.appendChild(div);
  }
}

function setEventListener() {
  const pixels = document.querySelectorAll(".pixel");
  pixels.forEach(pixel => {
    pixel.addEventListener("mouseenter", () => {
      if (random === true) {
        pixel.style.backgroundColor = `#${randomColor()}`;
      }
      else {
        pixel.style.backgroundColor = "blue";
      }
    });
  });
}

function randomColor() {
  return Math.floor(Math.random()*16777215).toString(16);
}

let random = false;

const button = document.querySelector("button");
const frame = document.querySelector(".frame");
setGrid(16);

button.addEventListener("click", () => {
  let grid = +prompt("Enter grid size");
  if (grid > 64 || !Number.isInteger(grid) || grid <= 0) {
    grid = 'invalid';
  }
  
  while (frame.childElementCount !== 0) {
    frame.removeChild(frame.lastElementChild);
  }

  setGrid(grid);
  setEventListener();
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
  document.querySelectorAll(".pixel").forEach(pixel => {
    pixel.style.backgroundColor = "white";
  });
});

const randomButton = document.querySelector(".random");
randomButton.addEventListener("click", () => {
  randomButton.classList.toggle("clicked");
  random = !random;
})

setEventListener();
