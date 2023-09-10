import {EditExpensesStyled} from "./EditExpensesStyled";
import {useForm} from "react-hook-form";
import {IncomeFormModel} from "../../Models/IncomeFormModel";
import {useAppDispatch, useAppSelector} from "../../Utils/HooksRedux";
import {IncomePostModel} from "../../Models/IncomeModel";
import {functionCurrentDate} from "../../Utils/Functions/FunctionCurrentDate";
import {getIncomes, postIncome, updateIncome} from "../../Redux/Actions/IncomeActions";
import {SweetAlertSuccess} from "../../Utils/SweetAlert/SweetAlertSuccess";

interface IEditExpensesProps {
    closeShowMenuNavEdit: () => void;
}

export default function EditExpenses({closeShowMenuNavEdit}:IEditExpensesProps): JSX.Element {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IncomeFormModel>();
    const dispatch = useAppDispatch();
    const income = useAppSelector((state) => state.incomeState.income);
    const userActive = useAppSelector((state) => state.userState.userActive);

    function handleExpenseRegisterEdit(data: IncomeFormModel) {
        if (income) {
            const expenseEdit: IncomePostModel = {
                'userId': income.userId,
                'date': income.date,
                'description': data.description,
                'valueIncome': income.valueIncome,
                'valueExpense': parseInt(data.value)
            }
            dispatch(updateIncome(income.id, expenseEdit)).then(r => {
                if (userActive) {
                    dispatch(getIncomes(userActive.id)).then(r => {
                        closeShowMenuNavEdit();
                    });
                }
            });
        }
    }

    const submitExpense = (data:IncomeFormModel) => handleExpenseRegisterEdit(data);

    return (
        <EditExpensesStyled>
            <h1 className="title-income">EDITAR GASTO</h1>
            <form onSubmit={handleSubmit(submitExpense)} className="form-income">
                <div className="container-input">
                    <label htmlFor="value-income">Valor</label>
                    <input
                        defaultValue={income?.valueExpense}
                        id="value-income"
                        type="number"
                        {...register('value', {
                            required: true
                        })}
                        aria-invalid={errors.value ? "true" : "false"}
                    />
                </div>
                <div className="container-input">
                    <label htmlFor="description-income">Descripción</label>
                    <textarea
                        defaultValue={income?.description}
                        id="description-income"
                        rows={6}
                        cols={20}
                        {...register('description', {
                            required: true
                        })}
                        aria-invalid={errors.description ? "true" : "false"}
                    />
                </div>
                <button disabled={false} className="button-income" type="submit">Editar</button>
                <span className="err">error</span>
            </form>
        </EditExpensesStyled>
    );
}