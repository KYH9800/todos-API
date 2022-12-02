const express = require('express');
const router = express.Router();
// models(Schema)
const Todo = require('../models/todo');

// POST /todos, 할 일 추가하기
router.post('/', async (req, res) => {
  try {
    const { value } = req.body;
    const maxOrderByUserId = await Todo.findOne().sort({ order: -1 }).exec();
    console.log('maxOrderByUserId: ', maxOrderByUserId);

    const order = maxOrderByUserId ? maxOrderByUserId.order + 1 : 1;
    const todo = new Todo({ value, order });
    await todo.save();

    return res.send({ todo });
  } catch (error) {
    console.error(error);
  }
});

// GET /todos, 할 일 목록 가져오기
router.get('/', async (req, res) => {
  try {
    const todos = await Todo.find().sort({ order: -1 }).exec();
    console.log('todos: ', todos);

    return res.send({ todos });
  } catch (error) {
    console.error(error);
  }
});

// PATCH /:todoId, 할 일 순서 변경하기, 할 일 수정하기, 체크 박스 수정
router.patch('/:todoId', async (req, res) => {
  const { todoId } = req.params;
  const { order, value, done } = req.body;
  console.log('todoId: ', todoId);
  console.log('order: ', order);
  console.log('value: ', value);
  console.log('done: ', done);

  const currentTodo = await Todo.findById(todoId).exec();
  try {
    if (!currentTodo) {
      throw new Error('존재하지 않는 todo 데이터입니다.');
    }

    if (order) {
      const targetTodo = await Todo.findOne({ order }).exec();
      if (targetTodo) {
        targetTodo.order = currentTodo.order;
        await targetTodo.save();
      }
      currentTodo.order = order;
    } else if (value) {
      currentTodo.value = value;
    } else if (done !== undefined) {
      currentTodo.doneAt = done ? new Date() : null;
    }

    await currentTodo.save();
    res.send({});
    // return res.status(200).json({ targetTodo });
  } catch (error) {
    console.error(error);
  }
});

// DELETE /:todoId, 할 일 삭제하기
router.delete('/:todoId', async (req, res) => {
  const { todoId } = req.params;

  const todo = await Todo.findById(todoId).exec();
  await todo.delete();

  res.send({});
});

module.exports = router;

// 할 일 완료하기
// 할 일 완료 해제하기
