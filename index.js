// Step 1: Select the title element
const bookStoreTitle = document.getElementById("header");

// Step 2: Update title to bookstore name
bookStoreTitle.textContent = bookStore.name;

// Step 3: Select the book list container (make sure your HTML has <ul id="bookList"></ul>)
const bookList = document.getElementById("bookList");

// Loop through every book in the catalog
bookStore.books.forEach(book => {
    // Create elements
    const bookContainer = document.createElement("li");
    const bookTitle = document.createElement("h3");
    const bookAuthor = document.createElement("p");
    const bookImage = document.createElement("img");

    // Add content
    bookTitle.textContent = book.title;
    bookAuthor.textContent = book.author;
    bookImage.src = book.imageUrl;

    // Optional: improve accessibility
    bookImage.alt = book.title;

    // Append elements to book container
    bookContainer.appendChild(bookTitle);
    bookContainer.appendChild(bookAuthor);
    bookContainer.appendChild(bookImage);

    // Append book container to book list
    bookList.appendChild(bookContainer);
});