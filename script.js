const container = document.querySelector(".container");

function addBookToLibrary() {
  const newBook = new Book();
  newBook.title = "Mango";
  newBook.authorName = "Apple";
  newBook.genre = "Apple";
  newBook.numberOfPages = 123;
  newBook.readStatus = false;

  myLibrary.push(newBook);
  newBook.setIndex(myLibrary);

  const tempBookContainer = document.createElement("div");
  tempBookContainer.classList.add("bookContainer");

  tempBookContainer.attachObject = newBook;

  const title = document.createElement("h1");
  title.textContent = newBook.title;
  tempBookContainer.appendChild(title);

  const authorName = document.createElement("h2");
  authorName.textContent = `Name of author :  ${newBook.authorName}`;
  tempBookContainer.appendChild(authorName);

  const genre = document.createElement("h2");
  genre.textContent = `Genre : ${newBook.genre}`;
  tempBookContainer.appendChild(genre);

  const numberOfPages = document.createElement("h2");
  numberOfPages.textContent = `Number of pages : ${newBook.numberOfPages}`;
  tempBookContainer.appendChild(numberOfPages);

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const askReadStatus = document.createElement('h4');
  askReadStatus.textContent = "Have you read :";
  buttons.appendChild(askReadStatus);
  const readStatus = document.createElement("button");
  readStatus.style.color = "white";
  if (newBook.readStatus) {
    readStatus.textContent = "Yes";
    readStatus.style.backgroundColor = "green";
  } else {
    readStatus.textContent = "No";
    readStatus.style.backgroundColor = "red";
  }
  readStatus.classList.add("readButton");
  buttons.appendChild(readStatus);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("deleteButton");
  deleteButton.style.backgroundColor = "red";
  deleteButton.style.color = "white";
  deleteButton.textContent = "Delete";

  buttons.appendChild(deleteButton);
  tempBookContainer.appendChild(buttons);
  container.appendChild(tempBookContainer);
}

function Book(title, authorName, genre, numberOfPages, readStatus) {
  this.title = title;
  this.authorName = authorName;
  this.genre = genre;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
}

const myLibrary = [];

Book.prototype.setReadStatus = function () {
  this.readStatus = !this.readStatus;
};

Book.prototype.setIndex = function (currentArray) {
  this.index = currentArray.length - 1;
};

addBookToLibrary();
addBookToLibrary();
addBookToLibrary();
addBookToLibrary();

const readButtons = document.querySelectorAll(".readButton");

readButtons.forEach((readButton) => {
  readButton.addEventListener("click", () => {
    const bookObject = readButton.parentElement.parentElement.attachObject;
    console.log(bookObject);
    if (bookObject.readStatus) {
      readButton.style.backgroundColor = "red";
      readButton.textContent = "No";
    } else {
      readButton.style.backgroundColor = "green";
      readButton.textContent = "Yes";
    }
    bookObject.setReadStatus();
  });
});

const deleteButtons = document.querySelectorAll(".deleteButton");

deleteButtons.forEach((deleteButton) => {
  deleteButton.addEventListener("click", () => {
    const divElements = document.querySelectorAll(".bookContainer");
    const toBeDeletedDiv = deleteButton.parentElement.parentElement;
    const bookObject = deleteButton.parentElement.parentElement.attachObject;

    const toBeDeletedDivIndex = bookObject.index;

    divElements.forEach((divElement) => {
      if (divElement == toBeDeletedDiv) {
        myLibrary.splice(toBeDeletedDivIndex, 1);
        container.removeChild(toBeDeletedDiv);
      }
    });
  });
});
