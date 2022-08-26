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
const { uploadFile, getFileStream, generateUploadURL } = require("../s3");

const S3 = require("aws-sdk/clients/s3");
const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;
const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});


router.get("/image/:key", (req, res) => {
  const key = req.params.key;
  const readStream = getFileStream(key);
  //console.log(readStream.data)
  const params = {
    Key: key,
    Bucket: bucketName
  }

  const fileStream = s3.getObject(params, (err, data) => {
    if (err) {
      return res.send({msg: err})
    }
  }).createReadStream()
  fileStream.pipe(res);
});

router.post("/image", upload.single("image"), async (req, res) => {
  const file = req.file;
  const nose = await uploadFile(file);
  res.send(nose);
});

router.get("/s3Url", async (req, res) => {
  const url = await generateUploadURL();
  res.send({ url });
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
