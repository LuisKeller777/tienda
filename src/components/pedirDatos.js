import {stock} from "./stock"
export const pedirDatos=() =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(stock)
        }, 2000)
    })
}