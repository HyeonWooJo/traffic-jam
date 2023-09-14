// routes/postRoutes.js
const express = require('express');
const router = express.Router();
const postController = require('../controllers/postControllers');

// POST 요청을 처리할 라우트 설정
router.post('/postRequest', postController.handlePostRequest);

module.exports = router;
