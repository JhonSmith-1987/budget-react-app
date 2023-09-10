import {UserActiveModel} from "../../Models/UserActiveModel";

export function setLocalStorage(userActive:UserActiveModel) {
    const data:string = JSON.stringify(userActive);
    localStorage.setItem('userActive', data);
}