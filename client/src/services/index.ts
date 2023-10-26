import axios from "../axios";
import { ITodoType } from "../components/Todo";

export const getTodos = async () => {
    try {
        const request = await axios.get('/api/todo/');
        const response = await request.data;

        return response;
    } catch (err) {
        console.log(err);
    }
};

export const createTodo = async (params: Pick<ITodoType, 'task' | 'done'>) => {
    try {
        const request = await axios.post('/api/todo/', params, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await request.data;

        return response;
    } catch (err) {
        console.log(err);
    }
};

export const updateTodo = async (params: ITodoType) => {
    try {
        const request = await axios.put(`/api/todo/${params.id}`, params, {
            headers: {
                'Content-Type': 'application/json',
            }
        });
        const response = await request.data;

        return response;
    } catch (err) {
        console.log(err);
    }
};

export const deleteTodo = async (id: ITodoType['id']) => {
    try {
        const request = await axios.delete(`/api/todo/${id}`);
        const response = await request.data;

        return response;
    } catch (err) {
        console.log(err);
    }
}