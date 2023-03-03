var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/', function (req, res, next) {
  const filePath = './views/index.html';

  res.sendFile(path.resolve(filePath));
});

module.exports = router;
