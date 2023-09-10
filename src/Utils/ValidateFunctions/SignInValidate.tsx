export function SignInValidateName(name:string) {
    if (!name) {
        return 'El nombre del usuario es requrido';
    }
}
export function SignInValidatePhone(phone:string) {
    if (!phone) {
        return 'Número de teléfono es requerido';
    }
    const phoneNumber:number = parseInt(phone);
    console.log(phoneNumber);
    if (!/^\d+$/.test(phone)) {
        return 'Solo se aceptan números';
    }
    if (phone.length !== 10) {
        return 'El teléfono debe terner 10 numeros';
    }
    return true;
}
export function SignInValidateAddress(address:string) {
    if (!address) {
        return 'Dirección es requerida';
    }
}