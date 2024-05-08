import express, { Request, Response } from 'express';
import 'dotenv/config';
import { PrismaClient } from '@prisma/client';
import userRoutes from './routes/userRoutes';

const app = express();
const prisma = new PrismaClient();
const PORT = process.env.PORT || 8000;

// middleware
app.use(express.json());

// routes
app.get('/', (req: Request, res: Response) => {
    res.send('wassup brothas o7');
});
app.use('/user', userRoutes);

async function checkDBConnection() {
    try {
        await prisma.$queryRaw`SELECT 1`;
        console.log('db connected successfully');
        startServer();
    } catch (error) {
        console.error('error connecting to db:', error);
    }
}

async function startServer() {
    app.listen(PORT, () => {
        console.log(`server running on port ${PORT}`);
        console.log(`http://localhost:${PORT}`);
    });
}

checkDBConnection();
