const API = 'https://openlibrary.org/search.json';

const searchInput = document.getElementById('searchInput');
const btn = document.querySelector('.btn');
const postBlock = document.getElementById('postBlock');


function getSearch() {
    const userInput = searchInput.value.toString();

    if (!userInput) {
        alert('Please enter a title or author');
        return;
    }

    fetch(`${API}?q=${userInput}`)
        .then(response => response.json())
        .then(getResponse)
        .catch(error => {
            console.error(error);
        });
}

btn.addEventListener('click', getSearch);

searchInput.addEventListener('keyup', (event) => {
    if (event.key === 'Enter') {
        getSearch();
    }
});

function getResponse(data) {
    postBlock.innerHTML = '';

    if (data.docs.length === 0) {
        postBlock.innerHTML = 'Books not found';
        return;
    }
    data.docs.forEach(book => {
        const card = document.createElement('div');
        card.className = 'book-card';

        const title = book.title ? `<h3>${book.title}</h3>` : '';
        const author = book.author_name ? `<p>Author: ${book.author_name.join(', ')}</p>` : '';
        const coverImage = book.cover_i ? `<img src="https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg" >` : '';        
        const openLibraryLink = book.key ? `https://openlibrary.org${book.key}` : '';

        
        card.innerHTML = `<a href="${openLibraryLink}" target="_blank">${title}${author}${coverImage}</a>`;
        postBlock.appendChild(card);
    });
}
