<template>
<div>
    <h1>D3.js example</h1>
  <div id='app'>
    <d3-network :net-nodes="nodes" :net-links="links" :options="options" />
  </div>
  </div>
</template>

<script>
/* globals window, requestAnimationFrame */
import D3Network from 'vue-d3-network'

export default {
  el: 'app',
  components: {
    D3Network
  },
  data () {
   return {
      nodes: [
        { id: 1, name: 'my node 1' },
        { id: 2, name: 'my node 2' },
        { id: 3, _color:'green' },
        { id: 4,  name: 'my node 4'  },
        { id: 5 },
        { id: 6 },
        { id: 7 },
        { id: 8 },
        { id: 9 }
      ],
      links: [
        { sid: 1, tid: 2, _color:'red' },
        { sid: 2, tid: 8, _color:'f0f' },
        { sid: 3, tid: 4, _color:'#42b983' },
        { sid: 4, tid: 5, _color:'#42b983'  },
        { sid: 5, tid: 6, _color:'#42b983'  },
        { sid: 7, tid: 8, _color:'#42b983'  },
        { sid: 5, tid: 8, _color:'#42b983'  },
        { sid: 3, tid: 8, _color:'#42b983'  },
        { sid: 7, tid: 9, _color:'#42b983'  }
      ],
      options:
      {
        force: 30000,
        nodeSize: 20,
        nodeLabels: true,
        linkWidth:2
      }
    }
  },
}
</script>

<style>
.net svg {
    height: 38vh;
    width: 100%;
    margin-bottom: 30px;
}
</style>


