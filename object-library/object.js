function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function() {
    let outputMessage = this.title + " by " + this.author + ", " + this.pages + " pages, ";
    if (this.read) {outputMessage += "already read";}
    else {outputMessage += "not read yet";}
    return outputMessage;
}

function addBookToLibrary(libraryArray) {
    let title = prompt("Enter title of the book");
    let author = prompt("Enter the author of the book");
    let pages = parseInt(prompt("Enter the number of pages of the book"));
    let read = prompt("Have you read this book? (Y/N)");
    if (read == "Y" || read == "y") {read = true;}
    else {read = false;}
    let newBook = new Book(title, author, pages, read);
    libraryArray.push(newBook);
}

function displayLibrary(libraryArray) {
    clearDisplay();
    let length = libraryArray.length;
    const table = document.querySelector("#library");

    for (let i = 0; i < length; i++) {
        const row = table.insertRow();

        const datatitle = row.insertCell();
        datatitle.innerHTML = libraryArray[i].title;
        const dataauthor = row.insertCell();
        dataauthor.innerHTML = libraryArray[i].author;
        const datapages = row.insertCell();
        datapages.innerHTML = libraryArray[i].pages;
        const dataread = row.insertCell();
        if (libraryArray[i].read) {dataread.innerHTML = "Already Read";}
        else {dataread.innerHTML = "Not Yet Read";}

        const deletebutton = document.createElement("button");
        deletebutton.textContent = "DELETE ENTRY";
        deletebutton.addEventListener("click", () => {
            removeBookFromLibrary(library, i);
            displayLibrary(libraryArray); // recursive call ???
        })
        row.appendChild(deletebutton);

        const togglebutton = document.createElement("button");
        togglebutton.textContent = "TOGGLE COMPLETION";
        togglebutton.addEventListener("click", () => {
            library[i].read = !library[i].read;
            displayLibrary(libraryArray); // recursive call ???
        })
        row.appendChild(togglebutton);
    }
}

function clearDisplay() {
    const rows = document.querySelectorAll("tr");
    rows.forEach(row => {
        if (row.id != "headings") {row.remove();}
    });
}

function removeBookFromLibrary(libraryArray, index) {
    if (index >= libraryArray.length || index < 0) {return;}
    libraryArray.splice(index, 1);
}

let library = [];

const container = document.querySelector("#container");
const table = document.querySelector("#library");
const add = document.createElement("button");
add.textContent = "NEW BOOK";
add.addEventListener("click", () => {
    addBookToLibrary(library);
    displayLibrary(library);
});
container.insertBefore(add, table);