<template>
  <div id="header-container">
    <div id = "nav">
      <div id = 'menu-icon' @click="toggleMenu">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <router-link id = 'mobile-logo' to= "/"><img src="../assets/logo.svg"></router-link>
      </div>
      <div id = 'nav-links-overlay'>
         <a href="javascript:void(0)" id = 'close-btn' @click="toggleMenu">&times;</a>
        <div id = 'nav-links' @click="toggleMenu">
          <div class = 'links'>
            <router-link to="/the-sofa"> The Sofa</router-link>
            <router-link to="/reviews">Reviews</router-link>
            <router-link to ="/about-us"> About Us</router-link>
          </div>
           <div id = 'logo'>
            <router-link to= "/"><img src="../assets/logo.svg"></router-link>
          </div>
          <div class = 'links'>
            <router-link to= "/showroom">Showroom</router-link>
            <router-link to="/swatches"> Swatches</router-link>
          </div>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>
<script>
export default {
  methods: {
    toggleMenu() {
      const links = document.getElementById('nav-links')
      const overlay = document.getElementById('nav-links-overlay')

      if (window.innerWidth < 1024) {
        if (overlay.style.width === '0%') {
          overlay.style.width = '100%'
        } else {
          overlay.style.width = '0%'
        }
      }
    }
  }
}
</script>
<style lang="scss" scoped src = './style/header.scss'/>

