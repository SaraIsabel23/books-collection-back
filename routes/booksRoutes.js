const express    = require('express');
const fetchBooks = require('../utils/fetchBooks')
const route      = express.Router()


route.get("/", async (req, res) => {
    const books = await fetchBooks()
    res.json(books)
});


module.exports = route


