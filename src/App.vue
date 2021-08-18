<template>
  <div id="app">
    <header>
      <header-comp/>
    </header> 
    <main>  
      <router-view/>
    </main>
    <!--
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      
    -->
    <footer>  
      <footer-comp/>
    </footer>
  </div>
</template>

<script>
import HeaderComp from '@/components/Header.vue'
import FooterComp from '@/components/Footer.vue'
export default {
  components: {
    HeaderComp,
    FooterComp
  }
}
</script>

<style lang="css">  
  @import './assets/style/core.css';
</style>
