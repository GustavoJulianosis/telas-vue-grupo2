<template>
  <Header/>
      <main>
        <div class="container-fluid">
            <div class="row justify-content-evenly">
                <h3 class="titulo col-xl-4 mt-5">Cadastro cargo:</h3>
                <div class="col-xl-4"></div>
                <div class="col-xl-2"></div>
            </div>
            <div class="row justify-content-evenly">
                <div class="col-xl-4">
                    <div>
                        <label for="cargoInput" class="form-label mb-0 titulo">Cargo</label>
                        <input class="form-control" placeholder="Digite um cargo"  v-bind:value="cargos.cargo" type="text" name="cargo" id="inputCargo"/>
                    </div>
                    <div>
                        <label for="bolsaAuxilio" class="form-label mb-0 mt-3 titulo">Bolsa auxílio</label>
                        <input type="number" name="bolsaAuxilio" class="form-control" v-bind:value="cargos.bolsaAuxilio" placeholder="Valor bolsa auxílio" id="inputBolsaAuxilio"/>
                    </div>
                    <div>
                        <label for="beneficios" class="form-label mb-0 mt-3 titulo">Benefícios</label>
                        <input type="number" name="beneficios" class="form-control" v-bind:value="cargos.beneficios" placeholder="Valor Benefícios" id="inputBeneficios"/>
                    </div>
                    <div>
                        <label for="convenio" class="form-label mb-0 mt-3 titulo">Convênio</label>
                        <div class="input-group">
                            <input type="number" class="form-control" placeholder="Valor convênio" name="convenio" v-bind:value="cargos.convenio" id="inputConvenio"/>
                        </div>
                    </div>
                    <div>
                        <label for="horaExtra" class="form-label mb-0 mt-3 titulo">Hora extra</label>
                        <div class="input-group mb-5">
                            <input type="number" class="form-control" placeholder="Valor da hora extra" name="horaExtra" v-bind:value="cargos.horaExtra" id="inputHoraExtra" />
                        </div>
                    </div>
                </div>
                <div class="col-xl-4">
                    <div>
                        <label for="beneficioLegislacao" class="form-label mb-0 titulo">Benefício legislação</label>
                        <div class="input-group">
                            <input type="number" class="form-control" placeholder="Valor benefício legislação" name="beneficioLegislacao" v-bind:value="cargos.beneficioLegislacao" id="inputBeneficioLegislacao" />
                        </div>
                    </div>
                    <div>
                        <label for="remuneracaoEsporadica" class="form-label mb-0 mt-3 titulo">Remuneração esporádica</label>
                        <input name="remuneracaoEsporadica" type="number" class="form-control" placeholder="Valor remuneração esporadica" v-bind:value="cargos.remuneracaoEsporadica" id="inputRemuneracaoEsporadica" />
                    </div>
                    <div>
                        <label for="remuneracaoExtra" class="form-label mb-0 mt-3 titulo">Remuneração extra</label>
                        <input name="remuneracaoExtra" type="number" class="form-control" placeholder="Valor remuneração extra" v-bind:value="cargos.remuneracaoExtra" id="inputRemuneracaoExtra">
                    </div>
                    <div>
                        <label class="form-label mb-0 mt-3 titulo">Alura</label>
                        <input name="alura" type="number" class="form-control" placeholder="Valor Alura" v-bind:value="cargos.alura" id="inputAlura">
                    </div>
                </div>
                <div class="col-xl-2"></div>
            </div>
            <div class="row justify-content-evenly">
                <div class="col-xl-4 mt-4">
                    <div>
                        <button type="button" class="btn-confirmar btn" data-bs-toggle="modal"
                            data-bs-target="#exampleModal" @click.prevent="registrarDados">
                            CONFIRMAR
                        </button>
                    </div>
                </div>
                <div class="col-xl-4"></div>
                <div class="col-xl-2"></div>
            </div>
        </div>
    </main>

    <!--Model-->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-xl modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header border-0">
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body d-flex justify-content-between">
          <div>
            <h1 class="modal-title form-label fw-bold mb-0 titulo">Deseja confirmar os seguintes dados?</h1>
          </div>
          <div class="conteudomodalCadastroEdicao">
            <div class="row">
              <div class="col">
                <div class="alinharDiv">
                  <span class="informacoes-modal">Cargo: {{ cargos.cargo }}</span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Bolsa auxílio: {{ cargos.bolsaAuxilio }} </span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Benefícios: {{ cargos.beneficios }}</span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Convenio: {{ cargos.convenio }}</span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Hora extra: {{ cargos.horaExtra }}</span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Benefício Legislação: {{ cargos.beneficioLegislacao }}</span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Remuneração esporádica: {{ cargos.remuneracaoEsporadica }}</span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Remuneração extra: {{ cargos.remuneracaoExtra }}</span>
                </div>
                <div class="alinharDiv">
                  <span class="informacoes-modal">Alura: {{ cargos.alura }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer border-0 justify-content-around">
          <div>
            <button type="submit" class="btn submit">CONFIRMAR</button>
          </div>
          <div>
            <button type="button" class="btn cancel" data-bs-dismiss="modal">CANCELAR</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data() {
    return {
      cargos: {
        cargo: '',
        bolsaAuxilio: '',
        beneficios: '',
        convenio: '',
        horaExtra: '20',
        beneficioLegislacao: '10',
        remuneracaoEsporadica: '10',
        remuneracaoExtra: '150',
        alura: '100'
      }
    }
  },
  methods: {
    registrarDados(){
    this.cargos.cargo = document.querySelector('#inputCargo').value
    this.cargos.bolsaAuxilio = document.querySelector('#inputBolsaAuxilio').value
    this.cargos.beneficios = document.querySelector('#inputBeneficios').value
    this.cargos.convenio = document.querySelector('#inputConvenio').value
    this.cargos.horaExtra = document.querySelector('#inputHoraExtra').value
    this.cargos.beneficioLegislacao = document.querySelector('#inputBeneficioLegislacao').value
    this.cargos.remuneracaoEsporadica = document.querySelector('#inputRemuneracaoEsporadica').value
    this.cargos.remuneracaoExtra = document.querySelector('#inputRemuneracaoExtra').value
    this.cargos.alura = document.querySelector('#inputAlura').value
  },
  }
}
</script>

<style>
body{
  background: #ebebeb;
}
.titulo {
  color: #090b2e;
  font-weight: bold;
}

.subtitulo {
  color: #090b2e;
  font-weight: bold;
  font-size: large;
}

.btn-confirmar {
  background-color: #ab0045 !important;
  font-weight: bold !important;
  color: #fff !important;
  width: 100%;
}

.btn-cancelar {
  background-color: #ffb700 !important;
  font-weight: bold !important;
  color: #fff !important;
  width: 100%;
}

@media screen and (min-width: 992px) {
  .empty {
    height: 200px;
  }
}

/*Modal*/
.modal-body,
.modal-header,
.modal-footer {
  text-align: center;
  background-color: #ebebeb;
}

.modal-body {
  min-height: 55vh;
  flex-direction: column;
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
  background-color: #ab0045 !important;
}

.cancel {
  background-color: #ffb700 !important;
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

.alinharDiv {
  text-align: start;
}

.informacoes-modal {
  color: #737373 !important;
  font-size: 1.25rem;
}
</style>