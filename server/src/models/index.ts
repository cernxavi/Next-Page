import dotenv from 'dotenv';
dotenv.config();

import { Sequelize } from 'sequelize';
import { BookFactory } from './book.js'
<<<<<<< HEAD
import { UserFactory } from './user.js';
=======
import { UserFactory } from './user.js'

>>>>>>> 3595936e5febbd82595e6037df6284beb94c1132
const sequelize = process.env.DB_URL
  ? new Sequelize(process.env.DB_URL)
  : new Sequelize(process.env.DB_NAME || '', process.env.DB_USER || '', process.env.DB_PASSWORD, {
      host: 'localhost',
      dialect: 'postgres',
      dialectOptions: {
        decimalNumbers: true,
      },
    });

const Book = BookFactory(sequelize);
const User = UserFactory(sequelize);

<<<<<<< HEAD
=======

>>>>>>> 3595936e5febbd82595e6037df6284beb94c1132
export { sequelize, Book, User };
