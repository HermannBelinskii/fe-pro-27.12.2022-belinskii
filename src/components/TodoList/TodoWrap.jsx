import { faL } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import todoList from '../../mockData';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';
import styles from './TodoWrap.module.scss'



export default function TodoWrap () {

    const [todos, setTodos] = useState(todoList)

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
                    <TodoItem 
                        task={todo} 
                        key={todo.id}
                        toggleComplete={toggleComplete}
                        deleteTodo={deleteTodo}
                    />
                ))}
        </div>
    )
}