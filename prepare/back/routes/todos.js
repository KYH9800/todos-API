const express = require('express');
const router = express.Router();

// 할 일 추가하기
// 할 일 목록 보기
// 할 일 순서 변경하기
// 할 일 완료하기
// 할 일 완료 해제하기

// GET /todos, 할 일 목록 불러오기
router.get('/', (req, res) => {
  res.send('todos router');
});

// POST /todos, 할 일 추가하기
router.post('/', (req, res) => {
  res.send('todos router');
});

// 할 일 순서 변경하기

module.exports = router;
