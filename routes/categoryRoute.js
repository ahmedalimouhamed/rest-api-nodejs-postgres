const router = require('express').Router();
const categoryController = require('../controllers/categoryController')

router.get('', categoryController.getAllCategories);
router.post('', categoryController.createCategory);
router.put('/:id', categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);
router.get('/:id', categoryController.getCategoryById);

module.exports = router;