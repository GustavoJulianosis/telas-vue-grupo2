<template>
  <Header />
  <main id="candidato">
    <div class="container container-fluid">
      <div class="row justify-content-evenly">
        <div class="col-xl-4">
          <h1 class="dadosCandidato mt-4 mb-4">Dados do Candidato:</h1>
        </div>
        <div class="col-xl-4"></div>
      </div>
      <div class="row justify-content-evenly">
        <div class="col-md-4">
          <div class="mb-3">
            <label class="label-form" for="Nome">Nome</label>
            <input
              type="text"
              class="form-control"
              id="inputNome"
              placeholder="Nome"
              v-bind:value="candidato.nome"
            />
          </div>

          <div class="mb-3">
            <label class="label-form" for="tel">Contato</label>
            <input
              type="tel"
              class="form-control"
              id="inputContato"
              placeholder="(xx) xxxxx-xxxx"
              v-bind:value="candidato.contato"
            />
          </div>

          <div class="mb-3">
            <label class="label-form" for="fonte">Fonte de recrutamento</label>
            <input
              type="text"
              class="form-control"
              id="inputFonteDeRecrutamento"
              placeholder="Fonte de recrutamento"
              v-bind:value="candidato.fonteDeRecrutamento"
            />
          </div>

          <div class="mb-3">
            <label class="label-form" for="data">Data agendamento</label>
            <input
              type="date"
              class="form-control"
              id="inputDataAgendamento"
              placeholder="2021/02/15"
              v-bind:value="candidato.dataAgendamento"
            />
          </div>

          <div class="mb-3">
            <label class="label-form" for="curso">Curso</label>
            <input
              type="text"
              class="form-control"
              id="inputCurso"
              placeholder="Curso"
              v-bind:value="candidato.curso"
            />
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <label class="label-form" for="prova">Prova prática</label>
            <input
              type="text"
              class="form-control"
              disabled="disabled"
              id="inputProvaPratica"
              placeholder="Prova prática"
              v-bind:value="candidato.provaPratica"
            />
          </div>

          <div class="mb-3">
            <label class="label-form" for="disc">DISC</label>
            <input
              type="text"
              class="form-control"
              disabled="disabled"
              id="inputDisc"
              placeholder="DISC"
              v-bind:value="candidato.disc"
            />
          </div>

          <div class="mb-3">
            <label for="curriculoCandidato" class="form-label mb-0 titulo">Currículo candidato</label><br>
            <a href=""><img src="../../assets/imgs/file_upload_black_24dp.svg" class="download">curriculo.pdf</a>
          </div>

          <div class="mb-3">
            <label class="label-form" for="observacao">Observação</label>
            <textarea
              name="observacoes"
              class="form-control"
              id="inputObservacao"
              placeholder="Observações..."
              v-bind:value="candidato.observacao"
              rows="5"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row justify-content-evenly mt-4">
        <div class="col-md-4">
          <div class="mb-2">
            <div for="exampleModal" class="confirmar">
              <div
                type="button"
                @onclick="acao()"
                @click.prevent="enviarDados()"
                class="bt"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                <button type="button" class="btn-confirmar bt-footer largura">
                  CONFIRMAR
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="mb-3">
            <div class="botaoStatus">
              <button type="button" class="bt btn-status largura">
                STATUS
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modal -->

    <div
      class="modal"
      id="exampleModal"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-xl modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-body d-flex justify-content-between">
            <div>
              <h1 class="modal-title form-label fw-bold mb-0 titulo">
                Deseja confirmar a desativação?
              </h1>
            </div>
            <div class="conteudomodal">
              <div class="col-xl-5 mb-3">
                <h2 class="nome">Nome: {{ candidato.nome }}</h2>
                <h2 class="nome">Contato: {{ candidato.contato }}</h2>
                <h2 class="nome">
                  Candidato: {{ candidato.fonteRecrutamento }}
                </h2>
                <h2 class="nome">
                  Data Agendamento: {{ candidato.dataAgendamento }}
                </h2>
                <h2 class="nome">Curso: {{ candidato.curso }}</h2>
                <h2 class="nome">Currículo: {{ candidato.curriculo }}</h2>
                <h2 class="nome">Observação: {{ candidato.observacao }}</h2>
              </div>
              <div class="col-xl-2"></div>
              <div class="col-xl-5 mt-5"></div>
            </div>
          </div>
          <div class="modal-footer border-0 justify-content-around">
            <div>
              <button type="button" class="btn submit">CONFIRMAR</button>
            </div>
            <div>
              <button type="button" class="btn cancel" data-bs-dismiss="modal">
                CANCELAR
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import Header from "@/components/Header.vue";
export default {
  name: "App",
  components: {
    Header,
  },

  data() {
    return {
      candidato: {
        id: 1,
        nome: "",
        contato: "",
        fonteRecrutamento: "",
        dataAgendamento: "",
        curso: "",
        provaPratica: "",
        disc: "",
        observacao: "",
      },
    };
  },

  methods: {
    acao() {
      let modal = document.querySelector(".modal");
      let buttonClose = document.querySelector(".cancel");

      modal.style.display = "block";

      buttonClose.addEventListener("click", () => {
        modal.removeAttribute("style");
      });
    },
    enviarDados() {
      this.candidato.nome = document.querySelector('#inputNome').value;
      this.candidato.contato = document.querySelector('#inputContato').value
      this.candidato.fonteRecrutamento = document.querySelector('#inputFonteDeRecrutamento').value
      this.candidato.dataAgendamento = formataDataParaExibicao(document.querySelector('#inputDataAgendamento').value)
      this.candidato.curso = document.querySelector('#inputCurso').value
      this.candidato.provaPratica = document.querySelector('#inputProvaPratica').value
      this.candidato.disc = document.querySelector('#inputDisc').value
      this.candidato.observacao = document.querySelector('#inputObservacao').value
    },
  }
}
function formataDataParaExibicao (data) {
  const dataPreForm = new Date(data)
  const dataFormatada = `${dataPreForm.getUTCDate()}/${dataPreForm.getUTCMonth() + 1}/${dataPreForm.getUTCFullYear()}`
  return dataFormatada
}
</script>

<style>
/* Chamada root */
:root {
  /* Cores principais - Botões e telas */
  --color-background-screen: #ebebeb;
  --color-yellow-principal: #ffb700;
  --color-blue-principal: #090b2e;
  --color-magenta-principal: #ab0045;
  --color-background-form-input: #d3caca;

  /* Cores da barra de progresso da busca de vagas */
  --color-green-progress: #19b200;
  --color-yellow-progress: yellow;
  --color-red-progress: red;

  /* Cor base rodapé */
  --color-blue-footer: #00f;

  /* Cores de fonte */
  --color-gray-font: #737373;

  /* Cores default */
  --color-white-default: #ffffff;
  --color-black-default: #000000;
}

/* Restart da página*/
* {
  box-sizing: border-box;
  font-family: "Montserrat", sans-serif;
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: var(--color-blue-principal);
}

body {
  background-color: var(--color-background-screen) !important;
}

/* Tudo relacionado ao header */

.header {
  background-color: var(--color-blue-principal);
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.btn-header {
  height: 75px;
  width: 75px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.disabled {
  display: none;
}

.btn-header img,
.logo img {
  height: 50px;
}

.home.btn-header {
  background-color: var(--color-yellow-principal);
}

.rollback.btn-header {
  background-color: var(--color-magenta-principal);
}

/* Final do Header */
/* ------------------------------------------------------------ */

/* Main */

/* Titulo da página */
.dadosCandidato {
  font-weight: 700;
  width: 100%;
  font-size: 30px;
}

/* Labels de todos os inputs */
.label-form {
  font-weight: 700;
  font-size: 18px;
}

/* Textarea de mensagem */
#observacao {
  width: 100%;
  resize: none;
}

/* Início da chamada dos botões do rodapé */
.btn-confirmar,
.btn-status {
  height: 50px !important;
  width: 100%;

  border: none !important;

  font-size: 22px;

  text-align: center !important;
  font-weight: bold !important;
  color: var(--color-white-default);
  line-height: 30px;

  border-radius: 3px;
  white-space: normal !important;
}

.btn-confirmar {
  background: var(--color-magenta-principal);
}

.btn-status {
  background: var(--color-yellow-principal);
}

/* Final da chamada dos botões do rodapé */

/* Chamada dos campos disabled */
#disc,
#prova {
  background-color: var(--color-background-form-input);
}

/* Início da chamada do modal */

.modal {
  display: none;
}

button .largura {
  width: 100% !important;
}

.modal-body,
.modal-header,
.modal-footer {
  text-align: center;
  background-color: var(--color-background-screen);
}

.modal-title {
  margin-left: 75px;
}

.modal-body {
  min-height: 55vh;
  flex-direction: column;
  width: 100%;
}

.submit,
.cancel {
  color: white !important;
  font-weight: bold !important;
  border-radius: 5px !important;
  width: 350px;
  height: 50px;
  font-size: 25px !important;
}

.submit {
  background-color: var(--color-magenta-principal) !important;
}

.cancel {
  background-color: var(--color-yellow-principal) !important;
}

.conteudomodal {
  display: block;
  text-align: left;
  margin-left: 100px;
  color: var(--color-blue-footer) !important;
}

.btn.submit.form-control {
  font-size: 22px !important;
}

.nome {
  color: var(--color-gray-font);
  font-size: 24px;
}
.download{
    transform: rotate(180deg) !important;
}

</style>
