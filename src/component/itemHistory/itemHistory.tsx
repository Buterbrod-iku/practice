import style from './itemHistory.module.scss'
import ApiBudget from "../../api/badget";

const ItemHistory = ({...props}) => {
    const {budget, updateBudget} = props;

    function convertDate(isoString) {
        // Создаем объект Date из строки
        const date = new Date(isoString);

        // Получаем компоненты даты
        const day = String(date.getDate()).padStart(2, '0');
        const month = String(date.getMonth() + 1).padStart(2, '0'); // Месяцы начинаются с 0
        const year = date.getFullYear();

        // Форматируем дату и время в нужном формате
        const formattedDate = `${day}.${month}.${year}`;

        return formattedDate;
    }

    const deleteBudget = async (e) => {
        e.preventDefault();
        await ApiBudget.deleteBudget(budget._id)
        await updateBudget(e)
    }


    return (
        <div className={style.main}>
            <div className={style.positionMain}>
                {/*TODO: svg in type*/}
                {
                    budget?.type ? (<img src="../../../public/image/plusCash.png"/>) : (<img src="../../../public/image/buy.webp"/>)
                }
                <p>{budget?.fio}</p>
                <h3>{budget.name}</h3>
                <p className={style.date}>{convertDate(budget?.date)}</p>
            </div>


            <div className={style.value}>
                <p>
                    {
                        !budget?.type  && '-'
                    }
                    {budget?.money.$numberDecimal}
                </p>

                <button onClick={deleteBudget}>Удалить</button>
            </div>
        </div>
    );
};

export default ItemHistory;