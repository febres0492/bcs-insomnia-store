const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
    // find all categories
    // be sure to include its associated Products
    res.json("get all categories")
});

router.get('/:id', (req, res) => {
    // find one category by its `id` value
    // be sure to include its associated Products
    res.json("get one category by id")
});

router.post('/', (req, res) => {
    // create a new category
    res.json("create a new category")
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
