import { Request, Response } from 'express';
import { Book } from '../models/book.js';

// Get all books
export const getAllBooks = async (_req: Request, res: Response) => {
    try {
        const books = await Book.findAll();
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json({ error: 'error getting books' });
    }
};

// Get book by id
export const getBookById = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'book not found' });
        } else { res.status(200).json(book); }
    } catch (error) {
        res.status(500).json({ error: 'error getting book by Id' });
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

// update book by id
export const updateBook = async (req: Request, res: Response) => {
    try {
        const updatedBook = await Book.findByPK(req.params.id);
        if (!updatedBook) {
            return res.status(404).json({ error: 'book not found' });
        } else {
            updatedBook.title = req.body.title;
            updatedBook.author = req.body.author;
            updatedBook.save();
            res.status(200).json(updatedBook);
        }
    } catch (error) {
        res.status(500).json({ error: 'error updating book' });
    }
}

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