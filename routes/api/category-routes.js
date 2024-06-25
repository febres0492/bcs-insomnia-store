const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', async (req, res) => {
    // find all categories
    // be sure to include its associated Products
    try {
        const categories = await Category.findAll({
            include: {
                model: Product,
                attributes: ['product_name']
            }
        })
        res.status(200).json(categories)
        
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// get category by id
router.get('/:id', async (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        // checking if category exists
        const category = await Category.findOne({
            where: { id: req.params.id },
            include: { model: Product, attributes: ['product_name'] }
        })
        if (!category) {
            return res.status(404).json({ message: 'no category found with this id' });
        }
        res.status(200).json(category)

    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// create a new category
router.post('/', async (req, res) => {
    try {
        // checking if category already exists
        const targetCategory = await Category.findOne({ where: { category_name: req.body.category_name } })
        if (targetCategory) { 
            return res.status(400).json({ message: 'Category already exists!' })
        }

        const newCategory = await Category.create(req.body)
        res.status(200).json({ message: 'category created', category: newCategory})
        
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// update a category by its `id` value
router.put('/:id', async (req, res) => {
    try {
        // check if category exists
        const category = await Category.update(req.body, { where: { id: req.params.id } })
        if (!category) {
            return res.status(404).json({ message: 'no category found with this id' });
        }

        // update category
        const updatedCategory = await Category.findOne({ where: { id: req.params.id } });
        res.status(200).json({ message: 'category updated', category: updatedCategory });
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// delete a category by its `id` value
router.delete('/:id', async (req, res) => {
    try{
        const category = await Category.destroy({ where: { id: req.params.id } })
        if (!category) {
            return res.status(404).json({ message: 'no category found with this id' });
        }
        res.status(200).json({ message: 'category deleted' });
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

module.exports = router;
