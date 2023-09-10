import {
    DELETE_INCOME, DELETE_INCOME_FAILED, DELETE_INCOME_SUCCESS,
    GET_INCOMES, GET_INCOMES_FAILED, GET_INCOMES_FOR_ID, GET_INCOMES_FOR_ID_FAILED, GET_INCOMES_FOR_ID_SUCCESS,
    GET_INCOMES_SUCCESS, GET_SUM_EXPENSES, GET_SUM_INCOMES, GET_SUM_TOTAL,
    POST_INCOME,
    POST_INCOME_FAILED,
    POST_INCOME_SUCCESS
} from "../Types/IncomeTypes";
import {IncomeGetModel} from "../../Models/IncomeGetModel";

interface IStateIncome {
    isLoadingPostIncome: boolean;
    isLoadingGetIncome: boolean;
    isLoadingDeleteIncome: boolean;
    isLoadingUpdateIncome: boolean;
    isLoadingGetIncomeForId: boolean;
    income: IncomeGetModel | null;
    incomeList: IncomeGetModel[];
    sumIncomes: number;
    sumExpenses: number;
    sumTotal: number;
    messages: string;
    errors: string;
}
const initialStateIncome: IStateIncome = {
    isLoadingPostIncome: false,
    isLoadingGetIncome: false,
    isLoadingDeleteIncome: false,
    isLoadingUpdateIncome: false,
    isLoadingGetIncomeForId: false,
    income: null,
    incomeList: [],
    sumIncomes: 0,
    sumExpenses: 0,
    sumTotal: 0,
    messages: '',
    errors: '',
}

const IncomeReducer = function (state = initialStateIncome, action: {type:any; payload:any}):IStateIncome {
    switch (action.type) {
        case POST_INCOME:
            return {
                isLoadingPostIncome: action.payload,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: '',
                errors: '',
            }
        case POST_INCOME_SUCCESS:
            return {
                isLoadingPostIncome: false,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: action.payload,
                errors: state.errors,
            }
        case POST_INCOME_FAILED:
            return {
                isLoadingPostIncome: false,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: action.payload,
            }
        case GET_INCOMES:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: action.payload,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: state.errors,
            }
        case GET_INCOMES_SUCCESS:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: false,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: action.payload,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: state.errors,
            }
        case GET_INCOMES_FAILED:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: false,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: action.payload,
            }
        case GET_SUM_INCOMES:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: false,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: action.payload,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: state.errors,
            }
        case GET_SUM_EXPENSES:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: false,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: action.payload,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: state.errors,
            }
        case GET_SUM_TOTAL:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: false,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: action.payload,
                messages: state.messages,
                errors: state.errors,
            }
        case DELETE_INCOME:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: action.payload,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: state.errors,
            }
        case DELETE_INCOME_SUCCESS:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: false,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: action.payload,
                errors: state.errors,
            }
        case DELETE_INCOME_FAILED:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: false,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: state.isLoadingGetIncomeForId,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: action.payload,
            }
        case GET_INCOMES_FOR_ID:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: action.payload,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: state.errors,
            }
        case GET_INCOMES_FOR_ID_SUCCESS:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: false,
                income: action.payload,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: state.errors,
            }
        case GET_INCOMES_FOR_ID_FAILED:
            return {
                isLoadingPostIncome: state.isLoadingPostIncome,
                isLoadingGetIncome: state.isLoadingGetIncome,
                isLoadingDeleteIncome: state.isLoadingDeleteIncome,
                isLoadingUpdateIncome: state.isLoadingUpdateIncome,
                isLoadingGetIncomeForId: false,
                income: state.income,
                incomeList: state.incomeList,
                sumIncomes: state.sumIncomes,
                sumExpenses: state.sumExpenses,
                sumTotal: state.sumTotal,
                messages: state.messages,
                errors: action.payload,
            }
        default:
            return state;
    }
}
export default IncomeReducer;