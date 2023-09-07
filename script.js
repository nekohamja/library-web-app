// UI
const addBookButton = document.querySelector(".main.container>button");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

addBookButton.addEventListener("click", openForm);
overlay.addEventListener("click", openForm);

function openForm() {
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
}

// DATA STRUCTURE
const myLibrary = [];
function book() {}
function addBookToLibrary() {}
