<template>
  <div class="text-primary bg-dark" style="width: 100%;">
      <div class="greyLine"></div>
      <div class="row">
          <div class="col-xs-5 col-sm-5 col-md-5"></div>
        <div class="col-xs-2 col-sm-2 col-md-2 text-center q-pt-lg" >
            <q-page-scroller position="bottom" :scroll-offset="150" :offset="[18, 18]">
         <q-btn fab icon="keyboard_arrow_up" color="accent" />
          </q-page-scroller>
       
     </div>
     <div class="col-xs-5 col-sm-5 col-md-5"></div>
      </div>
      <br><br><br>
      <div class="row q-pl-md">
        <div class="col-xs-12 col-sm-12 col-md-2 text-secondary"></div>
      <div class="col-xs-12 col-sm-12 col-md-8 text-secondary">
          <div class="text-left q-pl-lg" style="font-size: 18px;">
            <p class="text-primary"> <q-icon name="location_on"  size="30px" color="accent"/> Aleksandar Saša Tomin <br>
      Đure Jakšića 38 26350 Samoš
      </p><br>
      <p class="text-primary"> <q-icon name="phone" size="30px" color="accent"/> 064/496-22-41 -Saša</p><br>
      <p class="text-primary"> <q-icon name="email" size="30px" color="accent"/> viking.samos@gmail.com</p>
          </div>
           
      <br>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-2 text-secondary"></div>
      </div><br><br><br>

      <div class="row q-pl-md">
       
        <div class="col-xs-12 col-sm-6 col-md-6 text-secondary text-center">
           <img src="icons/logo.png" size="100%"/>
            <p class="q-pl-lg " style="font-size: 18px; ">Brza dostava, garantovani kvalitet. </p>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 text-secondary self-center">
          <btnSocialGroups></btnSocialGroups>
        </div>
      </div>
      <br><br><br>
      <div class="greyLine"></div>
      <br><br><br>

     <div class="row q-pl-md">
          <div class="col-xs-12 col-sm-6 col-md-6 text-secondary text-center">
           <q-btn flat style="color: secondary" label="Početna" to="/"/>
           <q-btn flat style="color: secondary" label="Proizvodi" to="/shop"/>
           <q-btn flat style="color: secondary" label="Galerija" to="/gallery"/>
        </div>
        <div class="col-xs-12 col-sm-6 col-md-6 text-secondary text-center self-center">
          <div  style="font-size: 18px; ">Copyright &copy; 2022 Viking</div>
        </div>
      </div>
      <br><br><br>
       
      
     
  </div>
</template>

<script>
 export default {
     data() {
         return {

         }
     },
     components: {
         'btnSocialGroups' : require('components/Buttons/btnSocialGroups.vue').default,
     }
 }
</script>


<style>

     
</style>
