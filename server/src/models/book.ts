import { DataTypes, Sequelize, Model, Optional } from 'sequelize';

interface BookAttributes {
  id: number;
  title: string;
  image: string;
  subtitle: string; 
}

interface BookCreationAttributes extends Optional<BookAttributes, 'id'> { }

export class Book extends Model<BookAttributes, BookCreationAttributes> implements BookAttributes {
  public id!: number;
  public title!: string;
  public image!: string;
  public subtitle!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

export function BookFactory(sequelize: Sequelize): typeof Book {
  Book.init(
    {
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
    },
    {
      tableName: 'books',
      sequelize,
      timestamps: false,
      underscored: true,
      freezeTableName: true,
    }
  );

  return Book;
}
