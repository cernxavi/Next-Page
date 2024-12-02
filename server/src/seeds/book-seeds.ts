import { Book } from '../models/book.js';

export const seedBook = async () => {
    await Book.bulkCreate([
        { title: 'To Kill a MockingBird', subtitle: 'A Novel', image: 'https://ia903000.us.archive.org/view_archive.php?archive=/3/items/m_covers_0008/m_covers_0008_41.zip&file=0008410894-M.jpg'},
        { title: 'The New Annotated Dracula', subtitle: 'The Essential Text of Bram Stoker\'s Classic Novel', image: 'https://images-na.ssl-images-amazon.com/images/I/51ZJ2q4Z5jL._SX331_BO1,204,203,200_.jpg'},
        { title: 'The Historian', subtitle: 'A Novel', image: 'https://images-na.ssl-images-amazon.com/images/I/51ZJ2q4Z5jL._SX331_BO1,204,203,200_.jpg'},
    ], { individualHooks: true });
};