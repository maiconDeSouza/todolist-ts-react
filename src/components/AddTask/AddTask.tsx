import { v4 as uuidv4, v4 } from 'uuid';


import { PlusCircle } from 'phosphor-react'

import styles from './Addtask.module.css'

import { StructureTasks } from '../../App'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

interface PropsAddTask {
    createNewTask: (objectTask:StructureTasks) => void
}

function taskFactory(task: string){
    const id = v4()
    const done = false

    return{
        id,
        task,
        done
    }
}

export function Addtask({createNewTask}:PropsAddTask){
    const [ textTaskInput, setTextTaskInput ] = useState('')

    function textInput(event:ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setTextTaskInput(event.target.value)
    }

    function addtask(event:FormEvent){
        event.preventDefault()

        const taskObject = taskFactory(textTaskInput)

        createNewTask(taskObject)
        setTextTaskInput('')
    }

    function emptyTask(event:InvalidEvent<HTMLInputElement>){
        event.target.setCustomValidity('Preencha sua Próxima Tarefa!')
    }

    return (
        <form className={styles.containerForm} onSubmit={addtask}>
            <input 
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={textInput} 
                value={textTaskInput}
                required
                onInvalid={emptyTask}
            />
            <button>
                Criar 
                <PlusCircle />
            </button>
        </form>
    )
}