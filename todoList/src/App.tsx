import { Header } from './components/Header'
import { Task } from './components/Task'

import style from "./App.module.css"

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={style.boxTodo}>
        <main>
          <Task />
        </main>
      </div>
    </>
  )
}

