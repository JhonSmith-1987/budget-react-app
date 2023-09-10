import {ResultStyled} from "./ResultStyled";
import Swal from 'sweetalert2';
import {useAppDispatch, useAppSelector} from "../../Utils/HooksRedux";
import {deleteIncomes, getIncomes, getIncomesForId} from "../../Redux/Actions/IncomeActions";
import {useEffect} from "react";
import Loading from "../Loading/Loading";
import {SweetAlertSuccess} from "../../Utils/SweetAlert/SweetAlertSuccess";

interface IResultProps {
    openShowMenuNavEdit: () => void;
}
export default function Result({ openShowMenuNavEdit }:IResultProps): JSX.Element {

    const dispatch = useAppDispatch();
    const userActive = useAppSelector((state) => state.userState.userActive);
    const isLoadingGetIncome = useAppSelector((state) => state.incomeState.isLoadingGetIncome);
    const isLoadingDeleteIncome = useAppSelector((state) => state.incomeState.isLoadingDeleteIncome);
    const incomeList = useAppSelector((state) => state.incomeState.incomeList);
    const sumIncomes = useAppSelector((state) => state.incomeState.sumIncomes);
    const sumExpenses = useAppSelector((state) => state.incomeState.sumExpenses);
    const sumTotal = useAppSelector((state) => state.incomeState.sumTotal);

    function getDataForUserId() {
        if (userActive) {
            dispatch(getIncomes(userActive.id)).then(r => {});
        }
    }
    function handleDeleteIncome(id: string) {
        if (id) {
            Swal.fire({
                title: '¿Estás seguro?',
                text: 'Esta acción no se puede deshacer',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Sí, eliminar',
                cancelButtonText: 'Cancelar',
            }).then((result) => {
                if (result.isConfirmed) {
                    dispatch(deleteIncomes(id)).then(r => {
                        getDataForUserId();
                        SweetAlertSuccess('Dato eliminado con éxito');
                    });
                }
            });
        }
    }
    function handleEditIncome(id: string) {
        openShowMenuNavEdit();
        dispatch(getIncomesForId(id)).then(r => {});
    }

    useEffect(() => {
        getDataForUserId();
    }, []);

    useEffect(() => {
        console.log(isLoadingDeleteIncome)
    }, [isLoadingDeleteIncome]);

    return (
        <ResultStyled>
            {isLoadingDeleteIncome &&
                <Loading/>
            }
            {!isLoadingDeleteIncome &&
                <ResultStyled>
                    <h1 className="title">Resultado</h1>
                    <div className="result-table">
                        <div className="result green">
                            <span className="title-result">Total Ingresos</span>
                            <div className="total-result">{sumIncomes}</div>
                        </div>
                        <div className="result red">
                            <span className="title-result">Total Gastos</span>
                            <div className="total-result">{sumExpenses}</div>
                        </div>
                        {sumTotal > 0.5 * sumIncomes &&
                            <div className="result green">
                                <span className="title-result">Resultado Total</span>
                                <div className="total-result">{sumTotal}</div>
                            </div>
                        }
                        {sumTotal <= 0.5 * sumIncomes && sumTotal > 0.3 * sumIncomes &&
                            <div className="result green50">
                                <span className="title-result">Excediste el 50% de tus ingresos</span>
                                <div className="total-result">{sumTotal}</div>
                            </div>
                        }
                        {sumTotal <= 0.3 * sumIncomes && sumTotal > 0 &&
                            <div className="result green30">
                                <span className="title-result">Excediste el 30% de tus ingresos</span>
                                <div className="total-result">{sumTotal}</div>
                            </div>
                        }
                        {sumTotal === 0 &&
                            <div className="result green00">
                                <span className="title-result">Cuidado!, tu saldo es:</span>
                                <div className="total-result">{sumTotal}</div>
                            </div>
                        }
                        {sumTotal < 0 &&
                            <div className="result green00">
                                <span className="title-result">Tienes un sobre giro de:</span>
                                <div className="total-result">{sumTotal}</div>
                            </div>
                        }
                    </div>
                    <div className="container-table">
                        <table className="table">
                            <thead className="thead">
                            <tr className="row-head">
                                <th className="col">Fecha</th>
                                <th className="col">Descripcion</th>
                                <th className="col">Ingreso</th>
                                <th className="col">Gasto</th>
                                <th className="col">Acciones</th>
                            </tr>
                            </thead>

                            <tbody className="tbody">
                            {incomeList && incomeList.map((data, index) => (
                                <tr key={index} className="row-body">
                                    <td className="col">{data.date}</td>
                                    <td className="col">{data.description}</td>
                                    <td className="col">{data.valueIncome}</td>
                                    <td className="col">{data.valueExpense}</td>
                                    <td className="col">
                                        <div className="container-img-edit-delete">
                                            <img onClick={() => handleEditIncome(data.id)} className="icon-action" alt="img-edit" src="/img/edit.png"/>
                                            <img onClick={() => handleDeleteIncome(data.id)} className="icon-action" alt="img-delete" src="/img/delete.png"/>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>

                        </table>
                    </div>
                </ResultStyled>
            }
        </ResultStyled>
    );
}