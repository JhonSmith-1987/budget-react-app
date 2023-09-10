import {LoginStyled} from "./LoginStyled";
import {useForm} from "react-hook-form";
import {LoginFormModel} from "../../Models/LoginFormModel";

interface ILoginProps {
    click: () => void;
}

export default function Login({
                                  click,
                              }: ILoginProps): JSX.Element {

    const {register, reset, handleSubmit, formState: {errors}} = useForm<LoginFormModel>();

    const onSubmitLogin = (data:LoginFormModel) => handleLogin(data);

    function handleLogin(data: LoginFormModel) {
        console.log(data);
    }

    return (
        <LoginStyled>
            <h1 className="title-log-in">Ingresa tus datos</h1>
            <form className="container-form-login" onSubmit={handleSubmit(onSubmitLogin)}>
                <div className="container-input">
                    <label
                        htmlFor="email"
                    >
                        Correo electrónico
                    </label>
                    <input
                        id="email"
                        type="email"
                        placeholder="Ingresa tu correo electrónico"
                        {...register('email')}
                    />
                </div>
                <div className="container-input">
                    <label
                        htmlFor="password"
                    >
                        Contraseña
                    </label>
                    <input
                        id="password"
                        type="password"
                        placeholder="Ingresa tu contraseña"
                        {...register('password')}
                    />
                </div>
                <button className="button-login" type={"submit"}>Iniciar sesión</button>
            </form>
            <span onClick={click} className="go-sign-in">No tienes usuario? has click aqui y regístrate</span>
        </LoginStyled>
    );
}