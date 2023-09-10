import {SignInStyled} from "./SignInStyled";
import {useForm} from "react-hook-form";
import {SignInFormModel} from "../../Models/SignInFormModel";
import {useAppDispatch, useAppSelector} from "../../Utils/HooksRedux";
import {signIn} from "../../Redux/Actions/UserActions";
import {SweetAlertSuccess} from "../../Utils/SweetAlert/SweetAlertSuccess";
import {SweetAlertError} from "../../Utils/SweetAlert/SweetAlertError";
import {
    SignInValidateAddress,
    SignInValidateName,
    SignInValidatePhone
} from "../../Utils/ValidateFunctions/SignInValidate";
import {LoginValidateEmail, LoginValidatePassword} from "../../Utils/ValidateFunctions/LoginValidate";
import {useState} from "react";

interface ISignInProps {
    click: () => void;
}

export default function SignIn({
                                   click,
                               }: ISignInProps): JSX.Element {

    const {register, watch, reset, handleSubmit, formState: {errors}} = useForm<SignInFormModel>()
    const dispatch = useAppDispatch();
    const isLoadingSignIn = useAppSelector((state) => state.userState.isLoadingSignIn);
    const messages = useAppSelector((state) => state.userState.messages);
    const err = useAppSelector((state) => state.userState.errors);
    const [messageErr, setMessageErr] = useState<string>('');
    const passwordForm = watch('password', '');
    const passwordConfirmForm = watch('passwordConfirm', '');

    function handleSignIn(data: SignInFormModel) {
        console.log(data);
        if (passwordForm !== passwordConfirmForm) {
            setMessageErr('Las contraseñas no coinsiden');
        } else {
            dispatch(signIn(data)).then(r => {
                if (messages !== '') {
                    SweetAlertSuccess(messages);
                }
                if (err !== '') {
                    SweetAlertError(err);
                }
                click();
                reset();
            });
        }
    }

    const onSubmitSignIn = (data:SignInFormModel) => handleSignIn(data);

    return (
        <SignInStyled>
            <h1 className="title-log-in">Regístrate</h1>
            <form className="container-form-login" onSubmit={handleSubmit(onSubmitSignIn)}>
                <div className="container-row">
                    <div className="container-input">
                        <label
                            htmlFor="name"
                        >
                            Nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Ingresa tu nombre"
                            {...register('name', {
                                validate: SignInValidateName
                            })}
                            aria-invalid={errors.name ? "true" : "false"}
                        />
                        {errors.name?.type === 'validate' &&
                            <span className="errors" role="alert">{errors.name?.message}</span>
                        }
                    </div>
                    <div className="container-input">
                        <label
                            htmlFor="phone"
                        >
                            Teléfono
                        </label>
                        <input
                            id="phone"
                            type="text"
                            placeholder="Ingresa tu número de telefono"
                            maxLength={10}
                            {...register('phone', {
                                validate: SignInValidatePhone
                            })}
                            aria-invalid={errors.phone ? "true" : "false"}
                        />
                        {errors.phone?.type === 'validate' &&
                            <span className="errors" role="alert">{errors.phone?.message}</span>
                        }
                    </div>
                </div>
                <div className="container-input">
                    <label
                        htmlFor="address"
                    >
                        Dirección
                    </label>
                    <input
                        id="address"
                        type="text"
                        placeholder="Ingresa tu dirección de domicilio"
                        {...register('address', {
                            validate: SignInValidateAddress
                        })}
                        aria-invalid={errors.address ? "true" : "false"}
                    />
                    {errors.address?.type === 'validate' &&
                        <span className="errors" role="alert">{errors.address?.message}</span>
                    }
                </div>
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
                <div className="container-row">
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
                    <div className="container-input">
                        <label
                            htmlFor="password_repeat"
                        >
                            Repitir contraseña
                        </label>
                        <input
                            id="password_repeat"
                            type="password"
                            placeholder="Ingresa de nuevo tu contraseña"
                            {...register('passwordConfirm', {
                                validate: LoginValidatePassword
                            })}
                            aria-invalid={errors.passwordConfirm ? "true" : "false"}
                        />
                        {errors.passwordConfirm?.type === 'validate' &&
                            <span className="errors" role="alert">{errors.passwordConfirm?.message}</span>
                        }
                    </div>
                </div>
                <button
                    type={"submit"}
                    className="button-sign-in"
                    disabled={isLoadingSignIn}
                >
                    {!isLoadingSignIn ? 'Registrarse' : 'Cargando...'}
                </button>
            </form>
            <span onClick={click} className="return-log-in">Volver</span>
            <span className="error-sign-in">{messageErr}</span>
        </SignInStyled>
    );
}