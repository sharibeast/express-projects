const express = require('express');
const router = express.Router();

const controller = (req, res) => {
  res.status.json({ message: 'from controller' });
};

// router.use('/api/vi');

router.get('/', (req, res) => {
  res.status(404).json({ message: 'hello' });
});
router.post('/', controller);

router.put('/:id', controller);
router.delete('/:id', controller);
router.get('/:id', controller);

module.exports = router;
