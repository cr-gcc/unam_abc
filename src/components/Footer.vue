<template>  
  <div id="footer">
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6 mb-4">
          <p>
            <a href="#bases" class="footer-opt">Bases</a>
          </p>
          <p>
            <a href="#ranking" class="footer-opt">Ranking</a>
          </p>
          <p>
            <a href="#premios" class="footer-opt">Premios</a>
          </p>
          <p>
            <a href="#preguntas" class="footer-opt">Preguntas frecuentes</a>
          </p>
        </div>
        <div class="col-md-6 mb-4">
          <div>
            <span class="footer-follow">SÍGUENOS</span>
            <div class="mt-1">
              <img src="@/assets/images/logos/insta_g.png" width="20" alt="Siguenos">
              <a class="footer-contacto ml-3" href="https://www.instagram.com/abc.unam/?hl=es" target="_blank">abc.unam</a>
            </div>
          </div>
          <div class="mt-5">
            <span class="footer-follow">ESCRÍBENOS</span>
            <div class="mt-1">
              <img src="@/assets/images/logos/email_g.png" width="22" alt="Escribenos">
              <a class="footer-contacto ml-3" href="mailto:abc.unam@unam.mx">abc.unam@unam.mx</a>
            </div>
          </div>
        </div>
        <div class="col-sm-12 text-center mt-4 mb-5">
          <div class="row align-items-center">
            <div class="col">
              <img width="50" height="80" src="@/assets/images/inst/firma.png" alt="Firma">
            </div>
            <div class="col">  
              <img width="160" height="40" src="@/assets/images/inst/sdi.png" alt="SDI">
            </div>
            <div class="col">
              <img width="65" height="80" src="@/assets/images/inst/spasu.png" alt="SPASU">
            </div>
            <div class="col">
              <img width="" height="60" src="@/assets/images/inst/dgaco.png" alt="DGACO">
            </div>
            <div class="col">
              <img width="220" height="50" src="@/assets/images/inst/cous.png" alt="COUS">
            </div>
            <div class="col">
              <img width="220" height="50" src="@/assets/images/inst/bicipuma.png" alt="Bicipuma">
            </div>            
          </div>
        </div>
        <div class="col-sm-12 text-center mb-3">
          <p>
            <span class="footer-cpy">© {{ year }} UNAM</span>
          </p>
        </div>
      </div>
    </div>
    <!--
    <img src="@/assets/images/footer.jpg" width="100%" alt="">
  -->
  </div>
</template>
<script>
  export default{
    data(){
      return{
        year: ""
      }
    },
    created(){
      this.year = new Date().getFullYear();
    }
  }

</script>