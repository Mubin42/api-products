import Product from '../../models/productModel.js';

const updateProduct = async (req, res) => {
  try {
    const product = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      product,
      {
        new: true,
        runValidators: true,
      }
    );

    res.status(200).json({
      status: 'success',
      doc: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    });
  }
};

export default updateProduct;
