<template>
  <Header/>
<main>
  <div class="container-fluid" >
                <div class="row mt-5 justify-content-evenly">
                    <div class="div-titulo col-lg-4">
                        <h3 class="titulo">Dados do cargo:</h3>
                    </div>
                    <div class="col-lg-4"></div>
                    <div class="col-lg-2"></div>
                </div>
                <div class="row justify-content-evenly" id="candidato">
                    <div class="col-lg-4">
                        <fieldset disabled>
                            <div class="mb-3">
                                <label for="cargo" class="form-label mb-0 titulo">Cargo</label>
                                <input name="cargo" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.cargo">
                            </div>
                            <div class="mb-3">
                                <label for="bolsaAuxilio" class="form-label mb-0 titulo">Bolsa auxílio</label>
                                <input name="bolsaAuxilio" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.bolsaAuxilio">
                            </div>
                            <div class="mb-3">
                                <label for="convenio" class="form-label mb-0 titulo">Convênio</label>
                                <input name="convenio" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.convenio">
                            </div>
                            <div class="mb-3">
                                <label for="horaExtra" class="form-label mb-0 titulo">Hora Extra</label>
                                <input name="horaExtra" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.horaExtra">
                            </div>
                            <div class="mb-3">
                                <label for="beneficioLegislacao" class="form-label mb-0 titulo">Benefício legislação</label>
                                <input name="beneficioLegislacao" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.beneficioLegislacao">
                            </div>
                            <div class="mb-3">
                                <label for="remuneracaoEsporadica" class="form-label mb-0 titulo">Remuneração esporádica</label>
                                <input name="remuneracaoEsporadica" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.remuneracaoEsporadica">
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-lg-4">
                        <fieldset disabled>
                            <div class="mb-3">
                                <label for="remuneracaoExtra" class="form-label mb-0 titulo">Remuneração extra</label>
                                <input name="remuneracaoExtra" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.remuneracaoExtra">
                            </div>
                            <div class="mb-3">
                                <label for="alura" class="form-label mb-0 titulo">Alura</label>
                                <input name="alura" type="text" class="form-control" id="disabledTextInput" v-bind:placeholder="cargos.alura">
                            </div>
                        </fieldset>
                    </div>
                    <div class="col-lg-2">
                    </div>
                </div>
            </div>
        </main>
</template>

<script>
import Header from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  },
  data () {
        return{
            cargos: {
                id: 1,
                cargo: 'Estágiario',
                bolsaAuxilio: '1500',
                beneficios: '450',
                convenio: '100',
                horaExtra: '20',
                beneficioLegislacao: '10',
                remuneracaoEsporadica: '10',
                remuneracaoExtra: '20',
                alura: '15'
            }
        }
    }
}
</script>

<style>
body{
    background: #ebebeb;
}
.titulo{
    color: #090B2E;
    font-weight: bold;
}

#disabledTextInput{
    background-color: #D3CACA;
    border: 1px solid #BCB3B3;
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

@media screen and (min-width: 992px) {
    .empty{
        height: 200px;
    }
  }
</style>