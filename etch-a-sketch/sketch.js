const body = document.querySelector("body");
const newbutton = document.createElement("button");
newbutton.textContent = "Create New Grid";
body.appendChild(newbutton);

newbutton.addEventListener("click", () => {
    const oldgrid = document.querySelector(".container");
    oldgrid.remove();
    let size = 101;
    do {
        size = parseInt(prompt("Enter Desired Grid Size"));
    } while (size > 100); // ensures that there are not more than 100 squares per side
    createGrid(size);
});

const randbutton = document.createElement("button");
randbutton.textContent = "Random RBG Color";
body.appendChild(randbutton);

randbutton.addEventListener("click", () => {
    randbutton.classList.toggle("selectedmode");
    rainbow = !rainbow; // toggles boolean value of rainbow
    // adding random colour value to each hover
    const cells = document.querySelectorAll(".gamecell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            if (!rainbow) { // checks for rainbow mode
                e.target.style.backgroundColor = "pink"; // sets background color back to pink if it is on normal mode
            } else {
                let randr = Math.floor(Math.random() * 256); // generates random rgb values
                let randg = Math.floor(Math.random() * 256);
                let randb = Math.floor(Math.random() * 256);
                e.target.style.backgroundColor = "rgb(" + randr + ", " + randg + ", " + randb + ")"; // changes mouseover event to random 
            }
        });
    });
});

const resetbutton = document.createElement("button");
resetbutton.textContent = "Reset Grid";
body.appendChild(resetbutton);

resetbutton.addEventListener("click", () => {
    const oldgrid = document.querySelector(".container");
    oldgrid.remove();
    createGrid(currentSize);
});

function createGrid(size) {
    currentSize = size;
    // creating the grid and the cells
    const grid = document.createElement("div");
    grid.classList.add("container");
    grid.style.gridTemplateColumns = "repeat(" + size + ", " + 800/size + "px)"; // sets up the grid columns
    body.appendChild(grid);
    // adds cells to the grid
    for (let i = 0; i < size * size; i++) {
        const newdiv = document.createElement("div");
        newdiv.classList.add("gamecell");
        newdiv.style.width = 800/size + " px"; // sets up appropriate size of each cell
        newdiv.style.height = 800/size + " px";
        grid.appendChild(newdiv);
    }

    // adds hover functionality
    const cells = document.querySelectorAll(".gamecell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            e.target.classList.add("hover");
        });
    });

    // settings for random color mode
    randbutton.classList.remove("selectedmode")
    rainbow = false;
}

let currentSize = 16; // global variable keeping track of current grid size
let rainbow = false; // global variable keeping track of if random color mode is on
createGrid(16);