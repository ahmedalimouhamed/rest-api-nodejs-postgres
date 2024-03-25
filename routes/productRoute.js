const router = require('express').Router();
const productController  = require('../controllers/productController');

router.get('', productController.getAllProducts);
router.post('', productController.createProduct);
router.put('/:id', productController.updateProduct);
router.delete('/:id', productController.deleteProduct);
router.get('/:id', productController.getProductById);
router.get('/category/:id', productController.getProductsByCategoryId);

module.exports = router;