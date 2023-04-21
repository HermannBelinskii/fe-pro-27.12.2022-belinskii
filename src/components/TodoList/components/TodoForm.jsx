import React, { useState } from 'react';
import styles from './TodoForm.module.scss'

export default function TodoForm ({addTodo}) {
    const [value, setValue] = useState('')

    function handleSubmit (e){
        e.preventDefault();

        addTodo(value)
        setValue('')
    }

    return (
        <form 
            className={styles.todo_form}
            onSubmit={handleSubmit}
        >
            <input 
                type="text"
                value={value}
                className={styles.todo_input}
                placeholder='Specify your task'
                onChange={(e) => setValue(e.target.value)}
            />
            <button 
                type='submit' 
                className={styles.todo_btn}
            > 
                Add your task
            </button>

        </form>
    )
}