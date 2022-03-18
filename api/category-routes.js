const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  router.get('/', async (req, res) => {
    try {
      const Catagory = await Catagory.findAll({
        include: [{ model: Product }],
      });
      res.status(200).json();
    } catch (err) {
      res.status(500).json(err);
    }
  });
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  try {
    const Catagory = await Catagory.findByPk(req.params.id, {
      include: [{ model: Product}],
});


  router.post('/', async (req, res) => {
    try {
      const locationData = await .create({
        reader_id: req.body.,
      });
      res.status(200).json(locationData);
    } catch (err) {
      res.status(400).json(err);
    }
  });


router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
