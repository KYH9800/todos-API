const express = require('express');
const router = express.Router();

// 회원가입
router.get('/', (req, res) => {
  res.send('signup router');
});

module.exports = router;
