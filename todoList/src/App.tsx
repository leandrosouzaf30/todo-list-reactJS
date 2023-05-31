import { Header } from './components/Header'
import { Task } from './components/Task'

import style from "./App.module.css"

import './global.css'

export function App() {
  const tasks = [
    {
      "description": "Estudar",
      "status": false
    }
  ]
  return (
    <>
      <Header />
      <div className={style.boxTodo}>
        <main>
          {tasks.map(task=>{
            return(
              <Task 
                key={task.description}
                task={task}
              />
            )
          })}
        </main>
      </div>
    </>
  )
}

