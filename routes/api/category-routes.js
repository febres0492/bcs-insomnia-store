const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    Category.findAll({
        include: {
            model: Product,
            attributes: ['product_name']
        }
    })
    .then((categories) => {
        res.status(200).json(categories)
    })
    .catch((err) => {
        console.log(err)
        res.status(400).json(err)
    })

});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    res.json("get one category by id")
});

router.post('/', (req, res) => {
    // category model requires category_name to create a new category
    console.log("create a new category", req.body )

    // create a new category
    // Category.create(req.body)
    //     .then((category) => {
    //         res.status(200).json(category)
    //     })
    //     .catch((err) => {
    //         console.log(err)
    //         res.status(400).json(err)
    //     })
});

router.put('/:id', (req, res) => {
    // update a category by its `id` value
    res.json("update a category by id")
});

router.delete('/:id', (req, res) => {
    // delete a category by its `id` value
    res.json("delete a category by id")
});

module.exports = router;
