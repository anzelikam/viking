<template>
  <div class="q-ma-md text-dark">
    <p>Brza dostava-garantovani kvalitet!</p>
    <br>
    <q-btn color="accent" rounded-borders  size="20px" label="Proizvodi" class="self-center q-ma-sm" to="/shop"/>
    <h5>KONTAKT</h5>
      <p> <q-icon name="location_on" size="25px" color="accent"/> Aleksandar Saša Tomin <br>
      Đure Jakšića 38 26350 Samoš
      </p>
      <p> <q-icon name="phone" size="25px" color="accent"/> 064/496-22-41 -Saša</p>
      <p> <q-icon name="email" size="25px" color="accent"/> viking.samos@gmail.com</p>
      <br>
      <btnSocialGroups></btnSocialGroups>
   
  </div>
  
</template>
 
<script>
  export default {
     data() {
         return {

         }
     },
     components: {
         'btnSocialGroups' : require('components/Buttons/btnSocialGroups.vue').default
     }
  }     
</script>

<style>
</style>