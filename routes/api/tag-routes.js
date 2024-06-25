const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

router.get('/', async(req, res) => {
    // res.json("get all tags")
    // find all tags
    // be sure to include its associated Product data
    
});

router.get('/:id', (req, res) => {
    res.json("get one tag by id")
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', (req, res) => {
    res.json("create a new tag")
  // create a new tag
});

router.put('/:id', (req, res) => {
    res.json("update a tag by id")
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
    res.json("delete a tag by id")
  // delete on tag by its `id` value
});

module.exports = router;
