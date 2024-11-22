import { DataTypes, Model } from 'sequelize';
export class Book extends Model {
}
export function BookFactory(sequelize) {
    Book.init({
        book_id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        author: {
            type: DataTypes.STRING,
        },
        isbn: {
            type: DataTypes.STRING,
        },
        pages: {
            type: DataTypes.INTEGER,
        },
        edition: {
            type: DataTypes.INTEGER,
        },
        is_paperback: {
            type: DataTypes.BOOLEAN,
        },
    }, {
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });
    return Book;
}
