import express from 'express';
import UserController from '../controllers/userController.js'
var router = express.Router();

router.get('/',UserController.getAll );
router.get('/:id',UserController.getById);
router.post('/',UserController.create)
router.post('/login', UserController.login)

export default router;
