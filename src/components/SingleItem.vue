<template>
  <div id='single-product-container'>
    <div class = 'product-view-container'>
      <div id = 'details-container'>
        <div class = 'details first'>
          <img src = '../assets/padlock.svg' alt = 'padlock'>
          <p>Secure checkout</p>
        </div>
        <div class = 'details'>
          <p>Ships in 5-7 Business Days</p>
        </div>
      </div>
      <div id = 'sofa-preview'><img id ='preview-img' :src="getImageUrl(currColor)" v-bind:alt="`${currColor} sofa`"></div>
      <div id = 'deals-details'>
        <div><img src = '../assets/free-shipping.svg' alt = 'Free shipping'></div>
        <div><img src = '../assets/trial.svg' alt = '365 Day Trial'></div>
        <div><img src = '../assets/made-in-america.svg' alt = 'Made in America'></div>
        <div><img src = '../assets/warranty.svg' alt = '10 Year Warranty'></div>
        <div><img src = '../assets/assembly.svg' alt = 'Super Easy Assembly'></div>
        <div><img src = '../assets/materials.svg' alt = 'Higth Quality Materials'></div>
      </div>
    </div>
    <div class = 'product-view-container'>
      <div class = 'product-description'>
        <div><h1>The Sofa</h1></div>
        <div><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui interdum, tincidunt velit sit amet.</p></div>

        <div id = 'product-description-deals'>
          <p>
            Pay Now <br>
            <span class= 'deal-highlight'>$1,250</span><br>
            <span id ='old-price'> $1,450 </span><br>
            <small class= 'cta-text'>$200 OFF with code</small>
          </p>
          <div id = 'divider'></div>
          <p>
            Pay as low as <br>
            <span class= 'deal-highlight'>$25/month</span><br>
             with Klarna <br>
             <a href="#" class= 'cta-text'>Learn More</a>
          </p>
        </div>
        <button id = 'add-to-cart-btn' type = 'submit' @click="addToCart"> {{addToCartMsg}}</button>
        <div @click="saveDesign"><a id  = 'save-design-link' href="#"> {{saveDesignMsg}}</a></div>
      </div>
       <div id = 'section-divider'></div>
      <div class = 'product-description'>
        <div><h2>1. Choose a fabric</h2></div>
        <div><p>Choose your choice from fabric to leather</p></div>
        <div><h3>Fabric choices</h3></div>
        <div id = 'fabric-choices-container'>
          <div class = 'fabric-choices' id ='amber' @click=" updateFabricAmber(); activeFabric()">
            <img src ='../assets/sofa-amber.jpg' alt = 'Amber fabric'>
            <span>Amber</span>
          </div>
          <div class = 'fabric-choices' id = 'charcoal' @click="updateFabricCharcoal(); activeFabric()" >
            <img src ='../assets/sofa-charcoal.jpg' alt = 'Charcoal fabric'>
            <span>Charcoal</span>
          </div>
          <div class= 'fabric-choices' :class="this.activeClass" id = 'red' @click=" updateFabricRed(); activeFabric()" >
            <img src ='../assets/sofa-red.jpg' alt = 'Red fabric'>
            <span>Red</span>
          </div>
        </div>
       </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeClass: 'selected-fabric',
      currColor: 'red',
      addToCartMsg: 'add to cart',
      saveDesignMsg: 'Save design for later'
    }
  },
  methods: {
    getImageUrl(color) {
      const images = require.context('../assets/', false, /\.jpg$/)
      return images('./' + `sofa-${color}` + ".jpg")
    },
    activeFabric() {
      const amberFabric = document.getElementById('amber')
      const charcoalFabric = document.getElementById('charcoal')
      const redFabric = document.getElementById('red')

      if (this.currColor === 'amber') {
        redFabric.classList.remove(this.activeClass)
        charcoalFabric.classList.remove(this.activeClass)
        amberFabric.classList.add(this.activeClass)
      }

      if (this.currColor === 'charcoal') {
        amberFabric.classList.remove(this.activeClass)
        redFabric.classList.remove(this.activeClass)
        charcoalFabric.classList.add(this.activeClass)
      }

      if (this.currColor === 'red') {
        amberFabric.classList.remove(this.activeClass)
        charcoalFabric.classList.remove(this.activeClass)
        redFabric.classList.add(this.activeClass)
      }
    },
    updateFabricAmber() {
      this.currColor = 'amber'
    },
    updateFabricCharcoal() {
      this.currColor = 'charcoal'
    },
    updateFabricRed() {
      this.currColor = 'red'
    },
    addToCart() {
      const addToCartBtn = document.getElementById('add-to-cart-btn')
      this.addToCartMsg = 'added to cart'
      addToCartBtn.style.opacity = '0.6'
      setTimeout(() => {
        this.addToCartMsg  = 'add to cart'
        addToCartBtn.style.opacity = '1'
      }, 1000);
    },
    saveDesign(){
      const saveDesignLink = document.getElementById('save-design-link')
      this.saveDesignMsg = 'Saved for later'
      saveDesignLink.style.opacity = '0.6'
      setTimeout(() => {
        this.saveDesignMsg  = 'Save design for later'
        saveDesignLink.style.opacity = '1'
      }, 1000);
    }
  },
}
</script>
<style lang="scss" scoped src ='./style/singleItem.scss'>
