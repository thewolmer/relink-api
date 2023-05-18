const router = require('express').Router();
const path = require('path');

router.get('/:branch/:semester/:subject/:chapter', (req, res) => {
    try {
  const { branch, semester, subject, chapter } = req.params;
  const filePath = path.resolve(__dirname, '../data', branch, semester, subject, `${chapter}.md`);
  res.sendFile(filePath);
  } catch (error) {
    next(error);
  }
});

router.use((req, res, next) => {
    res.status(404).json({ code:'404', error: 'Not Found', message: "File not found"  });
});

router.use((err, req, res, next) => {
    if (err.code === 'ENOENT') {
        res.status(404).json({ code:'404', error: 'Not Found', message: 'File not found' });
    } else {
        console.error(err); 
        
        res.status(500).json({code:'500', error: 'Internal server error', message: 'Something went wrong, Try again later.' });
    }
});

module.exports = router;