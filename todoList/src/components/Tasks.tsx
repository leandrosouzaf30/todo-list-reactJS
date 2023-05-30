import { Trash } from 'phosphor-react'
import style from './Tasks.module.css'

export function Tasks({content, onDeleteTask}){
    function handleDeleteTask(){
        onDeleteTask(content)
    }
    return(
        <div className={style.content}>
            <span>
                <input type='checkbox' className={style.checkboxRound} />
                {content}
            </span>
            <button onClick={handleDeleteTask}>
                <Trash size={20}/>
            </button>
        </div>
       
    )
}