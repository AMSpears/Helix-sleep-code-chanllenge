<template>
  <div id="header-container">
    <h1>Header goes here</h1>
    <div id = "nav">
        <router-link to="/the-sofa"> The Sofa</router-link>
        <router-link to="/reviews">Reviews</router-link>
        <router-link to ="/about-us"> About Us</router-link>
        <router-link to= "/">ALL DAY</router-link>
        <router-link to= "/showroom">Showroom</router-link>
        <router-link to="/swatches"> Swatches</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>

</script>

<style lang="scss">

</style>
