<template>
  <div class="container-logo">
    <div class="brand-name">GAMAN</div>
    <img class="logo-filter" src="@/assets/logo_gaman_horse.svg"/>
  </div>
</template>

<script>
export default {
    data(){
        return{
        }
    }
}
</script>

<style>
.container-logo{
    display: flex;
    justify-content: center;
    align-items: center;
}
.brand-name{
    font-family: 'Yanone Kaffeesatz', sans-serif;
    font-size: 2rem;
    z-index: 1;
    display: flex;
    color: white;
    position: fixed;
    top: 18%
}

.logo-filter{
  object-fit: contain;
  display: flex;
  animation: hue-rotation 7s ease 0s infinite;
}

@keyframes hue-rotation {
    25%{
      filter: hue-rotate(90deg)
    }
    50%{
      filter: hue-rotate(180deg)
    }
    75%{
      filter: hue-rotate(270deg)
    }
    100%{
      filter: hue-rotate(360deg)
    }
  }

</style>