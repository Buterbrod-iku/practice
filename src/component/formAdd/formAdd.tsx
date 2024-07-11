import React, {useState} from 'react';
import style from "./formAdd.module.scss";

const FormAdd = () => {
    const [formData, setFormData] = useState({
        title: '',
        amount: '',
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

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData); // выводим объект с данными формы в консоль
    };

    return (
        <div className={style.main}>
            <h1>Введите данные</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Название</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                />

                <label htmlFor="amount">Сумма</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
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