import axios from "axios";
import {HOST} from "./Const/const"

export default class ApiBudget {
    private static host: string = HOST;

    static async getBudget() {
        return await axios.get(`${this.host}getBudget`)
    }

    static async getBudgetQueryType(value) {
        return await axios.get(`${this.host}getBudget?type=${value}`)
    }

    static async getBudgetQueryFio(value) {
        return await axios.get(`${this.host}getBudget?fio=${value}`)
    }

    static async sendBudget(object) {
        return await axios.post(`${this.host}addBudget`, object)
    }

    static async deleteBudget(id) {
        return await axios.delete(`${this.host}deleteBudget/` + id)
    }
}