<template>
  <div id="app">
    <Header/>
    <SingleProduct/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import SingleProduct from './views/SingleProduct'

  export default {
    components: {
      Header,
      SingleProduct
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

  #app {
    font-family: 'Bungee', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
