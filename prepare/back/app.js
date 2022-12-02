const express = require('express');
const app = express();
const port = 3000;
// morgan check log
const morgan = require('morgan');
// index.js in router
const indexRouter = require('./routes');

// 클라이언트로 부터 받은 http 요청 메시지 형식에서 body데이터를 해석하기 위함
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(morgan('combined'));

app.use('/api', indexRouter);
app.use(express.static('./assets'));

app.listen(port, () => {
  console.log(port, 'port start!!');
});
