const { Router } = require('express');
const { register, login, getAllUsers, deleteUserById, detailUserById, updateUserById } = require('../handler/user.handler');
const { authenticated } = require('../middlewares/auth.middleware');

const router = Router();

router.post('/users', register);
router.post('/login', login);
router.get('/users', authenticated, getAllUsers);
router.get('/users/:id', authenticated, detailUserById);
router.put('/users/:id', authenticated, updateUserById);
router.delete('/users/:id', authenticated, deleteUserById);

module.exports = router;
