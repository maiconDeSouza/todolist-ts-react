import { v4 as uuidv4, v4 } from 'uuid';
import { Header } from './components/Header/Header'
import { Addtask } from './components/AddTask/AddTask'
import { TaskContainer } from './components/TaskContainer/TaskContainer'


import styles from './App.module.css'

import { useState } from 'react'

export interface StructureTasks {
  id: string;
  task: string;
  done: boolean;
}


export function App(){
  const [ tasks, setTasks ] = useState<StructureTasks[]>([{
    id: v4(),
    task: 'Estudar reactJS',
    done: false
  }])

  function createNewTask(objectTask:StructureTasks):void{
    setTasks([...tasks, objectTask])
    
  }

  function concludedTask(id:string){
       const newTasks = tasks.map(e => {
            if(e.id === id){
                 e.done = !e.done
            }
            return e
        })

        setTasks(newTasks)
    }

    function deletedTask(id:string){
        const newTasks = tasks.filter(e => e.id !== id)
        setTasks(newTasks)

    }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <Addtask createNewTask={createNewTask}/>
        <TaskContainer tasks={tasks} concludedTask={concludedTask} deletedTask={deletedTask}/>
      </div>
    </div>
  )
}