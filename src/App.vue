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
    background-color: #F2F2F2;
    box-sizing: border-box;
    margin:0;
    padding:0;
    overflow: hidden;
  }
  #app {
    font-family: 'Bungee', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  body {
    max-width: 2000px;
    width: auto !important;
    width: 2000px;
    margin: auto;
  }
</style>
