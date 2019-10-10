<template>
  <div>
    <ul>
      <li v-for='precio in precios' :key="precio">
        <span>{{precio}}</span>
        <span>{{info}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
    import preciosBitsoApi from '@/services/preciosBitsoApi.js'
export default {
  data () {
    return {
      precios: [],
      info: null
    }
  },
  created () {
    this.loadPrecios()
  },
     
  
  methods: {
    async loadPrecios () {
      const response = await preciosBitsoApi.getPrecios()
      this.precios = response.data
    }
  }
}
</script>


<style scoped>

</style>