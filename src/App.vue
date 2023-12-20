<template>
  <div id="app">
    <ConversorComponent moeda-a="USD" moeda-b="BRL"/>
  </div>
</template>


<script>
import ConversorComponent from "./components/ConversorComponent.vue"
export default {
  name: 'App',
  components: {
    ConversorComponent
  } 
}




</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
