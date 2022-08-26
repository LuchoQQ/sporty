const Category = require("../model/Category");
const Product = require("../model/Product");
const { uploadFile, deleteFile } = require("../s3");
const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const getAllProducts = async (req, res) => {
  const products = await Product.find().select({
    categoryId: 0,
    updatedAt: 0,
    createdAt: 0,
    __v: 0,
  });
  if (products.length === 0)
    return res.status(204).json({ message: "No products" });
  return res.json(products);
};

const createProduct = async (req, res) => {
  const { name, category, description, price, stock, image } = req.body;
  const file = req.file;
  if (!file) return res.status(400).send({ msg: "Not image provided" })


  const imageUploaded = await uploadFile(file);
  const getCategoryIdByName = await Category.findOne({ name: category });

  const product = await Product.create({
    name,
    category,
    image: imageUploaded.Key,
    categoryId: getCategoryIdByName._id,
    description,
    price,
    stock,
  });
  await unlinkFile(`./uploads/${imageUploaded.Key}`);
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
  try {
    const deleteProduct = await Product.findByIdAndDelete(id);
    const result = await deleteFile(deleteProduct.image);
    console.log(result);
    return res.json(deleteProduct);
  } catch (error) {
    console.log(error);
    res.json(error);
  }
};
module.exports = {
  getAllProducts,
  createProduct,
  createCategory,
  getProductsByCategoryName,
  deleteProductById,
};
