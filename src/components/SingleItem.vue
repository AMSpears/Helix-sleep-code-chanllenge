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
      <div>
        <h1>The Sofa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui interdum, tincidunt velit sit amet.</p>
        <div>
          <div>
            <p>Pay Now $1,250 $1,450 $200 OFF with code</p>
          </div>
          <div>
            <p>Pay as low as $25/month with Klarna <a href="#">Learn More</a></p>
          </div>
        </div>
        <button type = 'submit'> ADD TO CART</button>
        <a href = '#'> Save design to continue</a>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  #single-product-container {
    display: flex;
    .product-view-container {
      #details-container {
        display: flex;
        justify-content: space-between;

        .details {
          &.first {
            display: flex;
          }
          p {
            color: #4B4B4B;
            font-size: 17px;
            font-family: 'Raleway', sans-serif;
            margin: 0 5px;
          }
        }
      }
    }
    #sofa-preview {
      img {
        max-width: 1200px;
      }
    }
    #deals-details {
      display: flex;
      div {
        margin: 0 32px;
      }
    }
  }
</style>
