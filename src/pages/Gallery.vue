<template>
  <q-page class="main">
  
    <q-parallax
      class="bg-dark"
      :height="330"
      
    >
      <h2 class="text-white text-weight-medium q-pl-sm">GALERIJA</h2>
      <p class="paralaxHeader"><a class="text-h4 text-weight-bold text-accent" href="/">POČETNA /</a><span class="text-h4 text-weight-bold text-secondary"> GALERIJA</span></p>
    </q-parallax>
   
     <div class="facebookGallery">
       <div class="row fgRow">
                    <div class="column fgCol">
                      <img src="images/gallery/gallery-1.jpg">
                      <img src="images/gallery/gallery-2.jpg">
                      <img src="images/gallery/gallery-3.jpg">
                      <img src="images/gallery/gallery-4.jpg">
                      <img src="images/gallery/gallery-5.jpg">
                      <img src="images/gallery/gallery-6.jpg">
                      <img src="images/gallery/gallery-7.jpg">
                      <img src="images/gallery/gallery-8.jpg">
                      <img src="images/gallery/gallery-9.jpg">
                      <img src="images/gallery/gallery-10.jpg">
                    </div>
                    <div class="column fgCol">
                        <img src="images/gallery/gallery-11.jpg">
                        <img src="images/gallery/gallery-12.jpg">
                        <img src="images/gallery/gallery-13.jpg">
                        <img src="images/gallery/gallery-14.jpg">
                        <img src="images/gallery/gallery-15.jpg">
                        <img src="images/gallery/gallery-16.jpg">
                        <img src="images/gallery/gallery-17.jpg">
                        <img src="images/gallery/gallery-18.jpg">
                        <img src="images/gallery/gallery-19.jpg">
                        <img src="images/gallery/gallery-35.jpg">
                    </div>
                    <div class="column fgCol">
                      <img src="images/gallery/gallery-20.jpg">
                      <img src="images/gallery/gallery-21.jpg">
                      <img src="images/gallery/gallery-22.jpg">
                      <img src="images/gallery/gallery-23.jpg">
                      <img src="images/gallery/gallery-24.jpg">
                      <img src="images/gallery/gallery-25.jpg">
                      <img src="images/gallery/gallery-26.jpg">
                      <img src="images/gallery/gallery-27.jpg">
                      <img src="images/gallery/gallery-28.jpg">
                      <img src="images/gallery/gallery-37.jpg">
                      <img src="images/gallery/gallery-36.jpg">
                    </div>
                    <div class="column fgCol">
                        <img src="images/gallery/gallery-29.jpg">
                        <img src="images/gallery/gallery-30.jpg">
                        <img src="images/gallery/gallery-31.jpg">
                        <img src="images/gallery/gallery-32.jpg">
                        <img src="images/gallery/gallery-33.jpg">
                        <img src="images/gallery/gallery-34.jpg">
                     
                  </div>

            </div>
            <br><br><br>
     </div>
    
    
            
  </q-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import gallery from '../data/gallery'

  export default defineComponent({
    setup () {

      return {
        gallery
      }
    }
  })
</script>
<style>
  
</style>

