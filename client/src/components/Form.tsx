import React from 'react';
import { ITodoType } from './Todo';
import { createTodo } from '../services';

export type FormType = {
    todos: ITodoType[];
    setTodos: (todo: any) => void;
    inputText: string;
    setInputText: (input: string) => void;
    setFilter: (filter: 'all' | 'completed' | 'uncompleted') => void;
}

const Form: React.FC<FormType> = ({ todos, setTodos, inputText, setInputText, setFilter }) => {
    const inputTextHandler = (e: any) => {
        setInputText(e.target.value)
    };

    const submitHandler = async (e: any) => {
        e.preventDefault();
        if (!inputText) return;
        await createTodo({
            task: inputText,
            done: false,
        });
        setTodos([
            ...todos, { task: inputText, done: false, }
        ]);
        setInputText('');
    };

    const filterHandler = (e: any) => {
        setFilter(e.target.value);
    }

    return (
        <form>
            <input onChange={inputTextHandler} value={inputText} type="text" className="todo-input" />
            <button onClick={submitHandler} className="todo-button" type="submit">
                <i className="fas fa-plus-square"></i>
            </button>
            <div className="select">
                <select onChange={filterHandler} name="todos" className="filter-todo">
                    <option value="all">All</option>
                    <option value="completed">Completed</option>
                    <option value="uncompleted">Uncompleted</option>
                </select>
            </div>
        </form>
    );
};

export default Form;