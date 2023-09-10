import {EditIncomeStyled} from "./EditIncomeStyled";
import {useAppDispatch, useAppSelector} from "../../Utils/HooksRedux";
import {useForm} from "react-hook-form";
import {IncomeFormModel} from "../../Models/IncomeFormModel";
import {IncomePostModel} from "../../Models/IncomeModel";
import {functionCurrentDate} from "../../Utils/Functions/FunctionCurrentDate";
import {getIncomes, postIncome, updateIncome} from "../../Redux/Actions/IncomeActions";
import {SweetAlertSuccess} from "../../Utils/SweetAlert/SweetAlertSuccess";

interface IEditIncomeProps {
    closeShowMenuNavEdit: () => void;
}

export default function EditIncome({closeShowMenuNavEdit}:IEditIncomeProps): JSX.Element {

    const {register, handleSubmit, reset, formState: {errors}} = useForm<IncomeFormModel>();
    const dispatch = useAppDispatch();
    const income = useAppSelector((state) => state.incomeState.income);
    const userActive = useAppSelector((state) => state.userState.userActive);


    function handleIncomeEdit(data:IncomeFormModel) {
        if (income) {
            const incomeEdit: IncomePostModel = {
                'userId': income.userId,
                'date': income.date,
                'description': data.description,
                'valueIncome': parseInt(data.value),
                'valueExpense': income.valueExpense
            }
            dispatch(updateIncome(income.id, incomeEdit)).then(r => {
                if (userActive) {
                    dispatch(getIncomes(userActive.id)).then(r => {
                        closeShowMenuNavEdit();
                    });
                }
            });
        }
    }
    const submitIncome = (data:IncomeFormModel) => handleIncomeEdit(data);

    return (
        <EditIncomeStyled>
            <h1 className="title-income">EDITAR INGRESO</h1>
            <form onSubmit={handleSubmit(submitIncome)} className="form-income">
                <div className="container-input">
                    <label htmlFor="value-income">Valor</label>
                    <input
                        defaultValue={income?.valueIncome}
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
                <span className="err">err</span>
            </form>
        </EditIncomeStyled>
    );
}