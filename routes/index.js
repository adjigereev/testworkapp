const express = require('express');
const router = express.Router();
const upload = require('../middleware/uploadMiddleware')
const postController = require('../controllers/postController')
router.route('/')
    .get(postController.getPost)
    .post(upload.single('image'),postController.createPost)

module.exports = router;
