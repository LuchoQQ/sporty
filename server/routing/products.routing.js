const router = require("express").Router();
const {
  getAllProducts,
  createProduct,
  createCategory,
  getProductsByCategoryName,
  deleteProductById,
} = require("../controllers/products.controllers");
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const { uploadFile, getFileStream } = require("../s3");

router.get("/image/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

router.post("/image", upload.single("image"), async (req, res) => {
  const file = req.file;
  console.log(file);
  const nose = await uploadFile(file);
  res.send(nose);
});

// get all products without filter
router.get("/", getAllProducts);

// create product
router.post("/", upload.single("image"), createProduct);

// get all categories
router.get("/category", createCategory);

// get products by category name
router.get("/category/:id", getProductsByCategoryName);

// delete product by id
router.delete("/:id", deleteProductById);

module.exports = router;
