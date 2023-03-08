let myLibrary = [];

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  static count = 1;
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
    console.log(NewBook);
    displaybook(NewBook);
  }
}

function displaybook(NewBook) {
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
  button.className = "delbtn";
  button.value = Book.count;
  row.append(button);
  cell5 = button;
  /*button.setAttribute("width", "input")*/
  button.setAttribute("onclick", "deletebtn()")

  Book.count++;
}


function deletebtn() {

  let string = document.getElementsByName("delbtn");
  console.log(string);
  let result= string.substr(-1,1);
  console.log(result);
  document.getElementById("displaytable").deleteRow(result);

}



