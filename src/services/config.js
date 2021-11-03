// Arquivo que realiza a chamada do Axios para conexão com o Spring (Back-End)

import axios from "axios";

export const http = axios.create({
    baseURL: 'http://localhost:8080/api'
})