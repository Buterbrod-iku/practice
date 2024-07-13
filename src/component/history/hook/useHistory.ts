import {useEffect, useState} from "react";
import {useFetching} from "../../../hook/useFetching";
import ApiBudget from "../../../api/badget";

export const useHistory = () => {
    const [data, setData] = useState();
    const [allMoney, setAllMoney] = useState();
    const [filterType, setFilterType] = useState('all');
    const [filterFio, setFilterFio] = useState('');

    const [fetchPostGetAll, isLoading, error] = useFetching(async () => {
        let response;
        if (filterType === 'income') {
            response = await ApiBudget.getBudgetQueryType(true);
        } else if (filterType === 'expense') {
            response = await ApiBudget.getBudgetQueryType(false );
        } else {
            response = await ApiBudget.getBudget();
        }

        setData(response.data.reverse());

        const totalMoney = response.data.reduce((sumMoney, item) => {
            const moneyValue = parseFloat(item.money.$numberDecimal);

            if (isNaN(moneyValue)) {
                // Если значение не является числом, пропускаем его
                return sumMoney;
            }

            if (item.type) {
                return sumMoney + moneyValue;
            } else {
                return sumMoney - moneyValue;
            }
        }, 0); // Начальное значение суммы - 0

        setAllMoney(totalMoney);
    });

    const [fetchPostGetAllFio, isLoadingFio, errorFio] = useFetching(async () => {
        const response = await ApiBudget.getBudgetQueryFio(filterFio)

        setData(response.data.reverse());
    });

    useEffect(() => {
        fetchPostGetAll()
    }, [filterType])

    const handleFilterChange = (e) => {
        setFilterType(e.target.value);
    };

    const handleFilterFioChange = (e) => {
        setFilterFio(e.target.value);
    };

    const searchFilterFioChange = async (e) => {
        e.preventDefault();


        fetchPostGetAllFio()
    };

    const updateBudget = async (e) => {
        e.preventDefault();
        await fetchPostGetAll()
    }

    return {
        data,
        isLoading,
        allMoney,
        filterType,
        filterFio,
        handleFilterChange,
        handleFilterFioChange,
        searchFilterFioChange,
        updateBudget,

    }
}