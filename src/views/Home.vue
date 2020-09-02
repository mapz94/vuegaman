<template>
  <div style="width:100%; height:100%">
   <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#7B2F4B" width="80" height="80" dark v-bind="attrs" v-on="on"> MENU </v-btn>
      </template>
      <v-list color="#7B2F4B" dark>
        <v-list-item style="width: 100%" three-line v-for="(item, index) in items" :key="index">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
      
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
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return{
      items: [
        { title: 'Nosotros' },
        { title: 'Servicios' },
        { title: 'Contacto' },
      ],
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
  opacity: 1;
  border-style: solid;
  border-color: cyan;
  background-color: #202030;
}
.overlay-right{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: .5s ease;
  opacity: 1;
  border-style: solid;
  border-color: cyan;
  background-color: #202030;
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