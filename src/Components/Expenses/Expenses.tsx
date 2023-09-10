import {IncomeStyled} from "./IncomeStyled";
import {useEffect} from "react";
import {auth} from "../../Firebase/Firebase";
import {useAppDispatch} from "../../Utils/HooksRedux";
import {getUserActive} from "../../Redux/Actions/UserActions";

export default function Income(): JSX.Element {


    return (
        <IncomeStyled>
            <h1>este es el componente de ingresos</h1>
        </IncomeStyled>
    );
}