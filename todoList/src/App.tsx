import { Header } from './components/Header'
import { NewTask } from './components/NewTask'

import style from "./App.module.css"

import './global.css'

export function App() {
  return (
    <>
      <Header />
      <div className={style.boxTodo}>
        <main>
          <NewTask />
        </main>
      </div>
    </>
  )
}

