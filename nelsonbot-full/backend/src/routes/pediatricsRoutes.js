const express = require('express');
const { createClient } = require('@supabase/supabase-js');
const router = express.Router();

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_API_KEY);

// Fetch all topics
router.get('/topics', async (req, res) => {
  try {
    const { data, error } = await supabase.from('pediatrics').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Fetch topic by ID
router.get('/topics/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase.from('pediatrics').select('*').eq('id', id);
    if (error) throw error;
    res.status(200).json(data[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Search topics
router.get('/topics/search', async (req, res) => {
  const { query } = req.query;
  try {
    const { data, error } = await supabase
      .from('pediatrics')
      .select('*')
      .ilike('title', `%${query}%`);
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Chat endpoint
router.post('/chat', async (req, res) => {
  const { message } = req.body;
  try {
    // Here you would typically process the message and generate a response
    // For now, we'll just echo the message back
    const response = `You said: "${message}"`;
    res.status(200).json({ response });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;

