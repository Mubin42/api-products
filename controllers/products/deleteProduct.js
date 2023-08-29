import Product from '../../models/productModel.js';

const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
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

export default deleteProduct;
