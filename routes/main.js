const router = require('express').Router();
const sponsors = require('../content/sponsors');

router.get('/sponsors', (req, res) => {
  res.json(sponsors);
});

module.exports = router;
