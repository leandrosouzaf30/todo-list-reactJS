import { Trash } from 'phosphor-react'
import style from './TaskList.module.css'


interface TaskProps {
    task: string,
    onDeleteTask: (task:string) => void;
}

export function TaskList({task, onDeleteTask}:TaskProps){
    function handleDeleteTask(){
        onDeleteTask(task)
    }
    return(
        <div className={style.content}>
            <span>
                <input type='checkbox' className={style.checkboxRound} />
                {task}
            </span>
            <button onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
       
    )
}