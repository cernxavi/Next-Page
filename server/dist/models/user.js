import { DataTypes, Model } from 'sequelize';
import bcrypt from 'bcrypt';
export class User extends Model {
    // Method to hash and set the password for the user
    async setPassword(password) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(password, saltRounds);
    }
}
// Define the UserFactory function to initialize the User model
export function UserFactory(sequelize) {
    User.init({
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        tableName: 'users',
        sequelize,
        hooks: {
            // Before creating a new user, hash and set the password
            beforeCreate: async (user) => {
                await user.setPassword(user.password);
            },
            // Before updating a user, hash and set the new password if it has changed
            beforeUpdate: async (user) => {
                if (user.changed('password')) {
                    await user.setPassword(user.password);
                }
            },
        }
    });
    return User;
}
