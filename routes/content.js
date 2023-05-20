const router = require('express').Router();
const availableContent = require('../content/availablecontent');

router.get('/', (req, res) => {
  res.json(availableContent);
});

router.get('/:branch', (req, res) => {
  const { branch } = req.params;

  const selectedBranch = availableContent.branches.find(item => item.code === branch);

  if (selectedBranch) {
    const semesters = selectedBranch.semesters;
    res.json(semesters);
  } else {
    res.status(404).json({ error: 'Branch not found' });
  }
});

router.get('/:branch/:semester', (req, res) => {
  const { branch, semester } = req.params;

  const selectedBranch = availableContent.branches.find(item => item.code === branch);

  if (selectedBranch) {
    const selectedSemester = selectedBranch.semesters.find(item => item.code === semester);

    if (selectedSemester) {
      const subjects = selectedSemester.subjects;
      res.json(subjects);
    } else {
      res.status(404).json({ error: 'Semester not found' });
    }
  } else {
    res.status(404).json({ error: 'Branch not found' });
  }
});

router.get('/:branch/:semester/:subject', (req, res) => {
  const { branch, semester, subject } = req.params;

  const selectedBranch = availableContent.branches.find(item => item.code === branch);

  if (selectedBranch) {
    const selectedSemester = selectedBranch.semesters.find(item => item.code === semester);

    if (selectedSemester) {
      const selectedSubject = selectedSemester.subjects.find(item => item.code === subject);

      if (selectedSubject) {
        const chapters = selectedSubject.chapters;
        res.json(chapters);
      } else {
        res.status(404).json({ error: 'Subject not found' });
      }
    } else {
      res.status(404).json({ error: 'Semester not found' });
    }
  } else {
    res.status(404).json({ error: 'Branch not found' });
  }
});

module.exports = router;
