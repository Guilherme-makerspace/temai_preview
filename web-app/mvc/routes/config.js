const { Router } = require('express');
const UserController = require('../controllers/UserController');

const router = Router();

router.get('/', (req, res) => UserController.index(req, res));
router.get('/users', (req, res) => UserController.getAllUsers(req, res));
router.post('/users', (req, res) => UserController.userPostAsync(req, res));
router.delete('/users/:id', (req, res) => UserController.userDeleteAsync(req, res));
router.put('/users/:id', (req, res) => UserController.userPutAsync(req, res));
router.get('/users/:id', (req, res) => UserController.userGetByIdView(req, res));

// RF02/RF05/RF06 - Pré-inscrição (usuário e interessado são a mesma entidade)
router.get('/pre-inscricao', (req, res) => UserController.userCreate(req, res));
router.post('/api/interessados', (req, res) => UserController.userPostAsync(req, res));
router.get('/api/interessados', (req, res) => UserController.getAllUsers(req, res));

module.exports = router;