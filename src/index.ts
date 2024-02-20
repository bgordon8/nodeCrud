import express from 'express';

const app = express();

app.get('/', (req, res, next) => {
  res.status(200).json({ success: true, message: 'hello world' });
});

app.listen(3000, () => {
  console.log('listening on port:3000...');
});
