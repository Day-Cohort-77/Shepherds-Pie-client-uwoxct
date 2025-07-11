export const getPizzaSizes = () => {
    return fetch (`http://localhost:8088/pizzaSize`).then(res => res.json());
}
export const getCheeses = () => {
    return fetch (`http://localhost:8088/cheese`).then(res => res.json());
}
export const getSauces = () => {
    return fetch (`http://localhost:8088/sauce`).then(res => res.json());
}
export const getToppings = () => {
    return fetch (`http://localhost:8088/toppings`).then(res => res.json());
}