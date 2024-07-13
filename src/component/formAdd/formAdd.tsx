import React, {useState} from 'react';
import style from "./formAdd.module.scss";
import ApiBudget from "../../api/badget";

const FormAdd = ({openForm}) => {
    const [formData, setFormData] = useState({
        name: '',
        fio: '',
        money: '',
        date: '',
        type: '1' // по умолчанию тип "Доход"
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formattedData = {
            ...formData,
            type: formData.type === '1', // Преобразуем '1' в true и '0' в false
            money: parseFloat(formData.money), // Преобразуем money в число
            date: new Date(formData.date).toISOString() // Преобразуем дату в ISO формат
        };

        console.log(formattedData);

        await ApiBudget.sendBudget(formattedData)
        openForm(e)
    };

    return (
        <div className={style.main}>
            <h1>Введите данные</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Название</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                />

                <label htmlFor="fio">ФИО</label>
                <input
                    type="text"
                    id="fio"
                    name="fio"
                    value={formData.fio}
                    onChange={handleInputChange}
                />

                <label htmlFor="money">Сумма</label>
                <input
                    type="number"
                    id="money"
                    name="money"
                    value={formData.money}
                    onChange={handleInputChange}
                />

                <label htmlFor="date">Дата</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                />

                <label htmlFor="type">Тип</label>
                <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleInputChange}
                >
                    <option value="1">Доход</option>
                    <option value="0">Расход</option>
                </select>

                <button type="submit">Сохранить</button>
            </form>
        </div>
    );
};

export default FormAdd;