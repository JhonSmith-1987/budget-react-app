import {LoginPageStyled} from "./LoginPageStyled";
import Login from "../../Components/Login/Login";
import SignIn from "../../Components/SignIn/SignIn";
import {useEffect, useState} from "react";
import IsAuthenticated from "../../Components/IsAuthenticated/IsAuthenticated";
import {auth} from "../../Firebase/Firebase";
import {useAppDispatch, useAppSelector} from "../../Utils/HooksRedux";
import {getUserActive} from "../../Redux/Actions/UserActions";
import {useNavigate} from "react-router-dom";
import Loading from "../../Components/Loading/Loading";

export default function LoginPage(): JSX.Element {

    const isLoadingUserActive = useAppSelector((state) => state.userState.isLoadingUserActive);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [left, setLeft] = useState<string>('50%');
    const [borderRadius, setBorderRadius] = useState<string>('0 15px 15px 0');
    const [borderRadiusMobile, setBorderRadiusMobile] = useState<string>('0 0 15px 15px');


    function handleShowRegister() {
        setLeft('0');
        setBorderRadius('15px 0 0 15px');
        setBorderRadiusMobile('15px 15px 0 0');
    }

    function handleShowLogin() {
        setLeft('50%');
        setBorderRadius('0 15px 15px 0');
        setBorderRadiusMobile('0 0 15px 15px');
    }

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

    useEffect(() => {
        FunctionIsAuthenticated();
    }, []);

    return (
        <LoginPageStyled left={left} border_radius={borderRadius} border_radius_mobile={borderRadiusMobile}>
            {isLoadingUserActive &&
                <Loading />
            }
            {!isLoadingUserActive &&
                <div className="container-login-sign-in">
                    <div className="container-login">
                        <Login click={handleShowRegister}/>
                    </div>
                    <div className="container-sign-in">
                        <SignIn click={handleShowLogin}/>
                    </div>
                    <div className="container-img-budget">
                        <img className="img-budget" alt="img-budget" src="/img/img-budget.jpg"/>
                    </div>
                </div>
            }
        </LoginPageStyled>
    );
}