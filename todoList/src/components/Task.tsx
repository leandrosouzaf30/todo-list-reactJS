import { PlusCircle } from "phosphor-react"
import style from "./Task.module.css"
import { ChangeEvent, FormEvent, useState } from "react"
import { TaskList } from "./TaskList"

export function Task(){
    const [tasks, setTasks] = useState(['Estudar'])
    const [newTask, setnewTask] = useState('')

    function handleAddTask(event:FormEvent){
        event?.preventDefault()

        setTasks([...tasks, newTask])
        setnewTask('')
        
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        setnewTask(event?.target.value)
        
    }

    function deleteTask(taskToDelete:string){
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
                        <TaskList 
                            key={task} 
                            task={task} 
                            onDeleteTask={deleteTask} 
                        />
                    )
                })}
                
            </div>
        </div>
    )
}