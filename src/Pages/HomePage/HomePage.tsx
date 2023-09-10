import {HomePageStyled} from "./HomePageStyled";
import {auth, signOut} from "../../Firebase/Firebase";
import {getUserActive} from "../../Redux/Actions/UserActions";
import React, {useEffect, useState} from "react";
import {Link, Navigate, Route, Routes, useNavigate} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../Utils/HooksRedux";
import Income from "../../Components/Income/Income";
import Expenses from "../../Components/Expenses/Expenses";
import Result from "../../Components/Result/Result";
import Edit from "../../Components/Edit/Edit";

type navType = 'income' | 'expenses' | 'result' | 'edit';
export default function HomePage():JSX.Element {

    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const userActive = useAppSelector((state) => state.userState.userActive);
    const [showMenuUser, setShowMenuUser] = useState<boolean>(false);
    const [nav, setNav] = useState<navType>('income');

    function FunctionIsAuthenticated() {
        auth.onAuthStateChanged((user) => {
            console.log(user);
            if (user) {
                const userId = user.uid;
                console.log(userId);
                dispatch(getUserActive(userId)).then(r => {
                    navigate('/home');
                });
            } else {
                navigate('/login');
            }
        });
    }
    function handleSignOut() {
        signOut().then(r => {
            if (userActive) {
                dispatch(getUserActive(userActive.id)).then(r => {});
            }
        });
    }
    function handleShowMenuUser() {
        setShowMenuUser(!showMenuUser);
    }
    function handleShowMenuNav(nav:navType) {
        setNav(nav);
    }
    function openShowMenuNavEdit() {
        setNav('edit');
    }
    function closeShowMenuNavEdit() {
        setNav('result');
    }

    useEffect(() => {
        FunctionIsAuthenticated();
    }, []);

    return (
        <HomePageStyled>
            <div className="container-header">
                <div className="container-logo-nav">
                    <h1 className="title-budget">Presupuesto</h1>
                    <div className="nav">
                        <span onClick={() => handleShowMenuNav('income')} className="item">Ingresos</span>
                        <span onClick={() => handleShowMenuNav('expenses')} className="item">Gastos</span>
                        <span onClick={() => handleShowMenuNav('result')} className="item">Resultado</span>
                    </div>
                </div>
                <div className="container-user-sign-out">
                    <div onClick={handleShowMenuUser} className="container-user">
                        <img alt="img-user" className="img-user" src="/img/usuario.png"/>
                        <span className="title-user">{userActive?.name}</span>
                    </div>
                    {showMenuUser &&
                        <div className="container-menu-user">
                            <span className="menu-user-item">Editar usuario</span>
                            <span className="menu-user-item">Otra cosa</span>
                            <span onClick={handleSignOut} className="menu-user-item">Cerrar sesión</span>
                        </div>
                    }
                </div>
            </div>
            <div className="container-routes">
                {nav === 'income' &&
                    <Income/>
                }
                {nav === 'expenses' &&
                    <Expenses/>
                }
                {nav === 'result' &&
                    <Result openShowMenuNavEdit={openShowMenuNavEdit}/>
                }
                {nav === 'edit' &&
                    <Edit closeShowMenuNavEdit={closeShowMenuNavEdit}/>
                }
            </div>
        </HomePageStyled>
    );
}