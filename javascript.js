let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

function addBookToLibrary() {

  var title = document.getElementById("inputTitle").value;
  var author = document.getElementById("inputAuthor").value;
  var pages = document.getElementById("inputPages").value;
  let read = document.getElementById("inputRead");

  read.checked ? read = "Read" : read = "Not Read";

  if (title === "" || author === "" || pages === "") {
    alert("Kindy fill the empty slots.");
    return;
  }
  else {
    var NewBook = new Book(title, author, pages, read);
    myLibrary.push(NewBook);
    createcard();
  }
}

let newBookbtn = document.querySelector("#new-book-btn");
newBookbtn.addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style.display = "block";
})

document.querySelector("#new-book-form").addEventListener("submit", function (event) {
  event.preventDefault();
  addBookToLibrary();
})

function createcard() {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "displaycard");
    bookEl.innerHTML = `
      <div class="card-header">
        <h3 class="title">${book.title}</h3>
        <h3 class="author">${book.author}</h3>
      </div>
      <div class="card-body">
        <h3>${book.pages} pages</h3>
        <h3 class="read-status">${book.read ? "Read" : "Not Read Yet"}</h3>
        <button class="remove-btn" onclick="deleteBook(${i})">Remove</button>
        <button class="toggle-read-btn" onclick="toggleRead(${i})">Toggle Read</button>
      </div>
    `;
    libraryEl.appendChild(bookEl);
  }
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  createcard();
}

Book.prototype.toggleRead = function() {
  this.read = !this.read;
}

function toggleRead(index) {
  myLibrary[index].toggleRead();
  createcard()
}


/*function displaybook(NewBook) {
  let myTable = document.getElementById("displaytable");
  var row = myTable.insertRow(Book.count);

  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);

  cell1.innerHTML = NewBook.title;
  cell2.innerHTML = NewBook.author;
  cell3.innerHTML = NewBook.pages;
  cell4.innerHTML = NewBook.read;
  
  button = document.createElement("BUTTON");
  button.innerText = "Delete";
  button.setAttribute("id", "delbtn");
  button.value = Book.count;
  row.append(button);
  cell5 = button;
  /*button.setAttribute("width", "input")
  button.setAttribute("onclick", "deletebtn()")

  Book.count++;
}*/



/*function displaybook(NewBook){

  let para1 = document.createElement("p");
  para1.setAttribute("id", "inputTitle"+Book.count);
  para1.innerHTML= NewBook.title;
  document.body.appendChild(para1);

  let para2 = document.createElement("p");
  para2.setAttribute("id", "inputAuthor"+Book.count);
  para2.innerHTML= NewBook.author;
  document.body.appendChild(para2);

  let para3 = document.createElement("p");
  para3.setAttribute("id", "inputPages"+Book.count);
  para3.innerHTML= NewBook.pages;
  document.body.appendChild(para3);

  let para4 = document.createElement("p");
  para4.setAttribute("id", "inputRead"+Book.count);
  para4.innerHTML= NewBook.read;
  document.body.appendChild(para4);

  Book.count++;
}*/

/*function displaybook(NewBook) {
  
  let tablerow = document.createElement("tr");
    
  let para1 = document.createElement("td");
  para1.setAttribute("id", "inputTitle" + Book.count);
  para1.innerHTML = NewBook.title;
  document.getElementById("displaytable").appendChild(para1);

  let para2 = document.createElement("td");
  para2.setAttribute("id", "inputAuthor" + Book.count);
  para2.innerHTML = NewBook.author;
  document.getElementById("displaytable").appendChild(para2);

  let para3 = document.createElement("td");
  para3.setAttribute("id", "inputPages" + Book.count);
  para3.innerHTML = NewBook.pages;
  document.getElementById("displaytable").appendChild(para3);

  let para4 = document.createElement("td");
  para4.setAttribute("id", "inputRead" + Book.count);
  para4.innerHTML = NewBook.read;
  document.getElementById("displaytable").appendChild(para4);

  Book.count++;
} */

/* function createcard(NewBook) {
  let libraryEl = document.querySelector("#library");
  libraryEl.innerHTML = "";
  for (let i = 0; i < myLibrary.length; i++) {

    let card = document.createElement("div");
    let titleval = document.createElement("p");
    let authorval = document.createElement("p");
    let pagesval = document.createElement("p");
    let readval = document.createElement("button");
    let deleteval = document.createElement("button");

    titleval.innerHTML = NewBook.title;
    authorval.innerHTML = NewBook.author;
    pagesval.innerHTML = NewBook.pages;
    readval.innerText = NewBook.read;
    deleteval.innerText = "Delete";

    libraryEl.appendChild(card);
    card.appendChild(titleval);
    card.appendChild(authorval);
    card.appendChild(pagesval);
    card.appendChild(readval);
    card.appendChild(deleteval);

    card.setAttribute("class", "displaycard");
    card.setAttribute("id", "card");
    readval.setAttribute("id", "readbutton");
    deleteval.setAttribute("id", "deletebutton");
    deleteval.setAttribute("onclick", deletebook(i));
  }
} */



