import { DataTypes, Model } from 'sequelize';
export class Book extends Model {
}
export function BookFactory(sequelize) {
    Book.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
        },
        image: {
            type: DataTypes.STRING,
        },
        subtitle: {
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'books',
        sequelize,
        timestamps: false,
        underscored: true,
        freezeTableName: true,
    });
    return Book;
}
