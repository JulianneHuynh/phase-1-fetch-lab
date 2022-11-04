function fetchBooks() {
fetch ("https://anapioficeandfire.com/api/books")
.then((resp) => resp.json()) 
.then((json) => renderBooks(books))
}  

function renderBooks(books) {
  const main = document.querySelector('main');
    console.log(main)

   books.forEach(book => {
    const bookLi= document.createElement('li')
    bookLi.textContent = book.name
    main.append(bookLi);
  });
}

document.addEventListener('DOMContentLoaded',function() {
  fetchBooks();
});
