<template>
  <Header />
  <div class="container">
    <div class="row row-cols-2 row-cols-lg-5 g-2 g-lg-3">
      <div class="col-xl-4">
        <div>
          <a
            class="btn mt-4"
            id="botaoFolha"
            href="/investimento-folha"
            role="button"
            >FOLHA</a
          >
          <a class="btn mt-4" id="botaoInstrutor" role="button">INSTRUTOR</a>
        </div>
      </div>
      <div class="col-xl-8">
        <form class="formulario row g-3">
          <div class="formacoes col-md-3">
            <select
              class="filtro-programa form-select mt-4"
              id="validationDefault04"
              required
            >
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
            <select
              class="filtro-turma turmas form-select mt-4"
              id="validationDefault04"
              required
            >
              <option selected disabled value="">Turmas</option>
              <option>Turma I</option>
              <option>Turma II</option>
              <option>Turma III</option>
            </select>
          </div>
          <div class="col-md-3">
            <button
              class="botaoConfirmar btn btn-primary mt-4"
              type="button"
              v-on:click="filtrarDados(), mudaVisibilidade()"
            >
              Pesquisar
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="table-wrapper-scroll-y my-custom-scrollbar">
      <table class="table table-stripped mt-4">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Formação</th>
            <th>Turma</th>
            <th>R$ mês atual</th>
            <th>R$ mês anterior</th>
            <th>Data fim programa</th>
          </tr>
        </thead>
        <tbody align="center">
          <tr
            id="instrutores"
            v-for="instrutor in instrutores"
            v-bind:key="instrutor"
          >
            <td id="info-nome">asd</td>
            <td id="info-programa">asd</td>
            <td id="info-turma">sad</td>
            <td>asd</td>
            <td>asd</td>
            <td>asd</td>
          </tr>
        </tbody>
        <tfoot class="extremo">
          <tr>
            <th scope="row">TOTAL</th>
            <td></td>
          </tr>
        </tfoot>
      </table>
      <div class="mensagem col-xl-12">Por favor, filtre os campos Formação e Turma para continuar</div>
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
                <label id="modalconteudo">Valor Hora</label>
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
                <label id="modalconteudo">Horas trabalhadas</label>
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
              <div class="modalitens col-xl-12">
                <label id="modalconteudo">Valor Total</label>
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
import { http } from "../../services/Config";
import funcoes from "../../services/Funcoes";

export default {
  name: "App",
  components: {
    Header,
  },
  data() {
    return {
      instrutores: [],
      salarios: [],
    };
  },

  methods: {
    filtrarDados() {
      this.programaProcurado = document.querySelector(".filtro-programa").value;
      this.turmaProcurada = document.querySelector(".filtro-turma").value;
      http
        .get(
          "instrutor/buscar-instrutor/" +
            this.programaProcurado +
            "/" +
            this.turmaProcurada
        )
        .then((response) => (this.instrutores = response.data)); //Apenas o nome, formação e turma
    },

    mostrarSalario() {
      this.programaProcurado = document.querySelector(".filtro-programa").value;
      this.turmaProcurada = document.querySelector(".filtro-turma").value;
      http
        .get(
          "instrutor/buscar-salario/" +
            this.programaProcurado +
            "/" +
            this.turmaProcurada
        )
        .then((response) => (this.salarios = response.data)); //Apenas o salario
    },

    mudaVisibilidade(){
        let mensagem = document.querySelector(".mensagem");
        let extremo = document.querySelector(".extremo");
        
        mensagem.style.display = "none";
        extremo.style.display = "flex";
      }
  },
};
</script>

<style>
body {
  background: #ebebeb;
}

.tela {
  background-color: #ebebeb;
}

[id^="info-"] {
  font-weight: 500; /*Seleciona todos os ID's que começam com "info-", ou o nome que você preferir*/
}

#imagem {
  width: 100%;
}

#botaoFolha {
  background: #ffb600;
  font-weight: bold;
  width: 180px;
  color: #ffffff;
}

#botaoInstrutor {
  background: #ab0045;
  font-weight: bold;
  width: 180px;
  margin-left: 30px;
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

#filtro-nome {
  height: 38px;
}

.table {
  width: 95%;
}

#botaoSelecionar {
  height: 38px;
  width: 60px;
  border: none;
}

.extremo {
  display: none;
}

.botaoConfirmar {
  background: #090b2e;
  color: white;
  margin-left: 40px;
  width: 160px;
}

.mensagem {
  margin-top: 120px;
  color: #090B2E;
  font-size: x-large;
  font-weight: bold;
  text-align: center;
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

.scrollbar-primary {
  scrollbar-color: #f5f5f5;
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

.turmas {
  margin-left: 15px;
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
