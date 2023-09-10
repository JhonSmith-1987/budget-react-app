import {EditStyled} from "./EditStyled";
import {useAppSelector} from "../../Utils/HooksRedux";
import Loading from "../Loading/Loading";
import EditExpenses from "../EditExpenses/EditExpenses";
import EditIncome from "../EditIncome/EditIncome";

interface IEditProps {
    closeShowMenuNavEdit: () => void;
}
export default function Edit({
                                 closeShowMenuNavEdit
                             }:IEditProps): JSX.Element {

    const income = useAppSelector((state) => state.incomeState.income);
    const isLoadingGetIncomeForId = useAppSelector((state) => state.incomeState.isLoadingGetIncomeForId);



    return (
        <EditStyled>
            {isLoadingGetIncomeForId &&
                <Loading/>
            }
            {!isLoadingGetIncomeForId && income?.valueIncome === 0 &&
                <EditExpenses closeShowMenuNavEdit={closeShowMenuNavEdit}/>
            }
            {!isLoadingGetIncomeForId && income?.valueExpense === 0 &&
                <EditIncome closeShowMenuNavEdit={closeShowMenuNavEdit}/>
            }
        </EditStyled>
    );
}