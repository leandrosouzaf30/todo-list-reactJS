import { PlusCircle } from "phosphor-react"
import style from "./NewTask.module.css"
import { useState } from "react"
import { Tasks } from "./Tasks"

export function NewTask(){
    const [tasks, setTasks] = useState([
        'Estudar'
    ])
    const [newTask, setnewTask] = useState('')

    function handleAddTask(){
        event?.preventDefault()

        setTasks([...tasks, newTask])
        setnewTask('')
        
    }

    function handleNewTaskChange(){
        setnewTask(event?.target.value)
        
    }

    function deleteTask(taskToDelete){
        const tasksWithoutDeleteOne = tasks.filter(task=>{
            return task !== taskToDelete
        })

        setTasks(tasksWithoutDeleteOne)
        
    }

    return(
        <div>
            <form onSubmit={handleAddTask} className={style.newTask}>
                <input 
                    type="text"
                    value={newTask}
                    placeholder="Adicione uma nova tarefa" 
                    onChange={handleNewTaskChange}
                />
                <button type="submit">
                    <span>Criar</span>
                    <PlusCircle size={20} />
                </button>
            </form>
            <div>
                <div className={style.detalTasks}>
                    <div className={style.detalTasksCriadas}>
                        Tarefas criadas
                        <span>{tasks.length}</span>
                    </div>
                    <div className={style.detalTasksConcluidas}>Concluidas</div>
                </div>
                {tasks.map(task=>{
                    return (
                        <Tasks 
                            key={task} 
                            content={task} 
                            onDeleteTask={deleteTask} 
                        />
                    )
                })}
                
            </div>
        </div>
    )
}