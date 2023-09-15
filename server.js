const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const postRoutes = require('./routes/postRoutes');
const getRoutes = require('./routes/getRoutes'); 
const path = require('path'); 
const port = 5005;

// EJS를 사용하도록 설정
app.set('view engine', 'ejs'); // EJS 템플릿 엔진 설정
app.set('views', path.join(__dirname, 'views')); // 'views' 디렉토리 설정

// ...

// POST 요청을 파싱할 수 있도록 bodyParser 미들웨어 추가
app.use(bodyParser.json());

// 라우트 설정
app.use('/', postRoutes);
app.use('/', getRoutes);

// 정적 파일 서빙 (public 디렉토리에 정적 파일을 넣어주세요)
app.use(express.static(path.join(__dirname, 'public')));

// 서버 시작
app.listen(port, () => {
    console.log(`Server is running on ${port} port`);
});