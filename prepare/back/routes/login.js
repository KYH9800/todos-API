const express = require('express');
const router = express.Router();

// 로그인
router.get('/', (req, res) => {
  res.send('login router');
});

module.exports = router;
