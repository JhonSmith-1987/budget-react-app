import {SignInFormModel} from "../../Models/SignInFormModel";
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import {
    LOGIN, LOGIN_FAILED, LOGIN_SUCCESS,
    USER_ACTIVE, USER_ACTIVE_FAILED,
    USER_ACTIVE_SUCCESS,
    USER_REGISTER,
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS
} from "../Types/UserTypes";
import {auth, db} from "../../Firebase/Firebase";
import {doc, getDoc, setDoc} from "firebase/firestore";
import {UserActiveModel} from "../../Models/UserActiveModel";
import {setLocalStorage} from "../../Utils/Functions/FunctionsLocalStorage";
import {LoginFormModel} from "../../Models/LoginFormModel";

export const signIn = (data:SignInFormModel) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
   dispatch({
       type: USER_REGISTER,
       payload: true
   });
    await createUserWithEmailAndPassword(auth, data.email, data.password).then((res) => {
        console.log(res);
        const userId = res.user.uid;
        const userData = {
            'name': data.name,
            'phone': data.phone,
            'address': data.address,
            'email': data.email,
        };
        setDoc(doc(db, "users", userId), userData);
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: 'Usuario creado con exito'
        });
    }).catch((err) => {
        console.log(err);
        dispatch({
            type: USER_REGISTER_FAILED,
            payload: 'Hubo un error revisar...'
        });
    });
}
export const postLogin = (data:LoginFormModel) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: LOGIN,
        payload: true
    });
    await signInWithEmailAndPassword(auth, data.email, data.password).then((res) => {
        getUserActive(res.user.uid)
        dispatch({
            type: LOGIN_SUCCESS,
            payload: false
        });
    }).catch((err) => {
        console.log(err);
        console.log(typeof err);
        dispatch({
            type: LOGIN_FAILED,
            payload: err
        });
        alert(err);
        if (err === 'FirebaseError: Firebase: Error (auth/user-not-found).') {
            alert('Usuario no existe...')
        }
    });
}
export const getUserActive = (userId:string) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    dispatch({
        type: USER_ACTIVE,
        payload: true
    });
    const userActiveRef = doc(db, "users", userId);
    await getDoc(userActiveRef).then((docSnapshot) => {
        if (docSnapshot.exists()) {
            console.log('si hay usuario activo jajajajaja.......');
            const userActive:UserActiveModel = {
                'id': docSnapshot.id,
                'name': docSnapshot.data().name,
                'email': docSnapshot.data().email,
                'phone': docSnapshot.data().phone,
                'address': docSnapshot.data().address,
            }
            console.log(userActive);
            setLocalStorage(userActive);
            dispatch({
                type: USER_ACTIVE_SUCCESS,
                payload: userActive
            });
        }else {
            console.log('No hay usuario activo jajajajajaja.........');
            dispatch({
                type: USER_ACTIVE_FAILED,
                payload: 'No hay usuario activo'
            });
        }
    });
}