import express from 'express';
import { getAllTopics, getTopic, searchTopics, createTopic, updateTopic, deleteTopic } from '../controllers/topicController';

const router = express.Router();

router.get('/topics', getAllTopics);
router.get('/topics/:id', getTopic);
router.get('/topics/search', searchTopics);
router.post('/topics', createTopic);
router.put('/topics/:id', updateTopic);
router.delete('/topics/:id', deleteTopic);

export default router;

