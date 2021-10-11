function onLoad() {
    var app = new Vue({
        el: '.processosSeletivos',
        data: {
            processosSeletivos: [

                {
                    "id": 1,
                    "processo": "Marco Aguiar",
                    "status":"Aprovado"
                },
                {
                    "id": 2,
                    "processo": "Gustavo Rosa",
                    "status":"Stand-by"
                },
                {
                    "id": 3,
                    "processo": "Gustavo Juliano",
                    "status":"Sem status"
                },
                {
                    "id": 4,
                    "processo": "Diego Battiston",
                    "status":"Reprovado"
                },
                {
                    "id": 5,
                    "processo": "Francisco Aguiar",
                    "status":"Aprovado"
                },
                {
                    "id": 6,
                    "processo": "Mateus Rosa",
                    "status":"Stand-by"
                },
                {
                    "id": 7,
                    "processo": "Edivaldo Juliano",
                    "status":"Aprovado"
                },
            
            ]
        }
    });
}