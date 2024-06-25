const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

// get all categories
router.get('/', (req, res) => {
    console.log("get all categories")
    // find all categories
    // be sure to include its associated Products
    try {
        Category.findAll({
            include: {
                model: Product,
                attributes: ['product_name']
            }
        }).then((categories) => {
            res.status(200).json(categories)
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// get category by id
router.get('/:id', (req, res) => {
    console.log("get one category by id", req.params.id)
    // find one category by its `id` value
    // be sure to include its associated Products
    try {
        Category.findOne({
            where: {
                id: req.params.id
            },
            include: {
                model: Product,
                attributes: ['product_name']
            }
        }).then((category) => {
            if (!category) {
                res.status(404).json({ message: 'no category found with this id' });
                return
            }
            res.status(200).json(category);
        } )
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// create a new category
router.post('/', (req, res) => {
    try {
        Category.create(req.body).then((category) => {
            res.status(200).json(category)
        })
    } catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// update a category by its `id` value
router.put('/:id', (req, res) => {
    console.log('update a category by id', req.params.id, req.body)
    try {
        Category.update(req.body, {
            where: { id: req.params.id }
        }).then( async (category) => {
            if (!category) {
                res.status(404).json({ message: 'no category found with this id' });
                return
            }
            const updatedCategory = await Category.findOne({ where: { id: req.params.id } });
            res.status(200).json({ message: 'category updated', category: updatedCategory });
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

// delete a category by its `id` value
router.delete('/:id', (req, res) => {
    try{
        Category.destroy({
            where: { id: req.params.id }
        }).then((category) => {
            if (!category) {
                res.status(404).json({ message: 'no category found with this id' });
                return
            }
            res.status(200).json({ message: 'category deleted' });
        })
    }
    catch (err) {
        console.log(err)
        res.status(400).json(err)
    }
});

module.exports = router;
