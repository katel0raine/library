let myLibrary = [];

const addNewButton = document.getElementById("add-new-button");
const addNewForm = document.querySelector("form");
const submitButton = document.getElementById("submit-button");

addNewButton.addEventListener("click", showForm);
submitButton.addEventListener("click", addBookToLibrary);

function showForm() {
  addNewForm.classList.toggle("visible");
}

function toggleStatus() {
  if (this.innerHTML == "unread") {
    this.innerHTML = "read";
  } else {
    this.innerHTML = "unread";
  }
}

function Book(title, author, pages, status) {
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.status = status
}

function addBookToLibrary() {
event.preventDefault();

  let title = document.getElementById("title-input").value;
  let author = document.getElementById("author-input").value;
  let pages = document.getElementById("pages-input").value;
  let status = document.getElementById("status-input").value;
  let newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  addNewForm.reset();
  addRowToTable(newBook);

  document.querySelector(".delete-button").addEventListener("click", deleteRow);
}

function addRowToTable(book) {
  let tableBody = document.querySelector("tbody");

  let row = document.createElement("tr");
  row.classList.add("book");

  let titleCell = document.createElement("td");
  titleCell.innerHTML = book.title;
  row.appendChild(titleCell);

  let authorCell = document.createElement("td");
  authorCell.innerHTML = book.author;
  row.appendChild(authorCell);

  let pagesCell = document.createElement("td");
  pagesCell.innerHTML = book.pages;
  row.appendChild(pagesCell);

  let statusCell = document.createElement("td");
  let statusButton = document.createElement("button");
  statusButton.innerHTML = book.status;
  statusButton.classList.add("status-button");
  statusCell.appendChild(statusButton);
  row.appendChild(statusCell);

  let deleteCell = document.createElement("td");
  let deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.setAttribute("title", "DELETE");
  deleteButton.innerHTML = "❌";
  deleteCell.appendChild(deleteButton);
  row.appendChild(deleteCell);

  tableBody.insertBefore(row, tableBody.childNodes[0]);

  document.querySelector(".status-button").addEventListener("click", toggleStatus);
}

function deleteRow() {
  let rowToBeDeleted = this.parentNode.parentNode.rowIndex;
  document.getElementById("books-table").deleteRow(rowToBeDeleted);
}
