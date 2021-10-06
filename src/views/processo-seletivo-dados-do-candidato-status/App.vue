<template>
  <Header />

  <main>
    <form class="container-fluid" action="" method="POST">
      <div class="row justify-content-evenly">
        <div class="col-lg-4">
          <div class="mt-3"><h3 class="titulo">Status: Fase 1</h3></div>
          <div class="mt-5"><span class="subtitulo">Testes</span></div>
          <div class="mt-4">
            <label for="testeLogico" class="form-label titulo mb-0"
              >Teste lógico</label
            >
            <input
              name="testeLogico"
              class="form-control"
              type="text"
              placeholder="10/10"
            />
          </div>
          <div class="mt-1">
            <label for="disc" class="form-label titulo mt-4 mb-0">DISC</label>
            <input
              type="text"
              name="disc"
              class="form-control"
              placeholder="D:10 I:9 S:9 C:7"
            />
          </div>
        </div>
        <div class="col-lg-4">
          <div class="mt-3"><h3 class="titulo">Status: Fase 2</h3></div>
          <div class="mt-5"><span class="subtitulo">Testes</span></div>
          <div class="mt-3">
            <label for="entrevistaPessoal" class="form-label titulo mb-0"
              >Entrevista pessoal</label
            >
            <textarea
              name="entrevistaPessoal"
              rows="5"
              class="form-control"
              placeholder="Considerações..."
            ></textarea>
          </div>
        </div>
      </div>
      <div class="row empty"></div>
      <div class="row justify-content-center mb-3">
        <div class="col-4 col-md-auto">
          <input
            type="radio"
            name="aprovadoRadio"
            class="form-check-input"
            id="radioAprovado"
          />
          <label for="aprovadoRadio" class="form-check-label titulo mb-0"
            >Aprovado</label
          >
        </div>
        <div class="col-4 col-md-auto">
          <input
            type="radio"
            name="aprovadoRadio"
            class="form-check-input"
            id="radioReprovado"
          />
          <label for="aprovadoRadio" class="form-check-label titulo mb-0"
            >Reprovado</label
          >
        </div>
        <div class="col-4 col-md-auto">
          <input
            type="radio"
            name="aprovadoRadio"
            class="form-check-input"
            id="radioStandby"
          />
          <label for="aprovadoRadio" class="form-check-label titulo mb-0"
            >StandBy</label
          >
        </div>
      </div>
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <button
            type="button"
            class="btn-confirmar btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            CONFIRMAR
          </button>
        </div>
      </div>
    </form>
  </main>

  <!-- modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-xl modal-dialog modal-dialog-centered" id="candidato">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div>
            <h1 class="modal-title form-label fw-bold mb-0 titulo">
              Deseja {{ status }} o seguinte participante?
            </h1>
          </div>
          <div class="conteudomodal">
            <h3 class="informacoes-modal">{{ candidato.nome }}</h3>
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
        id: "1",
        nome: "Gustavo de Oliveira Juliano",
      },
    };
  },
};
</script>

<style>
.titulo{
    color: #090B2E;
    font-weight: bold;
}

#disabledTextInput{
    background-color: #D3CACA;
    border: 1px solid #BCB3B3;
}

.aprovado::placeholder{
    color: #19B200 !important; 
}

textarea{
    resize: none !important;
}

.download{
    transform: rotate(180deg) !important;
}

.subtitulo{
    color: #090B2E;
    font-weight: bold;
    font-size: large;
}

.btn-confirmar{
    background-color: #AB0045 !important;
    font-weight: bold !important;
    color: #fff !important;
    width: 100%;
}

.btn-cancelar{
    background-color: #FFB700 !important;
    font-weight: bold !important;
    color: #fff !important;
    width: 100%;
}

@media screen and (min-width: 992px) {
    .empty{
        height: 200px;
    }
  }

/*Modal*/
.modal-body, .modal-header, .modal-footer {
    text-align: center;
    background-color: #EBEBEB
}

.modal-body{
    min-height: 55vh;
    flex-direction: column;
}

.submit, .cancel{
    color: white !important;
    font-weight: bold !important;
    border-radius: 5px !important;
    width: 350px;
    height: 50px;
    font-size: 25px !important;
}

.submit{
    background-color: #AB0045 !important;

}

.cancel{
    background-color: #FFB700 !important;
}

.conteudomodal {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40vh;
}

.conteudomodalCadastroEdicao {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 80px;
}

.alinharDiv{
    text-align: start;
}

.informacoes-modal{
    color: #737373 !important;
    font-size: 2rem;
}
</style>