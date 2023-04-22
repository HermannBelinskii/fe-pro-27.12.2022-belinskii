import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import styles from './TodoItem.module.scss';

export default function TodoItem ({task, toggleComplete, deleteTodo}) {
    return (
        <div className={styles.todo}>
            <p 
                className={`${task.completed ? styles.completed : ""}`}
                onClick={() => toggleComplete(task.id)}
            >
                {task.task}
            </p>
            <div>
                <FontAwesomeIcon 
                    className={styles.fa_trash}
                    icon={faTrash} 
                    onClick={ () => deleteTodo(task.id)}
                />
            </div>
        </div>
    )
}