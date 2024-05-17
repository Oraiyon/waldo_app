const express = require("express");
const imageControllers = require("../controllers/imageControllers.cjs");

const router = express.Router();

router.get("/api/image", imageControllers.get_image);
router.post("/form", imageControllers.post_image);

module.exports = router;
