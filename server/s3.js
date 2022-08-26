require("dotenv").config();

const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");
const crypto = require('crypto')
const { promisify } = require('util')

const randomBytes = promisify(crypto.randomBytes)

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_KEY;

const s3 = new S3({
  region,
  accessKeyId,
  secretAccessKey,
});

// get url s3
async function generateUploadURL() {
  const rawBytes = await randomBytes(16)
  const imageName = rawBytes.toString('hex')

  const params = ({
    Bucket: bucketName,
    Key: imageName,
    Expires: 60
  })
  
  const uploadURL = await s3.getSignedUrlPromise('putObject', params)
  return uploadURL
}
exports.generateUploadURL = generateUploadURL;


// uploads a file to s3

function uploadFile(file) {
 // console.log(file)
  const fileStream = fs.createReadStream(file.path);
  //console.log(fileStream)

  const uploadParams = {
    Bucket: bucketName,
    Body: fileStream,
    Key: file.filename,
  };

  return s3.upload(uploadParams).promise(); 
}

exports.uploadFile = uploadFile;
// delete a file from s3

async function deleteFile(url) {
  let { pathname } = new URL(url, process.env.MONGODB_SERVER_URL);
  pathname = pathname.substring(1);
  const params = {
    Bucket: bucketName,
    Key: pathname,
  };
  return await s3.deleteObject(params).promise();
}

exports.deleteFile = deleteFile;

// downloads a file from s3
function getFileStream(fileKey) {
  const downloadParams = {
    Key: fileKey,
    Bucket: bucketName,
  };

  return s3.getObject(downloadParams)
}

exports.getFileStream = getFileStream;

// remove a file from s3
