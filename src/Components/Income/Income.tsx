import {IsAuthenticatedStyled} from "./IsAuthenticatedStyled";
import {ReactNode, useEffect} from "react";
import {auth} from "../../Firebase/Firebase";
import {useAppDispatch} from "../../Utils/HooksRedux";
import {getUserActive} from "../../Redux/Actions/UserActions";

interface ILoginProps {
    children: ReactNode
}

export default function IsAuthenticated({
                                            children,
                                        }: ILoginProps): JSX.Element {

    const dispatch = useAppDispatch();


    const unsubscribe = auth.onAuthStateChanged((user) => {
        console.log(unsubscribe);
        if (user) {
            const userId = user.uid;
            dispatch(getUserActive(userId)).then(r => {
                //
            });
        }
    });
    
    useEffect(() => {
        unsubscribe();
    }, [unsubscribe]);

    return (
        <IsAuthenticatedStyled>
            {children}
        </IsAuthenticatedStyled>
    );
}