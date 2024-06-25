const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// find all tags
router.get('/', async(req, res) => {
    // be sure to include its associated Product data
    try {
        const tagData = await Tag.findAll({ include: [{ model: Product }] })
        res.status(200).json(tagData)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// find a single tag by its `id`
router.get('/:id', async (req, res) => {
    // be sure to include its associated Product data
    try {
        // checking if tag exists
        const tagData = await Tag.findByPk(req.params.id, { include: [{ model: Product }] })
        if (!tagData) {
            return res.status(404).json({ message: 'No tag found with that id!' })
        }
        res.status(200).json(tagData)
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// create a new tag
router.post('/', async (req, res) => {
    try {
        // checking if tag already exists
        const targetTag = await Tag.findOne({ where: { tag_name: req.body.tag_name } })
        if (targetTag) {
            return res.status(400).json({ message: 'Tag already exists!' })
        }

        // creating new tag
        const tagData = await Tag.create(req.body)
        res.status(200).json({ message: 'Tag created!', tagData})
    }
    catch (err) {
        res.status(400).json(err)
    }
});

// update a tag's name by its `id` value
router.put('/:id', async (req, res) => {
    try {
        // checking if tag exists
        const targetTag = await Tag.findOne({ where: { id: req.params.id } })
        if (!targetTag) {
            return res.status(404).json({ message: 'No tag found with that id!' })
        }

        // updating tag
        await Tag.update(req.body, { where: { id: req.params.id } })

        const updatedTag = await Tag.findOne({ where: { id: req.params.id } })

        res.status(200).json({ message: 'Tag updated!', updatedTag})
    }
    catch (err) {
        res.status(500).json(err)
    }
});

// delete on tag by its `id` value
router.delete('/:id', async(req, res) => {
    try {
        // checking if tag exists
        const tagData = await Tag.destroy({ where: { id: req.params.id } })
        if (!tagData) {
            return res.status(404).json({ message: 'No tag found with that id!' })
        }
        res.status(200).json({ message: 'Tag deleted!', tagData})
    }
    catch (err) {
        res.status(500).json(err)
    }
});

module.exports = router;
