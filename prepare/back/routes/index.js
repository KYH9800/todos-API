const express = require('express');
const router = express.Router();
// routes
const todosRouter = require('./todos');
const signupRouter = require('./signup');
const loginRouter = require('./login');

router.get('/', (req, res) => {
  console.log('res: ', res);
  return res.send('Hello TODOS');
});

router.use('/todos', todosRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

module.exports = router;
