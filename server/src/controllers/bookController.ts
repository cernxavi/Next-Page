import { Request, Response } from 'express';
import { Book } from '../models/book.js';
import dotenv from 'dotenv';

dotenv.config();

// const apiKey = process.env.BOOK_API_KEY;
const apiKey = "9f61e1484e8d4782b1cccc5ba3775cd7";
// const apiUrl = process.env.BOOK_API_BASE_URL;

// Get all books
export const getAllBooks = async (_req: Request, res: Response) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'error getting books' });
    }
};


// create book
export const createBook = async (req: Request, res: Response) => {
    try {
        const newBook = await Book.create(req.body);
        res.status(201).json(newBook);
    } catch (error) {
        res.status(500).json({ error: 'error creating book' });
    }
};


// delete book by id
export const deleteBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'book not found' });
        } else {
            book.destroy();
            res.status(204).json();
        }
    } catch (error) {
        res.status(500).json({ error: 'error deleting book' });
    }
};

// search books with api  send data to front end to be rendered
export const searchBooks = async (req: Request, res: Response) => {
    try {
        const query = req.query.body;
        const response = await fetch(`https://api.bigbookapi.com/search-books?api-key=9f61e1484e8d4782b1cccc5ba3775cd7&query=${query}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        });
        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).json({ error: 'error searching books' });
    }
};

// get the book form api by genre

// get the book form api by author
