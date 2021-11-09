<template>
  <Header />
  <div class="container">
    <div class="row g-2 g-lg-3">
      <div class="col-xl-4">
        <div>
          <a class="btn mt-4" id="botaoFolha" role="button">FOLHA</a>
          <a
            class="btn mt-4"
            id="botaoInstrutor"
            href="/investimento-instrutor/App.vue"
            role="button"
            >INSTRUTOR</a
          >
        </div>
      </div>
      <div class="col-xl-8">
        <form class="formulario row g-3">
        <div class="formacoes col-md-3">
          <select class="filtro-programa form-select mt-4" id="validationDefault04" required>
            <option selected disabled value="">Formação</option>
            <option>Java</option>
            <option>Cobol</option>
            <option>.Net</option>
            <option>Mobile</option>
            <option>Mainframe</option>
            <option>Infraestrutura</option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="filtro-turma turmas form-select mt-4" id="validationDefault04" required>
            <option selected disabled value="">Turmas</option>
            <option>Turma I</option>
            <option>Turma II</option>
            <option>Turma III</option>
          </select>
        </div>
        <div class="col-md-3">
          <button class="botaoConfirmar btn btn-primary mt-4" type="button"  v-on:click="filtrarDados()">Pesquisar</button>
        </div>
      </form>
      </div>
    </div>
    <div class="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-stripped mt-4">
        <thead>
          <tr class="extremoAlto">
            <th>Nome</th>
            <th>Formação</th>
            <th>Turma</th>
            <th>07/2021</th>
            <th>08/2021</th>
            <th>09/2021</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr
            id="participante"
            v-for="participante in participantes"
            v-bind:key="participante"
          >
            <td id="info-nome">{{ participante.nomeParticipante }}</td>
            <td id="info-programa">{{ participante.nomeFormacao }}</td>
            <td id="info-turma">{{ participante.nomeTurma }}</td>
            <td id="info-salario">R$ {{ participante.bolsaAux }}</td>
            <td id="info-salario">R${{ participante.bolsaAux }}</td>
            <td id="info-salario">R${{ participante.bolsaAux }}</td>
          </tr>
          <tr class="extremoBaixo">
            <th class="ultima" scope="rows">TOTAL</th>
            <td class="ultima"></td>
            <td class="ultima"></td>
            <td class="ultima"></td>
            <td class="ultima"></td>
            <td class="ultima"></td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="col-xl-12">
      <div class="aviso">
        <h4 class="titulo fw-bold">
          Não foi encontrado nenhum resultado com os parâmetros informados
        </h4>
        <button
          class="recarregar mt-3 form-control"
          onclick="window.location.reload()"
        >
          RECARREGAR LISTA
        </button>
      </div>
    </div>
    <div class="container overflow-hidden botoes">
      <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
        <div class="botõesfinais col-xl-5">
          <div>
            <button id="botaoSalarioPadrao" type="button" class="btn-lg">
              ADICIONAR SALÁRIO PADRÃO
            </button>
          </div>
        </div>
        <div class="col-xl-2"></div>
        <div class="botõesfinais col-xl-5">
          <div
            onclick="acao()"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <button id="botaoAdicionarManualmente" type="button" class="btn-lg">
              ADICIONAR MANUALMENTE
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-xl modal-dialog modal-dialog-centered">
      <div class="modal-content" id="modalinteiro">
        <div class="g-2 g-lg-3 modal-header">
          <h5 class="col-xl-11 modal-title" id="exampleModalLabel">
            Adicionar investimento Folha
          </h5>
          <button
            type="button"
            class="col-xl-1 btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="container-fluid ms-2">
          <div class="modalBody" id="fontModal">
            <label id="modalconteudo">Nome</label>
            <div class="input-group input-group-lg">
              <input
                type="text"
                class="form-control"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
            <label id="modalconteudo">Mês e ano</label>
            <div class="input-group input-group-lg">
              <input
                type="text"
                class="form-control"
                placeholder="MM/YY"
                aria-label="Sizing example input"
                aria-describedby="inputGroup-sizing-lg"
              />
            </div>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div class="modalitens col-xl-6">
                <label id="modalconteudo">Remuneração</label>
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="R$"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
              <div class="modalitens col-xl-6">
                <label id="modalconteudo">Encargos</label>
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="R$"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
            </div>
            <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
              <div class="modalitens col-xl-6">
                <label id="modalconteudo">Benefícios</label>
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="R$"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
              <div class="modalitens col-xl-6">
                <label id="modalconteudo">Total</label>
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="R$"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
              <div class="conteudodescrição col-xl-12">
                <label class="" id="modalconteudo"
                  >Descrição do investimento</label
                >
                <div class="input-group input-group-lg">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Salário Padrão"
                    aria-label="Sizing example input"
                    aria-describedby="inputGroup-sizing-lg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3 modal-footer">
            <div class="row-xl-5">
              <button
                id="confirmar"
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                CONFIRMAR
              </button>
            </div>
            <div class="col-xl-5"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      participantes: [],
      programaProcurado: '',
      turmaProcurada: ''
    };
  },
  methods: {

    filtrarDados() {
      this.programaProcurado = document.querySelector(".filtro-programa").value;
      this.turmaProcurada = document.querySelector(".filtro-turma").value;
      axios.get("http://localhost:8080/investimento-folha/" + this.programaProcurado + "/" + this.turmaProcurada)
      .then(response => this.participantes = response.data)  //Apenas o conteúdo
      },
  },
};
</script>

<style>
body {
  background: #ebebeb;
}

[id^="info-"] {
  font-weight: 500; /*Seleciona todos os ID's que começam com "info-", ou o nome que você preferir*/
}

.tela {
  background-color: #ebebeb;
}

#botaoFolha {
  background: #ab0045;
  font-weight: bold;
  width: 180px;
  color: #ffffff;
}

#botaoInstrutor {
  background: #ffb600;
  font-weight: bold;
  width: 180px;
  margin-left: 10px;
  color: #ffffff;
}

#botaoSalarioPadrao {
  background: #ab0045;
  font-weight: bold;
  color: #ffffff;
  margin-left: 0%;
  border: none;
}

#botaoAdicionarManualmente {
  background: #ffb700;
  font-weight: bold;
  color: #ffffff;
  margin-left: 120px;
  border: none;
}

.formacao,
.turma {
  margin-top: 22px;
}


.botaoConfirmar {
  margin-left: 30px;
  background: #090B2E;
  color: white;
}


#filtro-nome {
  height: 38px;
}

#botaoSelecionar {
  height: 38px;
  width: 60px;
  border: none;
}

#lupa {
  width: 100%;
}

.ultima {
  background: #63657a !important;
  color: #ffffff;
  text-align: left;
}

#tabela {
  margin-top: 30px;
}

#info-nome,
#info-turma,
#info-programa,
#info-salario {
  text-align: left;
}

#modalinteiro {
  background-color: #ebebeb;
}

.my-custom-scrollbar {
  position: relative;
  height: 59vh;
  overflow: auto;
}

.table-wrapper-scroll-y {
  display: block;
  height: 59vh;
}

.botao {
  padding-bottom: 2%;
}

.botoes {
  margin-top: 100px;
}

#formação {
  width: 180px;
  margin-right: 23px;
  margin-bottom: 50px;
  margin-left: 0px;
}

.invisivel {
  display: none;
}

#botaoSelecionar:hover {
  background-color: steelblue;
}

.aviso {
  display: none;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  position: relative;
  margin-bottom: 400px;
}

.recarregar {
  background-color: #090b2e !important;
  max-width: 50%;
  height: 40px;
  cursor: pointer !important;
  transition: all linear 0.3s !important;
  color: #ffffff;
}

.recarregar:hover {
  background-color: #141863 !important;
}

#investimentoFolha {
  width: 100%;
}

#modalconteudo {
  font-family: Montserrat;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: center;
  margin-bottom: 12px;
  margin-top: 12px;
}

.conteudodescrição {
  margin-bottom: 40px;
}

#exampleModalLabel {
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: 0em;
  font-weight: bold;
  text-align: center;
}

#confirmar {
  background: #ab0045;
  font-weight: bold;
  margin-top: 12px;
  width: 100%;
  border: none;
}

@media (max-width: 1400px) {
  #botaoFolha {
    width: 100%;
  }
  #botaoInstrutor {
    width: 100%;
    margin-left: 0px;
    margin-top: 10px;
  }

  #formação,
  #turmas {
    width: auto;
  }

  #botaoSalarioPadrao {
    width: max-content;
  }

  #botaoAdicionarManualmente {
    width: max-content;
    margin-left: 0px;
  }
}

@media (max-width: 1200px) {
  .modalitens,
  .botõesfinais {
    width: auto;
  }
  .conteudodescrição {
    width: 100%;
  }
}
</style>
