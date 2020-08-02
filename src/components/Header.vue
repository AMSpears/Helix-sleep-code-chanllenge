<template>
  <div id="header-container">
    <div id = "nav">
      <div class= "links">
        <router-link to="/the-sofa"> The Sofa</router-link>
        <router-link to="/reviews">Reviews</router-link>
        <router-link to ="/about-us"> About Us</router-link>
      </div>
      <div>
        <router-link to= "/"><img src="../assets/logo.svg"></router-link>
      </div>
      <div class= "links">
        <router-link to= "/showroom">Showroom</router-link>
        <router-link to="/swatches"> Swatches</router-link>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<style lang="scss" scoped src = './style/header.scss'/>

