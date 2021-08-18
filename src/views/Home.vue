<template>
  <div id="home">
    <b-container class="mt-4 mb-4 text-justify">
      <h5>
        La Dirección General de Atención a la Comunidad, la Coordinación Universitaria para la Sustentabilidad y la Dirección General de Servicios Generales y Movilidad de la UNAM, convocan a la comunidad universitaria de cualquier plantel de la UNAM localizado en la Zona Metropolitana del Valle de México a participar en la tercera edición del "Academic Bicycle Challenge".
      </h5>
    </b-container>
    <!--BASES-->
    <section ref="bases" id="bases">
      <div class="parallaxg pi-one">
        <h2 class="h2t">
          <span class="hshadow">Academic Bicycle Challenge</span>
        </h2>
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <p>Este concurso tiene por objetivo promover el uso de la bicicleta entre la comunidad universitaria, impulsar estilos de vida más saludables, generar condiciones climáticas favorables y contribuir a la toma de conciencia de estos temas en una escala global.</p>
      <h5>-Bases</h5>
      <ul>
        <li>Podrán participar estudiantes, personal académico y personal administrativo, vigentes, de las entidades y dependencias de la Universidad Nacional Autónoma de México localizadas en la Zona Metropolitana del Valle de México, con apego a las normas de seguridad sanitaria definidas por las autoridades federal y locales.</li>
        <li>Podrán participar del 1º al 31 de octubre del presente año, realizando recorridos en bicicleta, en cualquier localización geográfica, considerando que las actividades académicas presenciales en los planteles, en el periodo señalado, puede seguir limitada.</li>
        <li>El registro y participación se realizará únicamente a través de la aplicación móvil definida por los organizadores, denominada “Naviki”, la cual se encuentra disponible, gratuitamente, dando clic: <a href="https://www.go-abc.org/for-participants/get-app/">AQUÍ</a></li>
        <li>Se premiará quienes queden dentro de los primeros XX lugares, de acuerdo con las tablas de resultados oficiales (kilómetros acumulados) emitidas y publicadas por la organización <i><a href="https://www.go-abc.org/start/">Academic Bicycle Challenge</a></i></li>
        <li>Los resultados serán inapelables. El kilometraje de cada participante será medido por la organización Academic Bicycle Challenge, a través de su aplicación, por lo que la UNAM, no tiene injerencia alguna. </li>
        <li>Quienes resulten ganadores, serán contactados vía correo electrónico para verificar la vigencia de su registro como parte de la comunidad universitaria.</li>
        <li>La entrega de premios se llevará a cabo en un lapso no mayor a tres semanas después de concluido el mes de octubre de 2021, siempre que las condiciones sanitarias lo permitan. Para tal efecto se contactará a las personas ganadoras vía correo electrónico y se les notificarán los detalles respecto a la fecha, hora, lugar y condiciones de la entrega de premios.</li>
        <li>Toda información referente a esta actividad se publicará a través las redes de la Dirección General de Atención a la Comunidad, de la Coordinación Universitaria para la Sustentabilidad y de la Dirección General de Servicios Generales y Movilidad </li>
      </ul>
    </b-container>
    <!--RANKING-->
    <section ref="ranking" id="ranking">
      <div class="parallaxg pi-two">
        <h2 class="h2t">
          <span class="hshadow">Ranking Mundial</span>
        </h2>
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <b-table-simple small responsive>
        <b-tbody>
          <b-tr v-for="(item, ind) in ranking">
            <b-td class="align-middle">
              <img :src="item.logo" width="70px" alt="">
            </b-td>
            <b-td class="align-middle">{{ item.title }}</b-td>
            <b-td class="align-middle">{{ item.totalKmProportional }} km</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <p>Para más información visita <a href="https://www.go-abc.org/es/leaderboards/worldwide-absolute/">Academic Bicycle Challenge</a></p>
    </b-container>
    <!--PREMIOS-->
    <section ref="premios" id="premios">
      <div class="parallaxg pi-three">
        <h2 class="h2t">
          <span class="hshadow">Premios</span>
        </h2>
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
    </b-container>
    <!--PREGUNTAS-->
    <section ref="preguntas" id="preguntas">
      <div class="parallaxg pi-four">
        <h2 class="h2t">
          <span class="hshadow">Preguntas Frecuentes</span>
        </h2>
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <ul>
        <li>¿Puedo participar si soy ex-alumno/a de la UNAM?</li>
        <li>¿Puedo participar si mi facultad/escuela/instituto se encuentra fuera de la Zona Metropolitana del Valle de México?</li>
        <li>¿Cómo se contarán los kilómetros que recorra?</li>
        <li>¿Hay un límite de kilómetros diarios por recorrer?</li>
        <li>¿Cómo puedo participar si no tengo una bici?</li>
        <li>¿Cómo sabré si soy ganador/a?</li>
        <li>¿Por qué la bicicleta es un medio de transporte sustentable?</li>
      </ul>
    </b-container>
  </div>
</template>
<script>
  export default{
    name: "Home",
    data(){
      return{
        ranking: []
      }
    },
    methods:{
      scrollMeTo(refName) {
        let element = this.$refs[refName];
        let top = element.offsetTop;
        window.scrollTo(0, top);
      }
    },
    //
    created(){
      axios
      .get("https://www.naviki.org/naviki/api/v6/Contest/findTopLevels/51091/?limit=200")
      .then((res) => {
        this.ranking = res.data.topLevels
      })
    }
  }
</script>
