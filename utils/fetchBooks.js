const axios    = require('axios');
const urlBooks = `https://api-books-ac3j.onrender.com/books`;


async function fetchBooks() {
    const books = await axios.get(urlBooks)
    console.log(books.data)
    return books.data
};


module.exports = fetchBooks