import { Router, Request, Response } from 'express';
import { RequestHandler } from 'express';
import { User } from '../models/user.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export const login: RequestHandler = async (req: Request, res: Response) => {
    const { username, password } = req.body; 

    const user = await User.findOne({
        where: { username }
    });
    if (!user) {
        res.status(404).json({ message: 'User not found' });
        return;
    }

    const passwordIsValid = await bcrypt.compare(password, user.password);
    if (!passwordIsValid) {
        res.status(401).json({ message: 'Invalid password' });
        return;
    }

    const secretKey = process.env.JWT_SECRET_KEY || '';
    const token = jwt.sign({ username }, secretKey, { expiresIn: '1h' });
    res.json({ token });
    return;
};

const router = Router();

router.post('/login', login);

export default router;