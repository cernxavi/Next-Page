import { seedBook } from './book-seeds.js';
import { sequelize } from '../models/index.js';
console.log('seedBook');
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
