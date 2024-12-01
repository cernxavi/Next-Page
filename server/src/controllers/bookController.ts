import { Request, Response } from 'express';
import { Book } from '../models/book.js';
import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

// const apiKey = process.env.BOOK_API_KEY;
// const apiKey = '9f61e1484e8d4782b1cccc5ba3775cd7';
// const apiUrl = process.env.BOOK_API_BASE_URL;

// function to encode the query
const encodeQuery = (query: string): string => {
    return encodeURIComponent(query.trim().replace(/\s/g, '+'));
};

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
        console.error(error);
    }
};


// delete book by id
export const deleteBook = async (req: Request, res: Response) => {
    try {
        const book = await Book.findByPk(req.params.id);
        if (!book) {
            return res.status(404).json({ error: 'book not found' });
        } else {
            await book.destroy();
            return res.status(204).json();
        }
    } catch (error) {
        return res.status(500).json({ error: 'error deleting book' });
    }
};


// search books with api  send data to front end to be rendered

export const searchBooks = async (req: Request, res: Response) => {
    try {
        const query = encodeQuery(req.body.query as string);
        const apiKey = '9f61e1484e8d4782b1cccc5ba3775cd7';

        const response = await axios.get(`https://api.bigbookapi.com/search-books`, {
            params: {
                'api-key': apiKey,
                query: query,
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error searching books' });
    }
};


//function to get all information about a specific book
export const searchBookById = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const apiKey = '9f61e1484e8d4782b1cccc5ba3775cd7';

        const response = await axios.get(`https://api.bigbookapi.com/${id}`, {
            params: {
                'api-key': apiKey,
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error getting book by ID' });
    }
};


// get a similar book based on the id
export const getSimilarBooks = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        const apiKey = '9f61e1484e8d4782b1cccc5ba3775cd7';

        const response = await axios.get(`https://api.bigbookapi.com/${id}/similar`, {
            params: {
                'api-key': apiKey,
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error getting similar books' });
    }
};


//get the book form api by author
export const searchBookByAuthor = async (req: Request, res: Response) => {
    try {
        const author = encodeQuery(req.body.query as string);
        const apiKey = '9f61e1484e8d4782b1cccc5ba3775cd7';

        const response = await axios.get(`https://api.bigbookapi.com/search-authors`, {
            params: {
                name: author,
                'api-key': apiKey,
            },
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': apiKey,
            },
        });

        res.status(200).json(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error getting book by author' });
    }
};

