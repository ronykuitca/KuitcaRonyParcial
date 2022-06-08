<template>

  <section class="src-componentes-formulario">
    <div class="container-fluid mt-3">
    </div>
    <div class="jumbotron">
        <vue-form :state="formState" @submit.prevent="enviar()">
    
        <!-- --------------------- -->
        <!--     Campo nombre      -->
        <!-- --------------------- -->
        <validate tag="div">
          
          <label for="nombre">Nombre</label>
          <input 
            type="text"
            id="nombre"
            name="nombre" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.nombre" 
            required 
            valida-nombre
            no-espacios
          />

          
          <field-messages name="nombre" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="valida-nombre" class="alert alert-danger mt-1">
              La cantidad de caracteres debe ser entre 5 y 15
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>

        
        <!-- --------------------- -->
        <!--     Campo apellido      -->
        <!-- --------------------- -->
        <validate tag="div">
          
          <label for="apellido">Apellido</label>
          <input 
            type="text"
            id="apellido"
            name="apellido" 
            class="form-control"
            autocomplete="off"
            v-model.trim="formData.apellido" 
            required 
            valida-nombre
             no-espacios
          />

          
          <field-messages name="apellido" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="valida-nombre" class="alert alert-danger mt-1">
              La cantidad de caracteres debe ser entre 5 y 15
            </div>
            <div slot="no-espacios" class="alert alert-danger mt-1">
              No se permiten espacios intermedios en este campo.
            </div>
          </field-messages>
        </validate>
        <br>



        <!-- --------------------- -->
        <!--      Campo nota       -->
        <!-- --------------------- -->
        <validate tag="div">
          
          <label for="nota">Nota</label>
          <input 
            type="number"
            id="nota"
            name="nota" 
            class="form-control"
            autocomplete="off"
            v-model.number="formData.nota" 
            required
            :min="notaMin"
            :max="notaMax"
          />

            <field-messages name="nota" show="$dirty">
            <div slot="required" class="alert alert-danger mt-1">Campo requerido</div>
            <div slot="min" class="alert alert-danger mt-1">
              La nota mínima permitida es de {{notaMin}}.
            </div>
            <div slot="max" class="alert alert-danger mt-1">
              La nota maxima permitida es de {{notaMax}}.
            </div>
            </field-messages>
            </validate>
            <br>

        
        <button class="btn btn-success my-4" :disabled="formState.$invalid">Enviar</button>
      </vue-form>
    </div>

          
      <div class="table-responsive" :personas="personas" v-show="personas.length">
        <table class="table table-dark">
          <tr>
          <th>Nombre y Apellido</th>
          <th>Nota</th>
          </tr>
          
          <tr v-for="(persona,index) in personas" :key ="index" :style="{color: persona.estiloNota}">
            <td>{{ persona.nombre}} {{persona.apellido }} </td>
            <td>{{ persona.nota }}</td>
          </tr>
          <tfoot>
              <tr v-if="this.calcularPromedio() > 0" :style="{color: this.getEstiloNota(this.calcularPromedio())}">
                <th>Promedio</th>
                <th>{{calcularPromedio()}}</th>
              </tr>
          </tfoot>
          
        </table>
      </div>
      
  </section>
</template>

<script>

  export default  {
    name: 'src-componentes-formulario',
    props: [],
    mounted () {

    },
    data () {
      return {
        formState : {},
        formData : this.getInicialData(),
        personas: [],
        notaMin:0,
        notaMax:10,
        acumuladorNotas:0,
        cantNotas:0
      }
    },
    methods: {
      getInicialData() {
        return {
          nombre: '',
          apellido:'',
          nota: '',
        }
      },
      enviar() {
        this.cantNotas++
        this.acumuladorNotas += this.formData.nota
        this.formData.estiloNota = this.getEstiloNota(this.formData.nota)
        this.personas.push(this.formData)
        this.formData = this.getInicialData() 
        this.formState._reset()   
      },
      calcularPromedio(){
        return this.acumuladorNotas / this.cantNotas
      },
      getEstiloNota(nota){
        let estilo = ''
        if (nota >= 7 && nota < 10) {
          estilo = 'green'
        }

        if (nota >= 4 && nota < 7) {
          estilo = 'yellow'
        }

        if (nota >= 0 && nota < 4) {
          estilo = 'red'
        }
        return estilo
    },
    
    computed: {

    }
    }
}


</script>

<style scoped lang="css">

  .jumbotron {
      background-color:slategrey;
      color: white;
  }

  hr {
      background-color: #bbb;
  }  

  pre {
    color: white;
  }

</style>
