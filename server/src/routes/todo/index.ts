import express from 'express';
import { PrismaClient } from '@prisma/client';
import { createTodo, deleteTodo, getTodos, updateTodo } from '../../mappers/todo';

const router = express.Router();
const prisma = new PrismaClient();

// Get all To-Do items
router.get('/', getTodos);

// Create a new To-Do item
router.post('/', createTodo);

// Update a To-Do item
router.put('/:id', updateTodo);

// Delete a To-Do item
router.delete('/:id', deleteTodo);

export default router;