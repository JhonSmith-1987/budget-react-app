import {LoginStyled} from "./LoginStyled";
import {useForm} from "react-hook-form";
import { signInWithEmailAndPassword } from "firebase/auth";
import {LoginFormModel} from "../../Models/LoginFormModel";
import {auth} from "../../Firebase/Firebase";
import {useAppDispatch} from "../../Utils/HooksRedux";
import {getUserActive} from "../../Redux/Actions/UserActions";

interface ILoginProps {
    click: () => void;
}

export default function Login({
                                  click,
                              }: ILoginProps): JSX.Element {

    const dispatch = useAppDispatch();
    const {register, reset, handleSubmit, formState: {errors}} = useForm<LoginFormModel>();

    const onSubmitLogin = (data:LoginFormModel) => handleLogin(data);

    async function handleLogin(data: LoginFormModel) {
        console.log(data);
        await signInWithEmailAndPassword(auth, data.email, data.password).then((res) => {
            dispatch(getUserActive(res.user.uid)).then(r => {
                reset();
            });
        });
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