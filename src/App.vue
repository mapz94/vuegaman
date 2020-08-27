<template>
  <v-app style="background-color: #202030" dark>
      <v-btn width="80" height="80" dark color="#202030"><v-icon large>mdi-menu</v-icon></v-btn>
      <div class="containers">
          <div class="content-container">
            <div class="overlay-left">
              <div class="item-content-title">Contenido A</div>
            </div>
          </div>
          <Logo style="margin-left: 1%; margin-right: 1%; margin-bottom: 10%;"/>
            <div style="margin-top: -6%;" class="content-container">
              <div class="overlay-right">
                <div class="item-content-title">Contenido B</div>
              </div>
            </div>
      </div>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return{
    }
  },
  components:{
    Logo : () => import("@/components/TheLogo")
  },
  methods:{
    handleResize() {
      this.$store.state.window.width = window.innerWidth;
      this.$store.state.window.height = window.innerHeight;
    },
  },
  created(){
    window.addEventListener('resize', this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize);
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Yanone+Kaffeesatz:wght@600&display=swap');

.containers{
  display: flex;
}


.overlay-left{
  width:100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s ease;
  opacity: 0.9;
  background: rgb(54,26,48);
  background: linear-gradient(90deg, rgba(54,26,48,1) 0%, rgba(123,47,75,1) 44%, rgba(219,67,105,1) 100%);
}
.overlay-right{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s ease;
  opacity: 0.9;
  background: rgb(54,26,48);
  background: linear-gradient(270deg, rgba(54,26,48,1) 0%, rgba(123,47,75,1) 44%, rgba(219,67,105,1) 100%);
}

.overlay-left:hover{
  opacity: 0.5;
}

.overlay-right:hover{
  opacity: 0.5;
}

.content-container{
  overflow:visible;
  display: flex;
  height: 100%;
  width: 60%;
  float: left;
  position:relative;
  background-color: white;
}

.item-content-title{
  z-index: 1;
  font-family: 'Yanone Kaffeesatz', sans-serif;
  background-color: transparent;
  text-shadow: 3px 5px 2px black;
  color: white;
  font-size: 3vw;

}


</style>