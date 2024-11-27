<<<<<<< HEAD
import { seedBook } from './book-seeds.js';
import { sequelize } from '../models/index.js';
const seedAll = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('\n----- DATABASE SYNCED -----\n');
        await seedBook();
        console.log('\n----- BOOKS SYNCED -----\n');
        process.exit(0);
    }
    catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};
seedAll;
=======
"use strict";
// import { seedBook } from './book-seeds.js';
// import { sequelize } from '../models/index.js';
// const seedAll = async (): Promise<void> => {
//     try {
//         await sequelize.sync({ force: true });
//         console.log('\n----- DATABASE SYNCED -----\n');
//         await seedBook();
//         console.log('\n----- BOOKS SYNCED -----\n');
//         process.exit(0);
//     } catch (error) {
//         console.error('Error seeding database:', error);
//         process.exit(1);
//     }
// };
// seedAll;
>>>>>>> 3595936e5febbd82595e6037df6284beb94c1132
