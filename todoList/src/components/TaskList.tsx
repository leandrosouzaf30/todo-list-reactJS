import { Trash } from 'phosphor-react'
import style from './TaskList.module.css'
import { ChangeEvent } from 'react';


interface TaskProps {
    task: string,
    onDeleteTask: (task:string) => void;
    onEditStatus: (status:boolean) => void;
}

export function TaskList({task, onDeleteTask, onEditStatus}:TaskProps){
    
    function handleDeleteTask(){
        onDeleteTask(task)
    }

    function handleEditStatusTask(event: ChangeEvent<HTMLInputElement>){
        onEditStatus(event.target.checked);
    }

    return(
        <div className={style.content}>
            <span>
                <input 
                    type='checkbox' 
                    className={style.checkboxRound}
                    onChange={handleEditStatusTask} 
                />
                {task}
            </span>
            <button onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
       
    )
}