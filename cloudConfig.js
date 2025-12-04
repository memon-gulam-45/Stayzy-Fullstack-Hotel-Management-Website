const cloudinary = require("cloudinary");
const cloudinaryStorage = require("multer-storage-cloudinary");
const multer = require("multer");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

const storage = cloudinaryStorage({
  cloudinary: cloudinary,
  folder: "stayzy_DEV",
  allowedFormats: ["jpg", "png", "jpeg"],
});

const upload = multer({ storage });

module.exports = { cloudinary, upload };
