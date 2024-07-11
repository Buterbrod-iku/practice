import style from './itemHistory.module.scss'

const ItemHistory = ({...props}) => {
    const {name, value, type, date} = props;

    return (
        <div className={style.main}>
            <div className={style.positionMain}>
                {/*TODO: svg in type*/}
                {
                    type ? (<img src="../../../public/image/plusCash.png"/>) : (<img src="../../../public/image/buy.webp"/>)
                }
                <h3>{name}</h3>
                <p className={style.date}>{date}</p>
            </div>


            <div className={style.value}>
                <p>{value}</p>

                <button>Удалить</button>
            </div>
        </div>
    );
};

export default ItemHistory;