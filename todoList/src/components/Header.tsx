import style from "./Header.module.css"

import todoLogo from "../assets/logo.svg"

export function Header(){
    return(
        <div className={style.header}>
            <img src={todoLogo} alt="TodoList Logo" />
        </div>
    )
}