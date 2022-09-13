const divs = document.querySelectorAll("div");

function logText(e) {
    console.log(e.target.classList.value)
}

divs.forEach(div => div.addEventListener("click", logText));