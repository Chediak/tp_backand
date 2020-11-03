const express = require('express');
const LojaController = require('../controllers/lojaController');
const LojaController2 = require('../controllers/userController');
const router = express.Router();
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: 'http://localhost:8888'}));

//products
router.post('/products', LojaController.Insert);
router.get('/products', LojaController.SelectAll);
router.get('/products/:id', LojaController.SelectDetail);
router.put('/products/:id', LojaController.Update);
router.delete('/products/:id', LojaController.Delete);

//users

router.post('/users', LojaController2.Insert);
router.get('/users', LojaController2.SelectAll);
router.get('/users/:id', LojaController2.SelectDetail);
router.put('/users/:id', LojaController2.Update);
router.delete('/users/:id', LojaController2.Delete);


module.exports = router;