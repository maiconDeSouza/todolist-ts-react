import { Trash } from 'phosphor-react'
import { useState } from 'react';
import styles from './ViewTasks.module.css'

interface PropsViewTasks {
    id: string;
    task: string;
    done: boolean;
    transport: (id:string, whatFunction:string) => void;
}

export function ViewTasks({id, task, done, transport}:PropsViewTasks){
    const [ isDone, setIsDone ] = useState<boolean>(done)

    function changeState(){
        setIsDone(!isDone)
        transport(id, 'concludedTask')
    }

    function deleteTask(){
        transport(id, 'deleteTask')
    }

    return (
        <div className={styles.taskContainer}>
            <div className={styles.checkbox} onClick={changeState}>
                <div className={isDone ? styles.checked : ''}>
                    <span className={isDone ? styles.checked : ''}></span>
                </div>
            </div>
            <div className={styles.task} onClick={changeState}>
                <p className={isDone ? styles.checked : ''}>
                    {task} 
                </p>
            </div>
            <div className={styles.trash}>
                <Trash size={20} onClick={deleteTask}/>
            </div>
        </div>
    )
}