import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import productsRoutes from './routes/productsRoutes.js';
import userRoutes from './routes/userRoutes.js';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();
connectDB();

//routes
app.use('/api/v1', productsRoutes);
app.use('/api/v1', userRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}`));
