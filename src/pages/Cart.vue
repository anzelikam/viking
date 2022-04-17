<template>
<q-page>

   <q-parallax
      class="bg-dark"
      :height="330"
      src="images/bg/global-background.png" 
    >
      <h2 class="text-white text-weight-medium q-pl-sm">KORPA</h2>
      <p class="paralaxHeader"><a class="text-h4 text-weight-bold text-accent" href="/">POČETNA /</a><span class="text-h4 text-weight-bold text-secondary"> KORPA</span></p>
      <span><img src="images/bg/global-background-shape-2.png" class="shape"/></span>
    </q-parallax>
    
    
    <!-- cart area start 
        <div class="cart-area pt-120 pb-120">
            <div class="container" >
                <div class="row">
                    <div class="col-xl-12">
                        <div class="cart-wrapper">
                            <div class="table-content table-responsive">
                                <table class="table">
                                    <thead>
                                        <tr>
                                            <th class="product-thumbnail">Proizvod</th>
                                            <th class="cart-product-name">Ime</th>
                                            <th class="product-price">Cena</th>
                                            <th class="product-quantity">Količina</th>
                                            <th class="product-subtotal">Ukupno</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(item,index) in korpa" :key="index">
                                            <td class="product-thumbnail">
                                                <a href="#" class="img">
                                                    <img :src="'assets/images/products/small/' + proizvodi[item.id].slika" alt="image_not_found">
                                                </a>
                                                <a class="product-remove" @click="obrisiIzKorpe(index)"><i class="fal fa-times"></i></a>
                                            </td>
                                            <td class="product-name "><a href="#">{{ proizvodi[item.id].ime }}</a></td>
                                            <td class="product-price"><span class="amount">{{ proizvodi[item.id].cena }} din</span></td>
                                            <td class="product-quantity">
                                                <input type="number" v-model="item.kolicina" @change="kolicinaPromenjena(item)">
                                            </td>
                                            <td class="product-subtotal"><span class="amount">{{ item.kolicina * proizvodi[item.id].cena }}din</span></td>
                                  
                                            
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-end">
                    <div class="col-xl-5 col-lg-7">
                        <div class="cart-total mt-100">
                            <h2 class="title">Ukupan Iznos</h2>
                             <div class="ct-sub ct-sub__total">
                                <span>Ukupno</span>
                                <span>{{ getSumaKorpe() }}din</span>
                            </div>
                            <a href="checkout.html" class="site-btn">Nastavi kupovinu</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         cart area end -->

    <div class="row q-mt-lg q-pl-lg q-pr-lg">
      <div class="col-xs-12 col-sm-2 col-md-2"></div>
      <div class="col-xs-12 col-sm-8 col-md-8">
          
          
    <!--start input-form-->
   
       
 <!--<table style="width: 100%;">
  <tr>
    <th>PROIZVOD</th>
    <th>IME</th>
    <th>CENA</th>
    <th>KOLIČINA</th>
    <th>UKUPNO</th>
  </tr>
 
 <tr v-for="(proizvod,index) in proizvodiUkorpi" :key="index">
                                            <td class="product-thumbnail">
                                                    <img :src="'images/products/small/'+ proizvod.slika" alt="image_not_found" class="slikaKorpa"/>    
                                            </td>
                                            <td class="product-name ">{{ proizvod.ime }}</td>
                                            <td class="product-price"><span class="amount">{{ proizvod.cena }} din</span></td>
                                            <td class="product-quantity">
                                                <q-input borderless type="number" v-model="proizvod.kolicina" @change="kolicinaPromenjena(item)" style="width: 80px;"/>
                                            </td>
                                            <td class="product-subtotal"><span class="amount">{{ proizvod.kolicina * proizvod.cena }}din</span></td>
                                            <q-btn icon="close"  @click="obrisiIzKorpe(index)" flat round dense color="accent" />
                                  
                                            
                                        </tr>

  
  
</table><br><br>-->
  <div class="q-pa-md">
    <q-markup-table style="margin-top: 50px;">
      <thead>
        <tr>
          <th class="text-left">PROIZVOD</th>
          <th class="text-right">IME</th>
          <th class="text-right">CENA</th>
          <th class="text-right">KOLIČINA</th>
          <th class="text-right">UKUPNO</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(proizvod,index) in korpa" :key="index">
          <td class="text-left"><img :src="'images/products/small/'+ proizvod.slika" alt="image_not_found" class="slikaKorpa"/>  </td>
          <td class="text-right">{{ proizvod.ime }}</td>
          <td class="text-right">{{ proizvod.cena }} din</td>
          <td style="width: 70px; padding-left: 15px;"><q-input borderless type="number"/></td>
          <td class="text-right">{{ proizvod.kolicina * proizvod.cena }}din</td>
          <q-btn icon="close"  @click="deleteFromCart(index)" flat round dense color="accent" />
        </tr>  
      </tbody>
    </q-markup-table>  
  </div>
  <br><br><br><br>
  <q-field filled disable  class="q-pa-md" style="width: 400px; float:right;">
    <template v-slot:control>
      <div class="self-center no-outline" tabindex="0">Ukupno</div>
    </template>
    <template v-slot:append>
      <span>getSumOfCart</span>  din
    </template> 
  </q-field>
  <div class=" q-pa-md" style="margin-top: 100px;">
    <q-btn color="accent" rounded-borders  size="20px"  style="float: right;" label="NASTAVI KUPOVINU" class="self-center" type="submit" to="/checkout"/>
  </div>
  <br><br><br><br>
  <!--end input-form-->
        </div>
      <div class="col-xs-12 col-sm-2 col-md-2"></div>
    </div>
        
</q-page>
  
</template>

<script>
import { defineComponent, computed} from 'vue';
import { useStore } from 'vuex'


export default defineComponent({
   setup () {

   const korpa = []
   const store = useStore()
   const cart = computed(() =>  {
     this.$store.commit('cart')
     this.korpa = this.cart.find(e => e.id === id)
     
   })

   function deleteFromCart(state, id) {
     const index = state.cart.findIndex(e => e.id === id)
     if (index !== -1) { // nadjen element
     state.cart.slice(index, 1)}
   }

   return  {
     korpa,
     store,
     cart,

     deleteFromCart

   }
   }

 
})

</script>


