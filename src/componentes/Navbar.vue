<template>

  <section class="src-componentes-navbar">
    
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Inicio</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
          <li>
            <router-link to="/Formulario">
              <a class="nav-link" href="#">Formulario</a>
            </router-link>
          </li>

          <li>
            <router-link to="/Tabla">
              <a class="nav-link" href="#">Tabla</a>
            </router-link>
          </li>
    </ul>
  </div>
</nav>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'src-componentes-navbar',
    props: [],
    mounted () {

    },
    data () {
      return {

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
