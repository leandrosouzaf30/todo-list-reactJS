import { List, PlusCircle } from "phosphor-react"
import style from "./Task.module.css"
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react"
import { TaskList } from "./TaskList"

interface Task{
    description: string,
    status: boolean
}

interface TaskProps {
    task: Task
}

export function Task({task}:TaskProps){
    const [tasks, setTasks] = useState([task.description])
    const [newTask, setnewTask] = useState('')
    const [countTasksDone, setCountTasksDone] = useState(0)

    function editStatusTask(status: boolean){
        if(status){
            setCountTasksDone(countTasksDone+1)
        }else{ 
            setCountTasksDone(countTasksDone-1) 
        } 
    }
    

    function handleAddTask(event:FormEvent){
        event?.preventDefault()
        setTasks([...tasks, newTask])
        setnewTask('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>){
        event.target.setCustomValidity('')
        setnewTask(event?.target.value)
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>){
        event?.target.setCustomValidity('Esse campo é obrigatório!')
    }

    function deleteTask(taskToDelete:string){
        const tasksWithoutDeleteOne = tasks.filter(task=>{
            return task !== taskToDelete
        })

        setTasks(tasksWithoutDeleteOne)   
        setCountTasksDone(countTasksDone-1)
    }

    return(
        <div>
            <form onSubmit={handleAddTask} className={style.newTask}>
                <input 
                    type="text"
                    value={newTask}
                    placeholder="Adicione uma nova tarefa" 
                    onChange={handleNewTaskChange}
                    onInvalid={handleNewTaskInvalid}
                    required
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
                        <span className={style.detalTasksProgress}>{tasks.length}</span>
                    </div>
                    <div className={style.detalTasksConcluidas}>
                        Concluidas
                        <span className={style.detalTasksProgress}>
                           {countTasksDone} de {tasks.length}
                        </span>
                    </div>
                </div>
                {tasks.map(task=>{
                    return (
                        <TaskList 
                            key={task} 
                            task={task} 
                            onDeleteTask={deleteTask}
                            onEditStatus={editStatusTask}
                        />
                    )
                })}
                
            </div>
        </div>
    )
}