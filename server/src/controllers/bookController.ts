import { Request, Response } from 'express';
import { Book } from '../models/book.js';

const ApiKey = process.env.API_KEY;

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
export const searchBooks = async (req: Request, res: Response) => {};
