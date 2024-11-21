import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface BookAttributes {
  book_id: number;
  title: string;
  author: string;
  isbn: string;
  pages: number;
  rating: number;
  genre: string;
}

interface BookCreationAttributes extends Optional<BookAttributes, 'book_id'> {}

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public book_id!: number;
  public title!: string;
  public author!: string;
  public isbn!: string;
  public pages!: number;
  public rating!: number;
  public genre!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function BookFactory(sequelize: Sequelize): typeof Book {
  Book.init(
    {
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
      rating: {
        type: DataTypes.INTEGER,
      },
      genre: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Book;
}
