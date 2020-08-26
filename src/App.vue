<template>
  <v-app style="background-color: rgb(32,32,48)">
    <div style="color: white; font-size: 3vw; text-align: center;">GAMAN</div>
    <img class="logo-filter" src="@/assets/logo_gaman_horse.svg"/>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return{
      hue: 180,
    }
  },
  components: {

  },
  methods:{

  },
  computed:{

  }

};
</script>

<style>
.logo-filter{
  animation: hue-rotation 4s ease 0s infinite;
}



@keyframes hue-rotation {
    0%,
    5%{
      filter: hue-rotate(18deg)
    }    10%{
      filter: hue-rotate(36deg)
    }    15%{
      filter: hue-rotate(54deg)
    }    20%{
      filter: hue-rotate(72deg)
    }    25%{
      filter: hue-rotate(90deg)
    }    30%{
      filter: hue-rotate(108deg)
    }    35%{
      filter: hue-rotate(122deg)
    }    40%{
      filter: hue-rotate(140deg)
    }    45%{
      filter: hue-rotate(158deg)
    }    50%{
      filter: hue-rotate(172deg)
    }    55%{
      filter: hue-rotate(190deg)
    }    60%{
      filter: hue-rotate(208deg)
    }    65%{
      filter: hue-rotate(226deg)
    }    70%{
      filter: hue-rotate(244deg)
    }    75%{
      filter: hue-rotate(272deg)
    }    80%{
      filter: hue-rotate(290deg)
    }    85%{
      filter: hue-rotate(308deg)
    }    90%{
      filter: hue-rotate(326deg)
    }    95%{
      filter: hue-rotate(344deg)
    }    100%{
      filter: hue-rotate(360deg)
    }
    
  }

</style>