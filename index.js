const listBooks = document.querySelector('.list-books');

function book(title, author) {
  this.title = title;
  this.author = author;
}

let book1 = new book('Content fun', 'Snope')
let book2 = new book('Baseball', 'Yankies')
let books = [book1, book2]

console.log(listBooks, books)
