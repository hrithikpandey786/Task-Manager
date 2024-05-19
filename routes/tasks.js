const express = require('express');
const router = express.Router();
const controllers = require('../controllers/tasks')

router.get('/', controllers.getAllTasks);
router.post('/', controllers.createTask);
router.get('/:id', controllers.getTask);
router.patch('/:id', controllers.updateTask);
router.delete('/:id', controllers.deleteTask);

module.exports = router;