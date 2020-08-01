<template>
  <div id="app">
    <Header/>
    <SingleItem/>
  </div>
</template>

<script>
  import Header from './components/Header'
  import SingleItem from './components/SingleItem'

  export default {
    components: {
      Header,
      SingleItem
    }
  }
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css2?family=Bungee&display=swap');

  #app {
    font-family: 'Bungee', cursive;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
