export function functionCurrentDate() {
    const date = new Date();
    const dd = date.getDate().toString().padStart(2, '0');
    const mm = (date.getMonth() + 1).toString().padStart(2, '0');
    const yyyy = date.getFullYear().toString();
    return `${dd}/${mm}/${yyyy}`;
}