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

<style lang="scss" scoped>
  #nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    margin: 35px;

    .links {
       a {
        margin: 0 24px 0 0;
        text-decoration: none;
        color: #4B4B4B;
        font-size: 16px;

        &.router-link-exact-active, &:hover {
          border-bottom: 3px solid #0D6EF0;
          border-radius: 2px;
        }
      }
    }
  }
</style>
