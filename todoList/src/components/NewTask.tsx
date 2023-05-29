import { PlusCircle } from "phosphor-react"
import style from "./NewTask.module.css"

export function NewTask(){
    return(
        <div className={style.newTask}>
            <input type="text" placeholder="Adicione uma nova tarefa" />
            <button>
                <span>Criar</span>
                <PlusCircle size={20} />
            </button>
        </div>
    )
}