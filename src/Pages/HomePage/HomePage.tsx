import {LoginPageStyled} from "./LoginPageStyled";
import Login from "../../Components/Login/Login";
import SignIn from "../../Components/SignIn/SignIn";
import {useState} from "react";

export default function LoginPage():JSX.Element {

    const [left, setLeft] = useState<string>('50%');
    const [borderRadius, setBorderRadius] = useState<string>('0 15px 15px 0');


    function handleShowRegister() {
        setLeft('0');
        setBorderRadius('15px 0 0 15px');
    }

    function handleShowLogin() {
        setLeft('50%');
        setBorderRadius('0 15px 15px 0');
    }

    return (
        <LoginPageStyled left={left} border_radius={borderRadius}>
            <div className="container-login-sign-in">
                <div className="container-login">
                    <Login click={handleShowRegister}/>
                </div>
                <div className="container-sign-in">
                    <SignIn click={handleShowLogin}/>
                </div>
                <div className="container-img-budget">
                    <img className="img-budget" alt="budget" src="/img/presupuesto.png"/>
                </div>
            </div>
        </LoginPageStyled>
    );
}