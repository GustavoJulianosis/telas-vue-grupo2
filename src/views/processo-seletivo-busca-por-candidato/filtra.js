var aviso = document.querySelector(".aviso")
aviso.classList.add("invisivel")

var campoFiltro = document.querySelector("#filtrar-tabela");

campoFiltro.addEventListener('input', function () {

    // Lista que armazena os valores a cada iteração realizada na tabela
    listaDeValores = [];

    console.log(campoFiltro.value);
    var processos = document.querySelectorAll('.processo');

    if (campoFiltro.value.length >= 0) {
        for (var i = 0; i < processos.length; i++) {
            var processo = processos[i];
            var tdNome = processo.querySelector(".info-nome");
            var nome = tdNome.textContent;

            // Expressão regular que verifica a filtragem da lista
            var expressao = new RegExp(campoFiltro.value, 'i');

            if (!expressao.test(nome)) {
                processo.classList.add('invisivel');
                aviso.classList.remove("invisivel");

            } else {
                processo.classList.remove('invisivel');
                aviso.classList.add("invisivel");

                listaDeValores.push(i);
            }

            console.log(listaDeValores);

            if (!listaDeValores.length == 0) {
                aviso.classList.add("invisivel");
            } else {
                aviso.classList.remove("invisivel");
            }

        }
    } else {
        for (var i = 0; i < processos.length; i++) {
            var processo = processos[i];
            processo.classList.remove("invisivel");
            aviso.classList.remove("invisivel")
        }
    }
});



