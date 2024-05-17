const asyncHandler = require("express-async-handler");
const Image = require("../models/imageModel.cjs");
const { body, validationResult } = require("express-validator");
const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

// dest starts from root directory
const upload = multer({ dest: "./src/server/public/uploads" });
dotenv.config();

cloudinary.config({
  // Put in Railway
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.get_image = asyncHandler(async (req, res) => {
  const images = await Image.find().exec();
  res.json(images);
});

exports.post_image = [
  upload.single("image"),
  body("name", "Name must be specified").trim().isLength({ min: 1 }).toLowerCase().escape(),
  body("image").escape(),
  body("top_left", "Top left coordinates must be specified").trim().isLength({ min: 3 }).escape(),
  body("bottom_right", "Bottom right coordinates must be specified")
    .trim()
    .isLength({ min: 3 })
    .escape(),
  asyncHandler(async (req, res) => {
    const errors = validationResult(req);
    const duplicateImage = await Image.findOne({ name: req.body.name }).exec();
    const image = new Image({
      name: req.body.name,
      url: "",
      coordinates: [req.body.top_left.split(","), req.body.bottom_right.split(",")]
    });
    if (!errors.isEmpty() || duplicateImage) {
      res.redirect("/form");
      return;
    }
    const imageURL = await cloudinary.uploader.upload(req.file.path);
    image.url = imageURL.secure_url;
    await image.save();
    res.redirect("/");
  })
];
