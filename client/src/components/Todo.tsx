import React, { useState } from 'react';
import { deleteTodo, getTodos, updateTodo } from '../services';

export type ITodoType = {
    id: number;
    task: string;
    done: boolean;
    createdAt: string;
    updatedAt: string;
};

type TodoType = {
    todo: ITodoType
    todos: ITodoType[];
    setTodos: (todo: any) => void;
}

const Todo: React.FC<TodoType> = ({ todo, todos, setTodos }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editedTask, setEditedTask] = useState(todo.task);

    const editClickHandler = () => setIsEditing(true);
    const editTextHandler = (e: any) => setEditedTask(e.target.value);
    const saveEdit = async (e: any) => {
        e.preventDefault();
        const updatedTodo = { ...todo };
        updatedTodo.task = editedTask;
        await updateTodo(updatedTodo);
        setIsEditing(false);
        const response = await getTodos();
        setTodos(response);
    };
    const cancelEdit = () => {
        setIsEditing(false);
        setEditedTask(todo.task);
    };
    const completeTodoHandler = async (item: ITodoType) => {
        if (!item.done) {
            item.done = true;
            await updateTodo(item);
            const response = await getTodos();
            setTodos(response);
        }
    };
    const deleteHandler = async (id: ITodoType['id']) => {
        await deleteTodo(id);
        const updatedTodos = todos.filter((t) => t.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="todo">
            {
                isEditing ? (
                    <form>
                        <input onChange={editTextHandler} value={editedTask} type="text" className="todo-input" />
                        <button onClick={saveEdit} className="todo-button" type="submit">
                            <i className="fas fa-plus-square"></i>
                        </button>
                        <button onClick={cancelEdit} className="cancel-button" type="button">
                            <i className="fas fa-ban"></i>
                        </button>
                    </form>
                ) : (
                    <>
                        <li className={`todo-item ${todo.done ? 'completed' : ''}`}>{todo.task}</li>
                        <button
                            onClick={editClickHandler}
                            className={`edit-btn ${todo.done ? 'disabled-btn' : ''}`}
                            disabled={todo.done}
                        >
                            <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                            onClick={() => completeTodoHandler(todo)}
                            className={`complete-btn ${todo.done ? 'disabled-btn' : ''}`}
                            disabled={todo.done}
                        >
                            <i className="fas fa-check"></i>
                        </button>
                        <button onClick={() => deleteHandler(todo.id)} className="trash-btn">
                            <i className="fas fa-trash"></i>
                        </button>
                    </>
                )
            }
        </div>
    );
};

export default Todo;