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
            Podrán participar estudiantes, personal académico y personal administrativo, vigentes, de las entidades y dependencias de la Universidad Nacional Autónoma de México, localizados en la Zona Metropolitana del Valle de México, con apego a las normas de seguridad sanitaria definidas por las autoridades federal y locales.
          </span>
        </li>
        <li>
          <span>
            Del 4 al 31 de octubre, podrán realizar recorridos en bicicleta por la ciudad, considerando que las actividades académicas presenciales en los planteles, en el periodo señalado, pueden seguir limitadas.
          </span>
        </li>
        <li>
          <span>
            El registro y participación se realizará únicamente a través de la aplicación móvil definida por los organizadores, denominada “Naviki”, la cual se encuentra disponible, gratuitamente, dando clic: <a href="https://www.go-abc.org/for-participants/get-app/" target="_blank">AQUÍ</a>
          </span>
        </li>
        <li>
          <span>
            Se premiará con bicicletas a quienes queden dentro de los primeros 3 lugares, de acuerdo con las tablas de resultados oficiales (kilómetros acumulados) emitidas y publicadas por la organización Academic Bicycle Challenge, mediante el sitio: <i><a href="https://www.go-abc.org/start/" target="_blank">Academic Bicycle Challenge</a></i>
          </span>
        </li>
        <li>
          <span>
            Los resultados serán inapelables. El kilometraje de cada participante será medido por la organización Academic Bicycle Challenge, a través de su aplicación, por lo que la UNAM, no tendrá injerencia alguna.
          </span>
        </li>
        <li>
          <span>
            Quienes resulten ganadores serán contactados vía correo electrónico para verificar la vigencia de su registro como parte de la comunidad universitaria.
          </span>
        </li>
        <li>
          <span>
            La entrega de premios se llevará a cabo en un lapso no mayor a tres semanas después de concluido el mes de octubre de 2021, siempre que las condiciones sanitarias lo permitan. Para tal efecto se contactará a las personas ganadoras vía correo electrónico y se les notificarán los detalles respecto a la fecha, hora, lugar y condiciones de la entrega de premios.
          </span>
        </li>
        <li>
          <span>
            Toda información referente a esta actividad se publicará a través las redes de la Dirección General de Atención a la Comunidad, de la Coordinación Universitaria para la Sustentabilidad y de la Dirección General de Servicios Generales y Movilidad de la UNAM. 
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
      <p>Para más información visita <a href="https://www.go-abc.org/es/leaderboards/worldwide-absolute/" target="_blank">Academic Bicycle Challenge</a></p>
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
      <p>
        <strong>
          Habrá premios para los primeros lugares, ¡mantente al tanto para conocer más detalles!
        </strong>
      </p>
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
      <ul class="slist">
        <li>
          <span>
            <strong>¿Cuándo puedo participar?</strong>
            <br>Del 4 al 31 de octubre de este año.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Cómo puedo registrarme?</strong>
            <br>El registro y participación se realizarán únicamente a través de la aplicación móvil definida por la organización del reto, denominada “Naviki”, la cual se encuentra disponible gratuitamente dando clic <a href="https://www.go-abc.org/for-participants/get-app/" target="_blank">AQUÍ</a>
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Para qué se hace este concurso?</strong>
            <br>Para promover el uso de la bicicleta entre la comunidad universitaria, impulsar estilos de vida más saludables, generar condiciones climáticas favorables y contribuir a la toma de conciencia de estos temas en una escala global.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Debo realizar algún pago para poder participar?</strong>
            <br>No. El acceso al concurso es completamente gratuito. En “Naviki” (la app de registro) podrás encontrar algunas compras internas, sin embargo, ninguno de estos elementos es requerido para tu participación.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Puedo participar si soy ex-alumnx de la UNAM?</strong>
            <br>No, el reto solo permite la participación de estudiantes, personal académico y personal administrativo que cuenten con un estatus vigente.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Puedo participar si mi facultad/escuela/instituto se encuentra fuera de la Zona Metropolitana del Valle de México?</strong>
            <br>No, este año solo podrán participar los campus de la Zona Metropolitana del Valle de México.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Por qué debo usar la app Naviki?</strong>
            <br>Es la app utilizada por los organizadores del concurso para que en ella se registren las rutas y así mantener un correcto seguimiento del kilometraje recorrido por los y las participantes en todo el mundo.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Qué debo hacer para registrarme en la app de Naviki?</strong>
            <br>
            <ol>
              <li>
                <span>
                  Descarga la aplicación Naviki en tu teléfono. 
                </span>
              </li>
              <li>
                <span>
                  Selecciona la opción "Más" en el menú principal. 
                </span>
              </li>
              <li>
                <span>
                  Selecciona "Iniciar sesión" e introduce tus datos de convocatorias anteriores o crea un nuevo registro mediante el ingreso de datos en el apartado "Registrar ahora". 
                </span>
              </li>
              <li>
                <span>
                  Regresa al menú "Más" y selecciona la opción "Competiciones". 
                </span>
              </li>
              <li>
                <span>
                  Selecciona "Academic Bicycle Challenge (ABC) 2021". 
                </span>
              </li>
              <li>
                <span>
                  Activa la opción "Estoy participando".
                </span>
              </li>
            </ol>
            Los kilómetros recorridos únicamente se registran si llevas contigo el teléfono donde se ha iniciado sesión en la aplicación Naviki. No es necesario tener activados los datos móviles para el registro de kilómetros; sin embargo, es necesario conectarse a internet en algún momento antes del final de la competencia para que la aplicación registre los kilómetros recorridos.
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Hay un límite de kilómetros?</strong>
            <br>¡Los límites los pones tú! La app contará todos los kilómetros que realices al día.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Puedo ir a rodar a C.U.?</strong>
            <br>¡Por su puesto! Todos los kilómetros que realices dentro y fuera de C.U se tomarán en cuenta.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Cómo sabré si soy ganador/a?</strong>
            <br>Si resultas ganador o ganadora se te contactará vía correo electrónico con todos los detalles respecto a la fecha, hora, lugar y condiciones de la entrega de premios.  
          </span>
        </li>
        <li class="mt-3">
          <span>
            <strong>¿Cómo puedo estar al tanto de todo lo relacionado con el ABC?</strong>
            <br>A través de la cuenta oficial del ABC UNAM en Instagram: <a href="https://www.instagram.com/abc.unam/?hl=es" target="_blank">@abc.unam</a>, y en las redes de la Dirección General de Atención a la Comunidad, la Coordinación Universitaria para la Sustentabilidad y la Dirección General de Servicios Generales y Movilidad de la UNAM.  
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
