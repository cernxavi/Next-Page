import { Book } from '../models/book.js';

export const seedBook = async () => {
    await Book.bulkCreate([
        { title: 'To Kill a MockingBird', subtitle: 'A Novel', image: 'https://images-na.ssl-images-amazon.com/images/I/51ZJ2q4Z5jL._SX331_BO1,204,203,200_.jpg'},
        { title: 'The New Annotated Dracula', subtitle: 'The Essential Text of Bram Stoker\'s Classic Novel', image: 'https://images-na.ssl-images-amazon.com/images/I/51ZJ2q4Z5jL._SX331_BO1,204,203,200_.jpg'},
        { title: 'The Historian', subtitle: 'A Novel', image: 'https://images-na.ssl-images-amazon.com/images/I/51ZJ2q4Z5jL._SX331_BO1,204,203,200_.jpg'},
    ], { individualHooks: true });
};