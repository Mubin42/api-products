import Product from '../../models/productModel.js';

const getSingleProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json({
      status: 'success',
      doc: product,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

export default getSingleProduct;
