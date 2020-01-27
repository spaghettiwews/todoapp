export const saveToLocal = function (name, value) {
    if (localStorage) {
        localStorage.setItem(name, JSON.stringify(value));
    }
}

export const getFromLocal = function (name) {
    if (localStorage) {
        return JSON.parse(localStorage.getItem(name));
    }
    else {
        return [];
    }
}