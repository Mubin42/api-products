import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db.js';
import productsRoutes from './routes/productsRoutes.js';

const app = express();
app.use(express.json());
dotenv.config();
connectDB();

app.use('/api/v1', productsRoutes);

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server is running on port ${port}`));
