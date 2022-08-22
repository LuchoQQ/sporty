const Category = require("../model/Category");
const Product = require("../model/Product");
const { uploadFile } = require("../s3");

const getAllProducts = async (req, res) => {
  const products = await Product.find().select({categoryId: 0, updatedAt: 0, createdAt: 0, __v: 0})
  res.json(products);
};

const createProduct = async (req, res) => {
    const { name, category, description, price, stock} = req.body;
    const file = req.file;
    const imageUploaded = await uploadFile(file);

    const getCategoryIdByName = await Category.findOne({ name: category });
    const product = await Product.create({
      name,
      category,
      image: imageUploaded.key,
      categoryId: getCategoryIdByName._id,
      description,
      price,
      stock,
    });
    return res.json(product);
  };


const createCategory = async (req, res) => {
  return res.json(await Category.find());
};

const getProductsByCategoryName = async (req, res) => {
  const { id } = req.params;

  const getCategoryIdByName = await Category.findOne({ name: id });

  return res.json(await Product.find({ categoryId: getCategoryIdByName })); // returns products by category
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const deleteProduct = await Product.findByIdAndDelete(id);
  res.json(deleteProduct);
};
module.exports = {
  getAllProducts,
  createProduct,
  createCategory,
  getProductsByCategoryName,
  deleteProductById,
};
