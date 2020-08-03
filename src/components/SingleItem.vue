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
      <div id = 'sofa-preview'><img src = '../assets/sofa-red.jpg' alt = 'Red Sofa'></div>
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
      <div id = 'product-description'>
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
        <button id = 'add-to-cart-btn' type = 'submit'> ADD TO CART</button>
        <div><a id  = 'save-design-link' href = '#'> Save design for later</a></div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped src ='./style/singleItem.scss'>
