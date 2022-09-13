const container = document.querySelector("#container");
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorius text-content!";
container.appendChild(content);

let para = document.createElement("p");
para.style.color = "red";
para.textContent = "Hey I'm red!";

container.appendChild(para);

let heading = document.createElement("h3");
heading.style.color = "blue";
heading.textContent = "I'm a blue h3!";

container.appendChild(heading);

let divisor = document.createElement("div");
divisor.style.cssText = "border : 1px solid black; background-color : pink;"
let myHeading = document.createElement("h1");
myHeading.textContent = "I'm in a div";
let myPara = document. createElement("p");
myPara.textContent = "ME TOO!";
divisor.appendChild(myHeading);
divisor.appendChild(myPara);
container.appendChild(divisor);

let btn = document.querySelector("#btn");
btn.addEventListener("click", (e) => e.target.style.background = "blue");