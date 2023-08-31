import express from 'express';

const router = express.Router();

router.get('/users', (req, res) => {
  res.status(200).json({
    status: '200',
    message: 'All users',
  });
});

router.getAll('/users/:id', (req, res) => {
  res.status(200).json({
    status: '200',
    message: 'Single user',
  });
});

router.post('/users', (req, res) => {
  res.status(201).json({
    status: '201',
    message: 'Create user',
  });
});

router.patch('/users/:id', (req, res) => {
  res.status(200).json({
    status: '200',
    message: 'Update user',
  });
});

router.delete('/users/:id', (req, res) => {
  res.status(200).json({
    status: '200',
    message: 'Delete user',
  });
});

export default router;
