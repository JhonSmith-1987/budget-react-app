import {
    USER_ACTIVE, USER_ACTIVE_FAILED,
    USER_ACTIVE_SUCCESS,
    USER_REGISTER,
    USER_REGISTER_FAILED,
    USER_REGISTER_SUCCESS
} from "../Types/UserTypes";
import {UserActiveModel} from "../../Models/UserActiveModel";

interface IStateUser {
    isLoadingSignIn:boolean;
    isLoadingUserActive:boolean;
    userActive:UserActiveModel | null;
    messages:string;
    errors:string;
}
const initialStateUser: IStateUser = {
    isLoadingSignIn: false,
    isLoadingUserActive: false,
    userActive: null,
    messages: '',
    errors: '',
}
const UserReducer = function (state = initialStateUser, action: {type:any; payload:any}):IStateUser {
    switch (action.type) {
        case USER_REGISTER:
            return {
                isLoadingSignIn: action.payload,
                isLoadingUserActive: state.isLoadingUserActive,
                userActive: state.userActive,
                messages: state.messages,
                errors: state.errors
            };
        case USER_REGISTER_SUCCESS:
            return {
                isLoadingSignIn: false,
                isLoadingUserActive: state.isLoadingUserActive,
                userActive: state.userActive,
                messages: action.payload,
                errors: state.errors
            };
        case USER_REGISTER_FAILED:
            return {
                isLoadingSignIn: false,
                isLoadingUserActive: state.isLoadingUserActive,
                userActive: state.userActive,
                messages: state.messages,
                errors: action.payload
            };
        case USER_ACTIVE:
            return {
                isLoadingSignIn: state.isLoadingSignIn,
                isLoadingUserActive: action.payload,
                userActive: state.userActive,
                messages: state.messages,
                errors: state.errors,
            };
        case USER_ACTIVE_SUCCESS:
            return {
                isLoadingSignIn: state.isLoadingSignIn,
                isLoadingUserActive: false,
                userActive: action.payload,
                messages: state.messages,
                errors: state.errors,
            };
        case USER_ACTIVE_FAILED:
            return {
                isLoadingSignIn: state.isLoadingSignIn,
                isLoadingUserActive: false,
                userActive: state.userActive,
                messages: state.messages,
                errors: action.payload,
            };
        default:
            return state;
    }
}
export default UserReducer;