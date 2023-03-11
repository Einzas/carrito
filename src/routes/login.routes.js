const {Router} = require('express');
const router = Router();
const {login, getUsers, createUser, getUser, deleteUser, updateUser} = require('../services/login.services');
const verifyToken = require('../middlewares/authJWT');

router.get('/user/',verifyToken , getUsers );
router.get('/user/:id',verifyToken, getUser );
router.post('/user/', createUser );
router.put('/user/:id',verifyToken, updateUser );
router.delete('/user/:id',verifyToken, deleteUser );
router.post('/login', login);
module.exports = router;