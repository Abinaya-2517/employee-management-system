document.addEventListener('DOMContentLoaded', function() {
    const addBookForm = document.getElementById('addBookForm');
    addBookForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const Title = document.getElementById('Title').value;
        const Author = document.getElementById('Author').value;
        const Subject = document.getElementById('Subject').value;
        const PublishDate = document.getElementById('PublishDate').value;
        
        const formData = {
            Title: Title,
            Author: Author,
            Subject: Subject,
            PublishDate: PublishDate
        };
        
        fetch('http://localhost:3000/addbook', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Book added successfully');
            addBookForm.reset();
        })
        .catch(error => {
            console.error('Error:', error);
            alert('An error occurred. Please try again later.');
        });
    });
});
