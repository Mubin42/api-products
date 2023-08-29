import mongoose from 'mongoose';

const schema = mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'] },
  price: { type: Number, required: [true, 'Price is required'] },
  note: { type: String, required: false },
  description: { type: String, required: false },
  category: { type: String, required: false },
  stock: { type: Number, required: false, default: 0 },
});

const Product = mongoose.model('Product', schema);

export default Product;
