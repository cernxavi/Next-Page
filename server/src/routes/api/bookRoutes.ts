import express from 'express';
import {
    getAllBooks,
    createBook,
    deleteBook,
    searchBooks,
    searchBookById,
    getSimilarBooks,
    searchBookByAuthor

} from '../../controllers/bookController.js';
import { recommend } from '../../controllers/searchController.js';


const router = express.Router();

//search a book
router.get('/search', searchBooks);

//search book by id for specific information
router.get('/search/:id', searchBookById);

//search a similar book
router.get('/similar/:id', getSimilarBooks);

//search book by author
router.get('/search-author', searchBookByAuthor);

//save book to database
router.post('/', createBook)

//delete book from database
router.delete('/:id', deleteBook);

//get all books from database
router.get('/', getAllBooks);

//recommend books using openAI api
router.post('/recommend', recommend);

export { router as bookRouter };



