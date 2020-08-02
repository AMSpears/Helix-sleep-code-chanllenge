<template>
  <div id="app">
    <Header/>
  </div>
</template>

<script>
  import Header from './components/Header'

  export default {
    components: {
      Header
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');
  * {
    background-color: #E5E5E5;
  }
  #app {
    font-family: 'Bungee', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
</style>
