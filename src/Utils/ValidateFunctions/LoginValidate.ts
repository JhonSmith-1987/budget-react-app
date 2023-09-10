export function LoginValidateEmail(value:string) {
    if (!value) {
        return 'Tu correo electrónico es requerido';
    }
}
export function LoginValidatePassword(value:string) {
    if (!value) {
        return 'Ingresa tu contraseña, es requerida';
    }
    if (value.length < 6) {
        return 'La contraseña debe tener al menos 6 caracteres';
    }
}