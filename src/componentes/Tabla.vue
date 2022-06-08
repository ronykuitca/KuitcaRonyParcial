<template>

  <section class="src-componentes-tabla">
    <h1>Cuestionario</h1>
        <table class="table table-dark">
      <thead>
        <tr>
          <th scope="col">Numero de pregunta</th>
          <th scope="col">Respuesta</th>
        </tr>
      </thead>
      <tbody>
          <tr v-for="(pregunta,index) in preguntas" :key ="index">
            <td>{{ index + 1}} </td>
            <td>{{ pregunta.respuestas}}</td>
          </tr>
      </tbody>
    </table>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-tabla',
    props: [],
    mounted () {

    },
    data () {
      return {
        preguntas : [
          {numero:1, respuestas: ['c']},
          {numero:2, respuestas: ['c']},
          {numero:3, respuestas: ['b']},

        ]

      }
    },
    methods: {

    },
    computed: {

    }
}


</script>

<style scoped lang="css">

</style>
