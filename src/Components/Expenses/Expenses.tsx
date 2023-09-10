import {ExpensesStyled} from "./ExpensesStyled";
import {useForm} from "react-hook-form";
import {IncomeFormModel} from "../../Models/IncomeFormModel";
import {useAppDispatch, useAppSelector} from "../../Utils/HooksRedux";
import {IncomePostModel} from "../../Models/IncomeModel";
import {functionCurrentDate} from "../../Utils/Functions/FunctionCurrentDate";
import {postIncome} from "../../Redux/Actions/IncomeActions";
import {SweetAlertSuccess} from "../../Utils/SweetAlert/SweetAlertSuccess";

export default function Expenses(): JSX.Element {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IncomeFormModel>();
    const dispatch = useAppDispatch();
    const userActive = useAppSelector((state) => state.userState.userActive);
    const isLoadingPostIncome = useAppSelector((state) => state.incomeState.isLoadingPostIncome);
    const messages = useAppSelector((state) => state.incomeState.messages);
    const err = useAppSelector((state) => state.incomeState.errors);

    function handleExpenseRegister(data:IncomeFormModel) {
        console.log(data);
        if (userActive) {
            const postIncomedata:IncomePostModel = {
                'userId': userActive.id,
                'date': functionCurrentDate(),
                'description': data.description,
                'valueIncome': 0,
                'valueExpense': parseInt(data.value),
            }
            console.log(postIncomedata);
            dispatch(postIncome(postIncomedata)).then(r => {
                reset();
                SweetAlertSuccess('Dato ingresado correctamente');
            });
        }
    }

    const submitExpense = (data:IncomeFormModel) => handleExpenseRegister(data);

    return (
        <ExpensesStyled>
            <h1 className="title-income">MIS GASTOS</h1>
            <form onSubmit={handleSubmit(submitExpense)} className="form-income">
                <div className="container-input">
                    <label htmlFor="value-income">Valor</label>
                    <input
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
                        id="description-income"
                        rows={6}
                        cols={20}
                        {...register('description', {
                            required: true
                        })}
                        aria-invalid={errors.description ? "true" : "false"}
                    />
                </div>
                <button disabled={isLoadingPostIncome} className="button-income" type="submit">{!isLoadingPostIncome ? 'Ingresar' : 'Ingresando...'}</button>
                <span className="err">{err}</span>
            </form>
        </ExpensesStyled>
    );
}