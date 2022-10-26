import { NoTasks } from '../NoTasks/NoTasks'
import { ViewTasks } from '../ViewTasks/ViewTasks'

import styles from './TaskContainer.module.css'

import { StructureTasks } from '../../App'
import {  useState } from 'react'

interface PropsTasks {
    tasks: StructureTasks[];
    concludedTask: (id:string) => void;
    deletedTask: (id:string) => void;
}


export function TaskContainer({ tasks, concludedTask, deletedTask }:PropsTasks){

    const createdTasks = tasks.map(e => e).length
    const completed = tasks.filter(e => e.done).length



    function transport(id:string, whatFunction:string){
        whatFunction === 'concludedTask'? concludedTask(id) : deletedTask(id)
    }

    

    return (
        <div className={styles.container}>
            <header>
                <p>
                    Tarefas criadas
                    <span>
                        {createdTasks}
                    </span>
                </p>
                <p>
                    Concluídas
                    <span>
                        {completed}
                    </span>
                </p>
            </header>
            <main>
                { createdTasks === 0 ? <NoTasks /> : null }
                {
                    tasks.map(e => {
                        return (
                            <ViewTasks 
                                key={e.id} 
                                id={e.id} 
                                task={e.task} 
                                done={e.done}
                                transport={transport}
                            />
                        )
                    })
                }
                
            </main>
        </div>
    )
}