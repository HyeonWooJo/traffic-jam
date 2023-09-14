const express = require('express');
const router = express.Router();
const getController = require('../controllers/getControllers'); // 컨트롤러 가져오기

// GET 요청에 대한 라우트 정의
router.get('/', getController.getIndexPage);

module.exports = router;