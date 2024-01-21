/** @format */

const { createPost } = require("./controller");

const router = require("express").Router();
router.post("/", createPost);

module.exports = router;
