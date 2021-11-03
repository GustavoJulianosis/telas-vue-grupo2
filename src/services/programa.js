import { http } from "./config";

export default {
    busca:() => {
        return http.get('/programa')
    },
    dados:(programa) => {
        return http.get('/programa/busca/' + programa.id)
    }
}