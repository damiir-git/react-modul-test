function addLeadingZero(value) {
    return `${String(value).length < 2 ? '0' : ''}${value}`;
}

function dateFormat(value) {
    if (value) {
        let date = new Date(value);
        const dd = addLeadingZero(date.getDate());
        const mm = addLeadingZero(date.getMonth()+1);
        const yyyy = date.getFullYear();
        return `${dd}.${mm}.${yyyy}`;
    }
    return '';
}

function getYesNo(value) {
    return value ? 'Да' : 'Нет'
}

export {
    addLeadingZero,
    dateFormat,
    getYesNo
}