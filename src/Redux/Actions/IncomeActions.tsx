import {
    DELETE_INCOME, DELETE_INCOME_FAILED, DELETE_INCOME_SUCCESS,
    GET_INCOMES,
    GET_INCOMES_FAILED, GET_INCOMES_FOR_ID, GET_INCOMES_FOR_ID_FAILED, GET_INCOMES_FOR_ID_SUCCESS,
    GET_INCOMES_SUCCESS,
    GET_SUM_EXPENSES,
    GET_SUM_INCOMES,
    GET_SUM_TOTAL,
    POST_INCOME,
    POST_INCOME_FAILED,
    POST_INCOME_SUCCESS, UPDATE_INCOME, UPDATE_INCOME_FAILED, UPDATE_INCOME_SUCCESS
} from "../Types/IncomeTypes";
import {collection, addDoc, query, where, getDocs, doc, deleteDoc, getDoc, updateDoc} from "firebase/firestore";
import {db} from "../../Firebase/Firebase";
import {IncomePostModel} from "../../Models/IncomeModel";
import {IncomeGetModel} from "../../Models/IncomeGetModel";
import {SweetAlertSuccess} from "../../Utils/SweetAlert/SweetAlertSuccess";
import {SweetAlertError} from "../../Utils/SweetAlert/SweetAlertError";


export const postIncome = (income:IncomePostModel) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: POST_INCOME,
        payload: true
    });
    const incomeRef = collection(db, 'incomes');
    await addDoc(incomeRef, income).then((res) => {
        console.log(res);
        dispatch({
            type: POST_INCOME_SUCCESS,
            payload: 'Dato ingresado correctamente'
        });
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: POST_INCOME_FAILED,
            payload: 'Hubo un error al ingresar el dato'
        });
    });
}
export const getIncomes = (userId:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: GET_INCOMES,
        payload: true
    });
    const q = query(collection(db, 'incomes'), where('userId', '==', userId));
    await getDocs(q).then((querySnapshot) => {
        const dataIncome:IncomeGetModel[] = [];
        let sumIncomes:number = 0;
        let sumExpenses:number = 0;
        querySnapshot.forEach((docData) => {
            const data:IncomeGetModel = {
                'id': docData.id,
                'date': docData.data().date,
                'description': docData.data().description,
                'valueIncome': docData.data().valueIncome,
                'valueExpense': docData.data().valueExpense,
                'userId': docData.data().userId,
            }
            dataIncome.push(data);
            const dataSumIncome:number = data.valueIncome || 0;
            const dataSumExpense:number = data.valueExpense || 0;
            sumIncomes += dataSumIncome;
            sumExpenses += dataSumExpense;
        });
        let sumTotal = sumIncomes - sumExpenses;
        console.log(dataIncome);
        dispatch({
            type: GET_INCOMES_SUCCESS,
            payload: dataIncome
        });
        dispatch({
            type: GET_SUM_INCOMES,
            payload: sumIncomes
        });
        dispatch({
            type: GET_SUM_EXPENSES,
            payload: sumExpenses
        });
        dispatch({
            type: GET_SUM_TOTAL,
            payload: sumTotal
        });
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: GET_INCOMES_FAILED,
            payload: 'Hubo un error al cargar los documentos'
        });
    });
}
export const deleteIncomes = (id:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: DELETE_INCOME,
        payload: true
    });
    const incomeRef = doc(db, 'incomes', id);
    await deleteDoc(incomeRef).then(() => {
        dispatch({
            type: DELETE_INCOME_SUCCESS,
            payload: 'Documento eliminado con éxito'
        });
    }).catch((err) => {
        dispatch({
            type: DELETE_INCOME_FAILED,
            payload: 'Error al eliminar el documento'
        });
    });
}
export const getIncomesForId = (id:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    console.log(id);
    dispatch({
        type: GET_INCOMES_FOR_ID,
        payload: true
    });
    const incomeRef = doc(db, 'incomes', id);
    await getDoc(incomeRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
            const docIncome:IncomeGetModel = {
                'id': docSnapshot.id,
                'userId': docSnapshot.data().userId,
                'date': docSnapshot.data().date,
                'description': docSnapshot.data().description,
                'valueIncome': docSnapshot.data().valueIncome,
                'valueExpense': docSnapshot.data().valueExpense,
            }
            console.log(docIncome);
            dispatch({
                type: GET_INCOMES_FOR_ID_SUCCESS,
                payload: docIncome
            });
        }
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: GET_INCOMES_FOR_ID_FAILED,
            payload: 'Hubo un error al obtener el registro'
        });
    });
}
export const updateIncome = (id:string, data:any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: UPDATE_INCOME,
        payload: true
    });
    const incomeRef = doc(db, 'incomes', id);
    await updateDoc(incomeRef, data).then((r) => {
        console.log(r);
        dispatch({
            type: UPDATE_INCOME_SUCCESS,
            payload: 'Registro actualizado con éxito'
        });
        SweetAlertSuccess('Registro actualizado con éxito');
    }).catch((err) => {
        dispatch({
            type: UPDATE_INCOME_FAILED,
            payload: 'Hubo un error al actualizar el registro'
        });
        SweetAlertError('Hubo un error al actualizar el registro');
    });

}