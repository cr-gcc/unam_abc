<template>
  <div id="header">
    <b-navbar toggleable="lg" type="dark" variant="blue">
      <!--<b-navbar-brand href="#">UNAM ABC</b-navbar-brand>-->
      <b-navbar-brand target="_blank">
        <a href="https://www.unam.mx/" class="mr-1 ml-1" target="_blank">
          <img height="60" :src="require('@/assets/images/logos/unam_w.png')" alt="UNAM">
        </a>
        <a href="https://www.go-abc.org/es/start/" class="mr-1 ml-1" target="_blank">
          <img height="60" :src="require('@/assets/images/logos/abc_w.png')" alt="UNAM">
        </a>
        <router-link to="/" class="mr-1 ml-1">
          <img height="60" :src="require('@/assets/images/logos/abc_unam_w.png')" alt="UNAM">
        </router-link>
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#bases" class="bni-opt">Bases</b-nav-item>
          <b-nav-item href="#ranking" class="bni-opt">Ranking</b-nav-item>
          <b-nav-item href="#premios" class="bni-opt">Premios</b-nav-item>
          <b-nav-item href="#preguntas" class="bni-opt">Preguntas Frecuentes</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>
<style scoped>
</style>
