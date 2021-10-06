function onLoad(){

    var app = new Vue({
        el: '#candidato',
        data: {
            candidato: {
                "id": 1,
                "nome": "Gustavo de Oliveira Juliano",
                "contato":"(14)99706-2197",
                "fonteRecrutamento":"Palestra via Faculdade",
                "dataAgendamento":"31/10/2021",
                "curso":"Análise e Desenvolvimento de Sistemas",
                "status":"REPROVADO_1_FASE",
                "provaPratica":"10/10",
                "disc":"D:10 I:10 S:10 C:10",
                "observacoes":"Observações feitas através do Vue"
            }
        }
    })

}