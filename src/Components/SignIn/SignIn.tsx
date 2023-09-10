import {LoginStyled} from "./LoginStyled";

export default function Login():JSX.Element {


    return (
        <LoginStyled>
            <h1 className="title-log-in">Ingresa tus datos</h1>
            <form className="container-form-login">
                <div className="container-input">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="Ingresa tu correo electrónico"/>
                </div>
                <div className="container-input">
                    <label htmlFor="password">Password</label>
                    <input id="password" type="password" placeholder="Ingresa tu contraseña"/>
                </div>
                <button>Iniciar sesión</button>
            </form>
        </LoginStyled>
    );
}