import { Trash } from 'phosphor-react'
import style from './TaskList.module.css'
import { ChangeEvent, useState } from 'react';


interface TaskProps {
    task: string,
    onDeleteTask: (task:string) => void;
    onEditStatus: (status:boolean) => void;
}

export function TaskList({task, onDeleteTask, onEditStatus}:TaskProps){
    const [taskHasDone, setTaskHasDone] = useState(false)
    
    function handleDeleteTask(){
        onDeleteTask(task)
    }

    function handleEditStatusTask(event: ChangeEvent<HTMLInputElement>){
        setTaskHasDone(event.target.checked)
        onEditStatus(event.target.checked);
        console.log(taskHasDone);
        
    }

    return(
        <div className={style.content}>
            <div className={style.taskDescription}>
                <label className={style.container}>
                    <input 
                        type='checkbox' 
                        className={style.checkboxRound}
                        onChange={handleEditStatusTask} 
                    />
                    <span className={style.checkmark}></span>
                </label>
                <span className={taskHasDone ? style.taskHasDone : style.taskNotDone}>
                    {task}
                </span>
            </div>
            <button onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
       
    )
}