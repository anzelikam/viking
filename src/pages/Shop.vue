<template>
<q-page>

  <q-parallax
    class="bg-dark"
    :height="330"
    src="images/bg/global-background.png" >
    <h2 class="text-white text-weight-medium">PROIZVODI</h2>
    <p class="paralaxHeader"><a class="text-h4 text-weight-bold text-accent" href="/">POČETNA /</a><span class="text-h4 text-weight-bold text-secondary"> PROIZVODI</span></p>
    <span><img src="images/bg/global-background-shape-2.png" class="shape"/></span>
  </q-parallax>
  

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

  <div class="row">
    <div class="col-xs-12 col-sm-12 col-md-2 text-secondary"></div>
    <div class="col-xs-12 col-sm-12 col-md-8 text-secondary">
      <div class="self-center">
        <q-field outlined stack-label class="q-mr-md">
        <template v-slot:control>
          <div class="full-width no-outline text-primary q-pa-md" tabindex="0" >Prikazano {{ ((page - 1) * this.totalPages + 1) + '-' + Math.min((this.page*this.totalPages),ukupnoProizvoda) }} od {{ ukupnoProizvoda }} rezultata</div>
        </template>
      </q-field>



      <div class="row text-center" v-show="page">
        <div class="gallery" v-for="(proizvod, index) in proizvodi" :key="index">
          <product
            :proizvod="proizvod"
            v-on:show-product-info="showProductInfo"
            v-on:dodaj-u-korpu="dodajUKorpu"
          />
        </div>
      </div>

      <br><br><br>
        </div>
      </div>

      <div class="col-xs-12 col-sm-12 col-md-2 text-secondary">

      </div>
     </div>
     

    <div class="q-pa-lg flex flex-center">
    <q-pagination
      class="q-pb-lg"
      v-model="page"
      :min="currentPage"
      active-color= "accent"
      color="black"
      size= "20px"
      :max="Math.ceil(ukupnoProizvoda / totalPages)"
      :boundary-numbers="false"
      direction-links
    />
  </div>
  </q-page>
</template>

<script>
import { defineComponent, ref, computed, onMounted } from 'vue';
import products from '../data/products'
import ProductInfo from 'src/components/ProductInfo.vue'
import Product from 'src/components/Product.vue'
import { useStore } from 'vuex'

export default defineComponent({

  components: { ProductInfo, Product },

  setup () {
    const page = ref(1)
    const currentPage = ref(1)
    const totalPages = ref(8)
    const dialogProducts = ref(false)
    const kolicina = ref(1)
    const proizvodInfo = ref()
    const ukupnoProizvoda = products.length

    const store = useStore()

    const proizvodi =computed(() => products.slice((page.value - 1) * totalPages.value, page.value * totalPages.value))

    function showProductInfo (value) {
      proizvodInfo.value = products.find(e => e.id === value)
      dialogProducts.value = true
    }

    

    function dodajUKorpu(id, kolicina = 1) {
      const proizvod = products.find(e => e.id === id)
      store.commit('cart/addToCart',{ proizvod, kolicina })
    }
    

    

    return {
      proizvodi,
      ukupnoProizvoda,
      page,
      currentPage,
      totalPages,
      kolicina,
      dialogProducts,
      proizvodInfo,
      showProductInfo,
      dodajUKorpu
    }
  }
})
</script>

<style scoped lang="scss">
</style>
