import { Request, Response } from 'express';
import { createClient } from '@supabase/supabase-js';
import { Topic } from '../types';

const supabase = createClient(process.env.SUPABASE_URL!, process.env.SUPABASE_API_KEY!);

export const getAllTopics = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from<Topic>('pediatrics').select('*');
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching topics' });
  }
};

export const getTopic = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { data, error } = await supabase.from<Topic>('pediatrics').select('*').eq('id', id).single();
    if (error) throw error;
    if (!data) return res.status(404).json({ error: 'Topic not found' });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error fetching topic' });
  }
};

export const searchTopics = async (req: Request, res: Response) => {
  const { query } = req.query;
  try {
    const { data, error } = await supabase.from<Topic>('pediatrics').select('*').ilike('title', `%${query}%`);
    if (error) throw error;
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error searching topics' });
  }
};

export const createTopic = async (req: Request, res: Response) => {
  const { title, content, tags } = req.body;
  try {
    const { data, error } = await supabase.from<Topic>('pediatrics').insert({ title, content, tags }).single();
    if (error) throw error;
    res.status(201).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error creating topic' });
  }
};

export const updateTopic = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { title, content, tags } = req.body;
  try {
    const { data, error } = await supabase.from<Topic>('pediatrics').update({ title, content, tags }).eq('id', id).single();
    if (error) throw error;
    if (!data) return res.status(404).json({ error: 'Topic not found' });
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: 'Error updating topic' });
  }
};

export const deleteTopic = async (req: Request, res: Response) => {
  const { id } = req.params;
  try {
    const { error } = await supabase.from<Topic>('pediatrics').delete().eq('id', id);
    if (error) throw error;
    res.status(204).send();
  } catch (err) {
    res.status(500).json({ error: 'Error deleting topic' });
  }
};

