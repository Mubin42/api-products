import express from 'express';
import getAllProducts from '../controllers/products/getAllProducts.js';

const router = express.Router();
router.get('/products', getAllProducts);

export default router;
