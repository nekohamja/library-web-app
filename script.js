// CLASSES / CONSTRUCTOR
class Book {
  constructor(
    title = "Unknown",
    author = "Unknown",
    pages = "0",
    date = "",
    read_status = "Done reading"
  ) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.date = date;
    this.read_status = read_status;
  }
}
class Library {
  constructor() {
    this.books = [];
  }
  addBook(newBook) {
    this.books.push(newBook);
  }
  removeBook(title) {
    this.books = this.books.filter((book) => book.title !== title);
  }
}
const library = new Library();

// FUNCTIONS
const addBook = (e) => {
  e.preventDefault();
  const newBook = getBookFromInput();
  library.addBook(newBook);
  updateBookGrid();
  modalSwitch();
};

const removeBook = (e) => {
  const title = e.target.parentNode.firstChild.textContent;
  library.removeBook(title);
  updateBookGrid();
};
const modalSwitch = () => {
  form.reset();
  modal.classList.toggle("active");
  overlay.classList.toggle("active");
};

const getBookFromInput = () => {
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  const date = document.querySelector("#date").value;
  const index = document.querySelector("#status").selectedIndex;
  const option = document.querySelector("#status").options;
  const readStatus = option[index].value;
  return new Book(title, author, pages, date, readStatus);
};

const updateBookGrid = () => {
  resetBookGrid();
  for (let book of library.books) {
    createBook(book);
  }
};

const resetBookGrid = () => {
  bookGrid.innerHTML = "";
};

const createBook = (book) => {
  const item = document.createElement("div");
  const title = document.createElement("p");
  const author = document.createElement("p");
  const pages = document.createElement("p");
  const date = document.createElement("p");
  const status = document.createElement("button");
  const remove = document.createElement("button");

  item.classList.add("item");
  title.classList.add("item-title");
  author.classList.add("item-author");
  pages.classList.add("item-pages");
  date.classList.add("item-date");
  status.classList.add("item-status");
  remove.classList.add("item-remove");

  title.textContent = `${book.title}`;
  author.textContent = `by ${book.author}`;
  pages.textContent = `${book.pages} pages`;
  date.textContent = `Date published: ${book.date}`;
  remove.textContent = "Remove";

  if (book.read_status == "Not read") {
    status.classList.add("not-read");
  }
  status.textContent = `${book.read_status}`;
  status.onclick = changeStatus;
  remove.onclick = removeBook;

  item.appendChild(title);
  item.appendChild(author);
  item.appendChild(pages);
  item.appendChild(date);
  item.appendChild(status);
  item.appendChild(remove);
  bookGrid.appendChild(item);
};

const changeStatus = (e) => {
  if (e.target.matches(".not-read")) {
    e.target.classList.remove("not-read");
    e.target.textContent = "Done reading";
  } else {
    e.target.classList.add("not-read");
    e.target.textContent = "Not read";
  }
};

// UI
const addBookButton = document.querySelector(".main.container>button");
const submitButton = document.querySelector(".submit-button");
const statusButtons = document.querySelector(".item-status");
const form = document.querySelector("#form");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const bookGrid = document.querySelector(".book-grid");

addBookButton.addEventListener("click", modalSwitch);
overlay.addEventListener("click", modalSwitch);
form.addEventListener("submit", addBook);

// sample content
// const sample = [
//   {
//     title: "A Game of Thrones ",
//     author: "George R. R. Martin",
//     pages: "694",
//     date: "July 1 1996",
//     read_status: "Not read",
//   },
//   {
//     title: "A Game of shesh",
//     author: "George`",
//     pages: "69234",
//     date: "July 1 1997",
//     read_status: "Done reading",
//   },
// ];
