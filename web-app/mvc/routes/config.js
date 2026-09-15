const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', (req, res) => UserController.index(req, res));
router.get('/users', (req, res) => UserController.getAllUsers(req, res));
router.get('/users/create', (req, res) => UserController.userCreate(req, res));
router.post('/users', (req, res) => UserController.userPostAsync(req, res));
router.delete('/users/:id', (req, res) => UserController.userDeleteAsync(req, res));
router.put('/users/:id', (req, res) => UserController.userPutAsync(req, res));
router.get('/users/:id', (req, res) => UserController.userGetByIdView(req, res));

module.exports = router;