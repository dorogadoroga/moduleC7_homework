export function revertString(str) {
    if(typeof str === 'string') {
        let strArr = Array.from(str);
        strArr.reverse();
        return strArr.join('');
    } 
    return "Неверный тип аргумента";
};
