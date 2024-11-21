import express from 'express';
import { 
    getAllBooks, 
    createBook, 
    deleteBook, 
    searchBooks, 
    searchBookById,
    getSimilarBooks,
    searchBooksByAuthor

} from '../../controllers/bookController.js';

cont router = express.Router(); 

//search a book

//search book by id for specific information

//search a similar book

//search book by author

//save book to database

//delete book from database

//get all books from database

export { router as bookRouter };
// Compare this snippet from server/src/routes/api/bookRouter.ts:


