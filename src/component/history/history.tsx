import React from 'react';
import style from "./history.module.scss";
import ItemHistory from "../itemHistory/itemHistory";
import {useHistory} from "./hook/useHistory";

const History = () => {
    const {
        data,
        isLoading,
        allMoney,
        filterType,
        filterFio,
        handleFilterChange,
        handleFilterFioChange,
        searchFilterFioChange,
        updateBudget,
    } = useHistory()

    if (isLoading) {
        return null;
    }

    return (
        <div className={style.history}>
            <h2 style={{textAlign: 'center'}}>Всего {allMoney}</h2>


            <div className={style.border}>
                <h3 style={{textAlign: 'center'}}>Фильтры</h3>
                <div className={style.fio}>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <label htmlFor="filterFio">ФИО</label>
                        <input
                            type="text"
                            name="filterFio"
                            value={filterFio}
                            onChange={handleFilterFioChange}
                        />
                        <button onClick={searchFilterFioChange}>Поиск по фио</button>
                    </div>

                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                        <label>
                            <input
                                type="radio"
                                name="filter"
                                value="all"
                                checked={filterType === 'all'}
                                onChange={handleFilterChange}
                            />
                            Все
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="filter"
                                value="income"
                                checked={filterType === 'income'}
                                onChange={handleFilterChange}
                            />
                            Доходы
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="filter"
                                value="expense"
                                checked={filterType === 'expense'}
                                onChange={handleFilterChange}
                            />
                            Расходы
                        </label>
                    </div>
                </div>
            </div>




            {
                data.map((item) => (
                    <ItemHistory key={item?._id} budget={item} updateBudget={updateBudget}/>
                ))
            }
        </div>
    );
};

export default History;