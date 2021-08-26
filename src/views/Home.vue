<template>
  <div id="home">
    <b-container class="mt-4 mb-4 text-justify">
      <h5>
        La Dirección General de Atención a la Comunidad, la Coordinación Universitaria para la Sustentabilidad y la Dirección General de Servicios Generales y Movilidad de la UNAM, convocan a la comunidad universitaria de cualquier plantel de la UNAM localizado en la Zona Metropolitana del Valle de México a participar en la tercera edición del "Academic Bicycle Challenge".
      </h5>
    </b-container>
    <!--BASES-->
    <section ref="bases" id="bases">
      <div class="parallaxg-init" :style="piOne">
        <!--
          <h2 class="h2t">
            <span class="hshadow hst">Academic Bicycle Challenge</span>
          </h2>
        -->
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <p>Este concurso tiene por objetivo promover el uso de la bicicleta entre la comunidad universitaria, impulsar estilos de vida más saludables, generar condiciones climáticas favorables y contribuir a la toma de conciencia de estos temas en una escala global.</p>
      <h5><span class="accent"><strong>-</strong></span> <span class="bases-title">Bases</span></h5>
      <ul>
        <li>
          <span>
            Podrán participar estudiantes, personal académico y personal administrativo, vigentes, de las entidades y dependencias de la Universidad Nacional Autónoma de México localizadas en la Zona Metropolitana del Valle de México, con apego a las normas de seguridad sanitaria definidas por las autoridades federal y locales.
          </span>
        </li>
        <li>
          <span>
            Podrán participar del 1º al 31 de octubre del presente año, realizando recorridos en bicicleta, en cualquier localización geográfica, considerando que las actividades académicas presenciales en los planteles, en el periodo señalado, puede seguir limitada.
          </span>
        </li>
        <li>
          <span>
            El registro y participación se realizará únicamente a través de la aplicación móvil definida por los organizadores, denominada “Naviki”, la cual se encuentra disponible, gratuitamente, dando clic: <a href="https://www.go-abc.org/for-participants/get-app/">AQUÍ</a>
          </span>
        </li>
        <li>
          <span>
            Se premiará quienes queden dentro de los primeros XX lugares, de acuerdo con las tablas de resultados oficiales (kilómetros acumulados) emitidas y publicadas por la organización <i><a href="https://www.go-abc.org/start/">Academic Bicycle Challenge</a></i>
          </span>
        </li>
        <li>
          <span>
            Los resultados serán inapelables. El kilometraje de cada participante será medido por la organización Academic Bicycle Challenge, a través de su aplicación, por lo que la UNAM, no tiene injerencia alguna.
          </span>
        </li>
        <li>
          <span>
            Quienes resulten ganadores, serán contactados vía correo electrónico para verificar la vigencia de su registro como parte de la comunidad universitaria.
          </span>
        </li>
        <li>
          <span>
            La entrega de premios se llevará a cabo en un lapso no mayor a tres semanas después de concluido el mes de octubre de 2021, siempre que las condiciones sanitarias lo permitan. Para tal efecto se contactará a las personas ganadoras vía correo electrónico y se les notificarán los detalles respecto a la fecha, hora, lugar y condiciones de la entrega de premios.
          </span>
        </li>
        <li>
          <span>
            Toda información referente a esta actividad se publicará a través las redes de la Dirección General de Atención a la Comunidad, de la Coordinación Universitaria para la Sustentabilidad y de la Dirección General de Servicios Generales y Movilidad 
          </span>
        </li>
      </ul>
    </b-container>
    <!--RANKING-->
    <section ref="ranking" id="ranking">
      <div class="parallaxg" :style="piTwo">
        <h2 class="h2t">
          <span class="hshadow hst">Ranking Mundial</span>
        </h2>
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <b-table-simple small responsive>
        <b-tbody>
          <!--R-MUNDIAL-->
          <b-tr v-for="(item, ind) in ranking.slice(0,5)">
            <b-td class="align-middle">
              {{ ind+1 }}
            </b-td>
            <b-td class="align-middle">
              <img :src="item.logo" width="70px" alt="">
            </b-td>
            <b-td class="align-middle">
              {{ item.title }}
            </b-td>
            <b-td class="align-middle">
              {{ item.totalKmProportional }} km
            </b-td>
          </b-tr>
          <!--R-UNAM-->
          <b-tr v-for="i in runam">
            <b-td class="align-middle">
              <span class="ur">{{runam.number}}</span>
            </b-td>
            <b-td class="align-middle">
              <img :src="runam.logo" width="70px" alt="">
            </b-td>
            <b-td class="align-middle">
              <span class="ur">{{ runam.title }}</span>
            </b-td>
            <b-td class="align-middle">
              <span class="ur">{{ runam.km }} km</span>
            </b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
      <p>Para más información visita <a href="https://www.go-abc.org/es/leaderboards/worldwide-absolute/">Academic Bicycle Challenge</a></p>
    </b-container>
    <!--PREMIOS-->
    <section ref="premios" id="premios">
      <div class="parallaxg" :style="piThree">
        <h2 class="h2t">
          <span class="hshadow hst">Premios</span>
        </h2>
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <p>Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.</p>
    </b-container>
    <!--PREGUNTAS-->
    <section ref="preguntas" id="preguntas">
      <div class="parallaxg" :style="piFour">
        <h2 class="h2t">
          <span class="hshadow hst">Preguntas Frecuentes</span>
        </h2>
      </div>
    </section>
    <b-container class="mt-4 mb-5 text-justify">
      <ul>
        <li>
          <span>¿Puedo participar si soy ex-alumno/a de la UNAM?</span>
        </li>
        <li>
          <span>¿Puedo participar si mi facultad/escuela/instituto se encuentra fuera de la Zona Metropolitana del Valle de México?
          </span>
        </li>
        <li>
          <span>¿Cómo se contarán los kilómetros que recorra?</span>  
        </li>
        <li>
          <span>¿Hay un límite de kilómetros diarios por recorrer?
          </span>
        </li>
        <li>
          <span>¿Cómo puedo participar si no tengo una bici?
          </span>
        </li>
        <li>
          <span>¿Cómo sabré si soy ganador/a?
          </span>
        </li>
        <li>
          <span>¿Por qué la bicicleta es un medio de transporte sustentable?
          </span>
        </li>
      </ul>
    </b-container>
    <!--REDES SOCIALES
    <section ref="preguntas" id="redes">
      <div class="parallaxg pi-five">
        <h2 class="h2t">
          <span class="hshadow hst">Redes sociales</span>
        </h2>
      </div>
    </section>-->
    <b-container class="mt-4 mb-5">
      <div class="row">
        <div class="col-md-12 text-center">
          <iframe src="https://www.instagram.com/p/CS7nHqkLJPH/embed" width="50%" height="600px" frameborder="0" scrolling="no" allowtransparency="true"></iframe>
        </div>  
      </div>
    </b-container>
  </div>
</template>
<script>
  export default{
    name: "Home",
    data(){
      return{
        ranking: [],
        runam: [
          {
            number: 0, 
            logo: "", 
            title: "",
            km: 0,
          }
        ]
      }
    },
    methods:{
      scrollMeTo(refName) {
        let element = this.$refs[refName];
        let top = element.offsetTop;
        window.scrollTo(0, top);
      }
    },
    computed: {
      pi_one(){
        return require("@/assets/images/parallax/pabc_1.png")
      },
      pi_two(){
        return require("@/assets/images/parallax/pabc_2.png")
      },
      pi_three(){
        return require("@/assets/images/parallax/pabc_3.png")
      },
      pi_four(){
        return require("@/assets/images/parallax/pabc_4.png")
      },
      piOne(){
        return {
          backgroundImage: `url(${this.pi_one})`
        }
      },
      piTwo(){
        return {
          backgroundImage: `url(${this.pi_two})`
        }
      },
      piThree(){
        return {
          backgroundImage: `url(${this.pi_three})`
        }
      },
      piFour(){
        return {
          backgroundImage: `url(${this.pi_four})`
        }
      }
    }, 
    //
    created(){
      let index
      axios
      .get("https://www.naviki.org/naviki/api/v6/Contest/findTopLevels/51091/?limit=200")
      .then((res) => {
        this.ranking = res.data.topLevels
        //
        this.ranking.sort(function (a,b){
          return parseFloat(b.totalKmProportional) - parseFloat(a.totalKmProportional) 
        })
        //
        index = this.ranking.findIndex(function(item, i){
          return item.shortTitle === "UNAM"
        })
        this.runam.number = index+1
        this.runam.logo = this.ranking[index].logo
        this.runam.title = this.ranking[index].title
        this.runam.km = this.ranking[index].totalKmProportional
      })
    }
  }
</script>
