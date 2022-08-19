const router = require("express").Router();
const Product = require("../model/Product");
const Category = require("../model/Category");

// get all products without filter
router.get("/", async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

// create product
router.post("/", async (req, res) => {
  const { name, image, categoryId, description, price, stock } = req.body;

  const getCategoryIdByName = await Category.findOne({ name: categoryId });
  const product = await Product.create({
    name,
    image,
    categoryId: getCategoryIdByName._id,
    description,
    price,
    stock,
  });
  return res.json(product);
});

// get all categories
router.get("/category", async (req, res) => {
  return res.json(await Category.find());
});

// get products by category name
router.get("/category/:id", async (req, res) => {
  const { id } = req.params;

  const getCategoryIdByName = await Category.findOne({ name: id });

  return res.json(await Product.find({ categoryId: getCategoryIdByName })); // returns products by category
});

module.exports = router;
