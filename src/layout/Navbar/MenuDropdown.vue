<template>
    <div id="example-1" class='example1'>
      <button @click="show = !show">
        {{btnText}}
      </button>
      <transition name="slide">
        <aside v-show="show"><SideNav /></aside>
      </transition>
    </div>
</template>

<script>
import SideNav from '../Sidenav/Sidenav.vue';

export default {
  el: 'example-1',
  data () {
    return {
      show: false
    }
  },
	computed: {
      btnText: function() {
        if(this.show) {
          return '✕'
        }
          return '☰'
      }
  },
  components: {
    SideNav
  }
}
</script>

<style scoped>
button {    
    height: 100%;
    width: 60px;
    font-size: 22px;
    background: slategrey;
    border-radius: 12px;
    border: solid #9e9e9e 1px;
    color: white;
}

.slide-enter-active {
	transition: all .3s cubic-bezier(0.215, 0.61, 0.355, 1);
}

.slide-leave-active {
	transition: all .1s ease;
}
.slide-enter, .slide-leave-active {
  transform: translateX(100%);
}

aside {
	width: 200px;
	height: 100vh;
	background: white;
	position: fixed;
	top: 0;
  left: 0;
}

@media (min-width: 900px){
  .example1{
    display: none;
  }
}

</style>

