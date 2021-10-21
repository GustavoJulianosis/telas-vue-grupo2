import { http } from "./config";

export default{
    listar:() => {
        return http.get('api/candidato/lista')
    },
    visualizar:(candidato) => {
        return http.get('api/candidato' + candidato.id, candidato)
    }
}