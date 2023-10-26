import { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getTodos = async (_: Request, res: Response) => {
    try {
        const todos = await prisma.todo.findMany();
        res.json(todos);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const createTodo = async (req: Request, res: Response) => {
    try {
        const { task, done } = req.body;
        const todo = await prisma.todo.create({
            data: {
                task,
                done,
            },
        });
        res.json(todo);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const updateTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { task, done } = req.body;
        const updatedTodo = await prisma.todo.update({
            where: { id: parseInt(id) },
            data: {
                task,
                done,
            },
        });
        res.json(updatedTodo);
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const deleteTodo = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        await prisma.todo.delete({
            where: { id: parseInt(id) },
        });
        res.json({ message: 'To-Do item deleted' });
    } catch (err) {
        res.status(500).json({ error: 'Internal server error' });
    }
}