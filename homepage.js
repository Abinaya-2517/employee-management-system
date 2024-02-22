/*function filterBooks() {
  const title = document.getElementById('titleInput').value;
  const author = document.getElementById('authorInput').value;
  const subject = document.getElementById('subjectInput').value;
  const publishDate = document.getElementById('publishDateInput').value;
  fetch(`/books?title=${title}&author=${author}&subject=${subject}&publishDate=${publishDate}`)
    .then(response => response.json())
    .then(books => {
      const booksTableBody = document.getElementById('booksTableBody');
      booksTableBody.innerHTML = '';

      books.forEach(book => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${book.title}</td>
          <td>${book.author}</td>
          <td>${book.subject}</td>
          <td>${book.publishDate}</td>
          <td>${book.booksCount}</td>
        `;
        booksTableBody.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching books:', error));
}*/
function addBookToTable(book) {
  const booksTableBody = document.getElementById('booksTableBody');
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${book.Title}</td>
    <td>${book.Author}</td>
    <td>${book.Subject}</td>
    <td>${book.PublishDate}</td>
    <td>${book.booksCount}</td>
  `;
  booksTableBody.appendChild(row);
}

document.addEventListener('DOMContentLoaded', function() {
  // Function to handle form submission
  const addBookForm = document.getElementById('addBookForm');
  addBookForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(addBookForm);

    fetch('http://localhost:3000/addbook', {
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      alert('Book added successfully');
      addBookToTable(data.book); // Add the newly added book to the table
      addBookForm.reset();
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });
});

