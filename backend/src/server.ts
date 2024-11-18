import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import path from 'path';
import usersRouter from './routes/users';

const app = express();

dotenv.config();

app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

app.use(express.json()); // Parse JSON bodies


// Serve React static files



app.get('/', (req, res) => {
  res.send('hello world!');
});

app.use('/api/users', usersRouter);


app.listen(4000, () => {
  console.log('listening on port 4000');
});
