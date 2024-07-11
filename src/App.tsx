import style from './App.module.scss'
import ItemHistory from "./component/itemHistory/itemHistory";
import {Link, NavLink} from "react-router-dom";
import {useState} from "react";
import History from "./component/history/history";
import FormAdd from "./component/formAdd/formAdd";

function App() {
    const [open, setOpen] = useState<boolean>(false);

    const openForm = (e: MouseEvent) => {
        e.preventDefault();
        setOpen(value => !value)
    }

  return (
    <div className={style.main}>
        <h1>Анализ учета расходов в семейном бюджете</h1>

        <div className={style.posButton}>
            <button onClick={openForm}>
                Добавить расход/доход
            </button>
        </div>

        {
            open ? (<FormAdd />) : (<History />)
        }


    </div>
  )
}

export default App
