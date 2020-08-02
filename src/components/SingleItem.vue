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
        <h1>The Sofa</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ac dui interdum, tincidunt velit sit amet.</p>
        <div id = 'product-description-deals'>
          <p>Pay Now <span class= 'deal-highlight'>$1,250</span><span id ='old-price'> $1,450 </span><br> <small class= 'cta-text'>$200 OFF with code</small></p>
          <div id = 'divider'></div>
          <p>Pay as low as <span class= 'deal-highlight'>$25/month</span> with Klarna <a href="#" class= 'cta-text'>Learn More</a></p>
        </div>
        <button id = 'add-to-cart-btn' type = 'submit'> ADD TO CART</button>
        <a id  = 'save-design-link' href = '#'> Save design to continue</a>
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
    margin: 35px;

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
      #product-description {
        display: flex;
        flex-direction: column;
        text-align: center;
        padding:  0 20px;
        h1 {
          font-size: 40px;
          color: #0547A0;
          text-align: left;
          margin-bottom: 10px;
        }
        p {
          color: #4B4B4B;
          font-size: 16px;
          font-family: 'Raleway', sans-serif;
          text-align: left;
          margin: 0;
        }

        #product-description-deals {
          display: flex;
          justify-content: center;
          margin: 25px 0;
          p {
            max-width: 211px;
            font-size: 25px;
            text-align: center;
            padding: 0 50px;

            .deal-highlight {
              font-size: 34px;
              color:#ef0e11;
              font-weight: bold;
            }

            #old-price {
              text-decoration: line-through;
            }
            .cta-text {
              font-size: 10px;
              color: #4B4B4B;
            }
          }
          #divider {
            border-left: 2px solid #ffffff;
            height: inherit;
          }
        }
        #add-to-cart-btn {
          background-color: #0D6EF0;
          color: #ffffff;
          border-radius: 6px;
          border: none;
          padding: 14px;
          font-size: 20px;
          font-family: 'Bungee', cursive;
        }
        #save-design-link {
          color: #444444;
          font-size: 14px;
          font-family: 'Bungee', cursive;
          text-decoration: underline solid #0D6EF0;
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
