const express = require('express');
const router = express.Router();
// routes
const todosRouter = require('./todos');
const signupRouter = require('./signup');
const loginRouter = require('./login');

router.get('/', (req, res) => {
  res.send('todo list api start!!');
});

router.use('/todos', todosRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

module.exports = router;
