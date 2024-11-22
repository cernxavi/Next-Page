import { Book } from '../models/book.js';
import dotenv from 'dotenv';
dotenv.config();
// const apiKey = process.env.BOOK_API_KEY;
const apiKey = "9f61e1484e8d4782b1cccc5ba3775cd7";
// const apiUrl = process.env.BOOK_API_BASE_URL;
// function to encode the query
const encodeQuery = (query) => {
    return encodeURIComponent(query.trim().replace(/\s/g, '+'));
};
// Get all books
export const getAllBooks = async (_req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    }
    catch (error) {
        res.status(500).json({ error: 'error getting books' });
    }
};
// create book
export const createBook = async (req, res) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    }
    catch (error) {
        res.status(500).json({ error: 'error creating book' });
    }
};
// delete book by id
export const deleteBook = async (req, res) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'book not found' });
        }
        else {
            await Book.destroy();
            return res.status(204).json();
        }
    }
    catch (error) {
        return res.status(500).json({ error: 'error deleting book' });
    }
};
// search books with api  send data to front end to be rendered
export const searchBooks = async (req, res) => {
    try {
        const query = encodeQuery(req.body);
        const response = await fetch(`https://api.bigbookapi.com/search-books?api-key=9f61e1484e8d4782b1cccc5ba3775cd7&query=${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'error searching books' });
    }
};
//function to get all information about a specific book
export const searchBookById = async (req, res) => {
    try {
        const id = req.body.id;
        const response = await fetch(`https://api.bigbookapi.com/${id}?api-key=9f61e1484e8d4782b1cccc5ba3775cd7`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'error getting book by id' });
    }
};
export const getSimilarBooks = async (req, res) => {
    try {
        const id = req.body.id;
        const response = await fetch(`https://api.bigbookapi.com/${id}/similar?api-key=9f61e1484e8d4782b1cccc5ba3775cd7`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'error getting similar books' });
    }
};
//get the book form api by author
export const searchBookByAuthor = async (req, res) => {
    try {
        const author = encodeQuery(req.body);
        const response = await fetch(`https://api.bigbookapi.com/search-authors?name=${author}&api-key=9f61e1484e8d4782b1cccc5ba3775cd7`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    }
    catch (error) {
        res.status(500).json({ error: 'error getting book by author' });
    }
};
