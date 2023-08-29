import Product from '../../models/productModel.js';

const checkProduct = async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({
        status: 'failed',
        message: 'Product not found',
      });
    }
    next();
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

export default checkProduct;
