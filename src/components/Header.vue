<template>
  <div id="header-container">
    <div id = "nav">
      <div id = 'menu-icon' @click="openMenu">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <div>
        <router-link id = 'mobile-logo' to= "/"><img src="../assets/logo.svg"></router-link>
      </div>
      <div id = 'nav-links-overlay'>
         <a href="#" id = 'close-btn' @click="closeMenu">&times;</a>
        <div id = 'nav-links' @click="closeMenu">
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
    openMenu() {
      const links = document.getElementById('nav-links')
      const overlay = document.getElementById('nav-links-overlay')
      if (window.innerWidth < 1024) {
        overlay.style.width = '100%'
        links.style.display = 'flex'
      }


    },
    closeMenu() {
      const links = document.getElementById('nav-links')
      const overlay = document.getElementById('nav-links-overlay')
      if (window.innerWidth < 1024) {
        links.style.display = 'none'
        overlay.style.width = '0%'
      }
    }
  }
}
</script>
<style lang="scss" scoped src = './style/header.scss'/>

