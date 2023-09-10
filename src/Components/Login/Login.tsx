import {LoginStyled} from "./LoginStyled";
import {useForm} from "react-hook-form";
import {signInWithEmailAndPassword} from "firebase/auth";
import {LoginFormModel} from "../../Models/LoginFormModel";
import {auth} from "../../Firebase/Firebase";
import {useAppDispatch} from "../../Utils/HooksRedux";
import {getUserActive, postLogin} from "../../Redux/Actions/UserActions";
import {LoginValidateEmail, LoginValidatePassword} from "../../Utils/ValidateFunctions/LoginValidate";
import {useState} from "react";

interface ILoginProps {
    click: () => void;
}

export default function Login({
                                  click,
                              }: ILoginProps): JSX.Element {

    const dispatch = useAppDispatch();
    const {register, reset, handleSubmit, formState: {errors}} = useForm<LoginFormModel>();
    const [isLoadingLogin, setIsLoadingLogin] = useState<boolean>(false);
    const [messageError, setMessageError] = useState<string>('');

    const onSubmitLogin = (data: LoginFormModel) => handleLogin(data);

    async function handleLogin(data: LoginFormModel) {
        console.log(data);
        setIsLoadingLogin(true);
        await signInWithEmailAndPassword(auth, data.email, data.password).then((res) => {
            dispatch(getUserActive(res.user.uid)).then(r => {
                setIsLoadingLogin(false);
                reset();
            });
        }).catch((err) => {
            console.log(err);
            if (err.code === "auth/user-not-found") {
                setMessageError("El correo electrónico no se encuentra registrado.");
                setIsLoadingLogin(false);
            }
            if (err.code === 'auth/wrong-password') {
                setMessageError("La contraseña es incorrecta.");
                setIsLoadingLogin(false);
            }
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
                        {...register('email', {
                            validate: LoginValidateEmail
                        })}
                        aria-invalid={errors.email ? "true" : "false"}
                    />
                    {errors.email?.type === 'validate' &&
                        <span className="errors" role="alert">{errors.email?.message}</span>
                    }
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
                        {...register('password', {
                            validate: LoginValidatePassword
                        })}
                        aria-invalid={errors.password ? "true" : "false"}
                    />
                    {errors.password?.type === 'validate' &&
                        <span className="errors" role="alert">{errors.password?.message}</span>
                    }
                </div>
                {!isLoadingLogin &&
                    <button className="button-login" type={"submit"}>Iniciar sesión</button>
                }
                {isLoadingLogin &&
                    <button className="button-login" type={"submit"}>Cargando...</button>
                }
            </form>
            <span onClick={click} className="go-sign-in">No tienes usuario? has click aqui y regístrate</span>
            <span className="errorLogin">{messageError}</span>
        </LoginStyled>
    );
}