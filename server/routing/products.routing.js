const router = require("express").Router();
const {
  getAllProducts,
  createProduct,
  createCategory,
  getProductsByCategoryName,
  deleteProductById
} = require("../controllers/products.controllers");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/image", upload.single("image"), (req, res) => {
  const file = req.file
  const info = req.body.description
});

// get all products without filter
router.get("/", getAllProducts);

// create product
router.post("/", createProduct);

// get all categories
router.get("/category", createCategory);

// get products by category name
router.get("/category/:id", getProductsByCategoryName);

// delete product by id
router.delete("/:id", deleteProductById);

module.exports = router;
