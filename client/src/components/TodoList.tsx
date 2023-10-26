import React from 'react';
import Todo, { ITodoType } from './Todo';

type TodoListType = {
    todos: ITodoType[];
    setTodos: (todo: any) => void;
    filteredTodos: ITodoType[];
};

const TodoList: React.FC<TodoListType> = ({ todos, setTodos, filteredTodos }) => {
    return (
        <div className="todo-container">
            <ul className="todo-list">
                {filteredTodos.length > 0 ? filteredTodos.map((t, i) => (
                    <Todo
                        key={i}
                        todo={t}
                        todos={todos}
                        setTodos={setTodos}
                    />
                )) : (
                    <div className="no-items">
                        <h3>0 items...</h3>
                    </div>
                )}
            </ul>
        </div>
    )
};

export default TodoList;