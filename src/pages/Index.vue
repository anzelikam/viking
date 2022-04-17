<template>
<q-page>
   <!-- <div class="row">
      <div class="col animate__animated animate__fadeOutRight postload"></div>
      <div class="col animate__animated animate__fadeOutLeft postload"></div>
      <div class="col animate__animated animate__fadeOutRight postload"></div>
      <div class="col animate__animated animate__fadeOutLeft postload"></div>
      <div class="col animate__animated animate__fadeOutRight postload"></div>
      <div class="col animate__animated animate__fadeOutLeft postload"></div>
      <div class="col animate__animated animate__fadeOutRight postload"></div>
      <div class="col animate__animated animate__fadeOutLeft postload"></div> 
      <div class="">
    <q-btn color="teal" @click="showLoading" label="Show Loading" />
  </div>
    </div>-->

    <!-- preloader  -->
  <!-- <div id="preloader">
        <div id="ctn-preloader" class="ctn-preloader">
            <div class="animation-preloader">
                <div class="spinner"></div>
                <div class="txt-loading">
                    <span data-text-preloader="V" class="letters-loading">
                        V
                    </span>
                    <span data-text-preloader="I" class="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="K" class="letters-loading">
                        K
                    </span>
                    <span data-text-preloader="I" class="letters-loading">
                        I
                    </span>
                    <span data-text-preloader="N" class="letters-loading">
                        N
                    </span>
                    <span data-text-preloader="G" class="letters-loading">
                        G
                    </span>
                </div>
            </div>
            <div class="loader">
                <div class="row">
                    <div class="col animate__animated animate__fadeOutRight postload">
                        <div class="bg"></div>
                    </div>
                    <div class="col animate__animated animate__fadeOutRight postload">
                        <div class="bg"></div>
                    </div>
                    <div class="col animate__animated animate__fadeOutRight postload">
                        <div class="bg"></div>
                    </div>
                    <div class="col animate__animated animate__fadeOutRight postload">
                        <div class="bg"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>-->
    <!-- preloader end -->
    
    

  <div class="bg-dark q-pa-lg">
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-1 text-secondary"></div>
      <div class="col-xs-12 col-sm-12 col-md-5 text-secondary">
        <div class="self-center">
          <h2 class="text-left">VIKING<br> AUTO KOZMETIKA</h2>
          <p class="text-left text-primary paragraf">Za vrhunsku negu i zaštitu vašeg automobila koristite auto-kozmetiku VIKING.</p>
          <q-btn color="accent" rounded-borders  size="20px" label="Proizvodi" class="self-center q-ma-sm" to="/shop"/>
          <q-btn color="white" rounded-borders outline size="20px" label="Kontakt" class="self-center q-ma-sm" to="/contact"/>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-5 text-center q-mt-md">
        <img src="images/home/welcome-image.jpg" class="homeImage"/>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-1 text-secondary"></div>
    </div>
  
     <br><br><br><br>

    <div class="row ">
      <div class="col-xs-12 col-sm-12 col-md-1 text-secondary"></div>
      <div class="col-xs-12 col-sm-12 col-md-10 text-secondary">
        <div class="row">
          <div class="col-xs-12 col-sm-6 col-md-6 text-center"><img src="images/home/home-1.jpg" class="homeImage"/></div>
          <div class="col-xs-12 col-sm-6 col-md-6 text-right">
            <h3 class=" headerBold">ZAŠTO KOZMETIKA VIKING</h3>
            <p class="paragraf text-primary">U našem prodajnom programu naćićete sve proizvode neophodne za duži vek karoserije i unutrašnjosti vašeg četvorotočkaša, počev od osveživača prostora pa do sredstava za zaštitu boje i pneumatika.</p>
            <q-btn class="headerThin" size="20px">NAŠA PRIČA</q-btn>
            <a href="https://www.facebook.com/search/top?q=glat%20autodetailing" style="text-decoration: none;" target="_blank"><q-btn round  outline size="20px" color="primary" icon="play_arrow"/></a>
          </div>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-1 text-secondary"></div>
    </div>

    <br><br><br><br>
    <!--popup dialog-->
    <div class="q-pa-sm">
      <q-dialog
        v-model="dialogProducts"
        transition-show="slide-up"
        transition-hide="slide-down" >
        <product-info
          :proizvod="proizvodInfo"
          v-on:dodaj-u-korpu="dodajUKorpu"
        />
      </q-dialog>
    </div>
    <!--end popup-dialog-->



    <div class="row ">
      <div class="col-xs-12 col-sm-12 col-md-2 text-secondary"></div>
      <div class="col-xs-12 col-sm-12 col-md-8 text-secondary">
        <div class="self-center">
          <q-btn color="accent" rounded-borders  size="18px" label="Popularni Proizvodi" class="self-center q-ma-sm" to="/shop"/>
          <h3 class="text-left headerBold">VIKING POPULARNI PROIZVODI</h3> 
          <!--start gallery-->
          <div class="row text-center"> 
            <div class="gallery" v-for="(proizvod, index) in topProizvodi" :key="index">
              <product
                :proizvod="proizvod"
                v-on:show-product-info="showProductInfo"
                v-on:dodaj-u-korpu="dodajUKorpu"
              />
            </div>
          </div>
          <!--end gallery-->
          <br><br><br>
        </div>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-2 text-secondary">
        <q-btn color="accent" rounded-borders  size="20px" label="Svi Proizvodi" class="self-center q-ma-sm" to="/shop"/>
      </div>
    </div>   
  </div>

</q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import topProizvodi from '../data/topProizvodi'
import myFooter from 'src/components/Footer.vue'
import ProductInfo from 'src/components/ProductInfo.vue'
import Product from 'src/components/Product.vue'
import { useStore } from 'vuex'

export default defineComponent({

  components: { myFooter, ProductInfo, Product },

  setup () {
    const name = ref('PageIndex')
    const visible = ref(false)
    const kolicina = ref(1)
    const dialogProducts = ref(false)
    const proizvodInfo = ref()

    const store = useStore()


    function showProductInfo (value) {
      proizvodInfo.value = topProizvodi.find(e => e.id === value)
      dialogProducts.value = true
    }

    

    function dodajUKorpu(id, kolicina = 1) {
      const proizvod = topProizvodi.find(e => e.id === id)
      store.commit('cart/addToCart',{ proizvod, kolicina })
    }
    

        return {
          name,
          visible,
          kolicina,
          topProizvodi,
          dialogProducts,
          proizvodInfo,
          showProductInfo,
          dodajUKorpu


        }
   
  },
  
 
})
</script>


