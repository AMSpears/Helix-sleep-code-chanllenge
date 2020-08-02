<template>
  <div id='single-product-container'>
    <div id = 'product-view-container'>
      <div id = 'details-container'>
        <div class = 'details first'>
          <img src = '../assets/padlock.svg' alt = 'padlock'>
          <p>Secure checkout</p>
        </div>
        <div class = 'details'>
          <p>Ships in 5-7 Business Days</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');
  #single-product-container {
    #product-view-container {
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
  }
</style>
