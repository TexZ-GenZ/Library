const container = document.querySelector(".container");

class Book {
  constructor(title, authorName, genre, numberOfPages, readStatus){
  this.title = title;
  this.authorName = authorName;
  this.genre = genre;
  this.numberOfPages = numberOfPages;
  this.readStatus = readStatus;
  }
  
}

const myLibrary = [];


function addBookToLibrary(newBook) {
  console.log(newBook);

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

  const askReadStatus = document.createElement("h4");
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


  readStatus.addEventListener("click", () => {
    if (newBook.readStatus) {
      readStatus.style.backgroundColor = "red";
      readStatus.textContent = "No";
    } else {
      readStatus.style.backgroundColor = "green";
      readStatus.textContent = "Yes";
    }
    newBook.readStatus = !newBook.readStatus;
  });

  deleteButton.addEventListener("click", () => {
    myLibrary.splice(newBook.index, 1);
    container.removeChild(tempBookContainer);
  });

}
// ///////////////////////////////////////////////////////////////////////////////////////////////////

const dialogPopUp = document.querySelector("dialog");
const addBook = document.querySelector(".addBook");

addBook.addEventListener("click", () => {
  dialogPopUp.showModal();
});

///////////////////////////////////////////////

const bookForm = document.querySelector("#bookForm");

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value;
  const authorName = document.querySelector("#authorName").value;
  const genre = document.querySelector("#genre").value;
  const numberOfPages = document.querySelector("#numberOfPages").value;
  const readStatus =
    document.querySelector('input[name="readStatus"]:checked').value === "true";

  const newBook = new Book(title, authorName, genre, numberOfPages, readStatus);
  myLibrary.push(newBook);

  addBookToLibrary(newBook);

  dialogPopUp.close();
  bookForm.reset();
});

/////////////////////////////////////////////////

const cancelButton = document.querySelector(".cancelButton");
cancelButton.addEventListener("click", () => {
  dialogPopUp.close();
});

//////////////////////////////////////////////////////////

const harryPotter = new Book('Harry Potter','Jason', 'fiction' , 1611, true);
addBookToLibrary(harryPotter);
const richDadPoorDad = new Book('Rich Dad, Poor Dad','Ellion Bert', 'Inspirational, Reality' , 772 , true);
addBookToLibrary(richDadPoorDad);