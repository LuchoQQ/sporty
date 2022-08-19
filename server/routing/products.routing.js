const router = require("express").Router();
const {
  getAllProducts,
  createProduct,
  createCategory,
  getProductsByCategoryName,
} = require("../controllers/products.controllers");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post("/image", upload.single("image"), (req, res) => {
  console.log(req)
  res.send("ok");
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
router.delete("/:id");

module.exports = router;
