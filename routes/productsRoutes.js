import express from 'express';
import getAllProduct from '../controllers/products/getAllProduct.js';
import createProduct from '../controllers/products/createProduct.js';
import checkProduct from '../controllers/products/checkProduct.js';
import getSingleProduct from '../controllers/products/getSingleProduct.js';
import updateProduct from '../controllers/products/updateProduct.js';
import deleteProduct from '../controllers/products/deleteProduct.js';

const router = express.Router();
router.use('/products/:id', checkProduct);

router.get('/products', getAllProduct);
router.post('/products', createProduct);
router.get('/products/:id', getSingleProduct);
router.patch('/products/:id', updateProduct);
router.delete('/products/:id', deleteProduct);
export default router;
