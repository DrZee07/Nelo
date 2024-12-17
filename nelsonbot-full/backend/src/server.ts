import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import topicRoutes from './routes/topicRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api', topicRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

