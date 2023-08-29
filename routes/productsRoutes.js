import express from 'express';
import getAllProduct from '../controllers/products/getAllProduct.js';
import createProduct from '../controllers/products/createProduct.js';

const router = express.Router();
router.get('/products', getAllProduct);
router.post('/products', createProduct);

export default router;
