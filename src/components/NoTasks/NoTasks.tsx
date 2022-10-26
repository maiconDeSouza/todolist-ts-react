import { Clipboard } from 'phosphor-react'

import styles from './NoTasks.module.css'

export function NoTasks(){

    return (
        <div className={styles.noTask}>
            <Clipboard size={60}/>
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
    )
}