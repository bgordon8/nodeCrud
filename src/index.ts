import express from 'express';
import user from './routes/user';
const app = express();

app.use(user);

app.listen(3000, () => {
  console.log('listening on port:3000...');
});
