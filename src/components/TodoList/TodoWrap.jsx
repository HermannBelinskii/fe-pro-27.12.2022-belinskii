import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import Todo from './components/Todo';
import TodoForm from './components/TodoForm';
import styles from './TodoWrap.module.scss'

export default function TodoWrap () {

    const [todos, setTodos] = useState([])

    function addTodo (todo){
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false}])
    }
    
    function toggleComplete (id){
        setTodos(
            todos.map((todo) =>
              todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    function deleteTodo (id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }


    return (
        <div 
            className={styles.todo_wrapper}
        >
            <h1>ToDo List</h1>
                <TodoForm addTodo={addTodo}/>
                {todos.map((todo) => (
                    <Todo 
                        task={todo} 
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
        </div>
    )
}