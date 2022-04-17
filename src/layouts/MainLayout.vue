<template>
  <q-layout view="lHh Lpr lFf">

    <!--start upper header-->
   <q-header elevated reveal class="bg-dark">
  <div class="row q-pa-sm q-mt-sm">
    <btnSocialGroups></btnSocialGroups>
  <div class="col-xs-12 col-sm-6 col-md-4 text-center">
    <div><img src="icons/logo.png" class="logoTop"/></div>

  </div>



    <div class="col-xs-12 col-sm-12 col-md-4 text-center self-center q-mb-md">

     <div>
       <q-btn flat round dense icon="fa fa-phone" style='font-size:20px;' color="accent" class="self-center"/><span class="homepagePhone q-ma-sm"> 064/496-22-41</span>
        <q-btn color="accent" rounded-borders size="20px" label="Proizvodi" class="self-center q-ma-sm" to="/shop"/>
     </div>

  </div>
  </div>

  <!--end upper header-->

  <div class="greyLine"></div>

  <!--start bottom header-->
  <div class="row q-pa-lg">
  <div class="col-sm-6 col-md-4 text-center self-center q-mb-md menuBottom" >
    <q-btn flat style="color: secondary" label="Početna" to="/"/>


      <q-btn-dropdown color="dark" label="Prodaja">
      <q-list>
        <q-item clickable v-close-popup to="/shop">
          <q-item-section>
            <q-item-label>Proizvodi</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/cart">
          <q-item-section>
            <q-item-label>Korpa</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/checkout">
          <q-item-section>
            <q-item-label>Poruči</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>


       <q-btn-dropdown color="dark" label="Strane">
      <q-list>
        <q-item clickable v-close-popup to="/category">
          <q-item-section>
            <q-item-label>Kategorije</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/faq">
          <q-item-section>
            <q-item-label>Česta pitanja</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup to="/contact">
          <q-item-section>
            <q-item-label>Kontakt</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>


     <q-btn flat color="secondary" label="Galerija" to="/gallery"/>


  </div>
  <div class="col-xs-6 col-sm-6 col-md-4 text-left">
    <div><img src="icons/logo.png" class="logoBottom"/></div>

  </div>
  <div class="col-xs-6 col-sm-6 col-md-4 text-center self-center">
     <q-btn
            flat
            round
            dense
            icon="search"
            class="q-ma-sm"

            />

       <q-btn
          flat
          round
          dense
          icon="menu"
          class="q-ma-sm"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />


      <q-btn
         flat
         round
         dense
         icon="shopping_cart"
         @click="toggleCartDrawer"
         >

        <q-badge
          v-if="cartNumberOfItems"
          floating
          color="green">{{ cartNumberOfItems }}
        </q-badge>

      </q-btn>
  </div>


  </div>
  <!--end bottom header-->

      </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint=767
      side="right"
      width=320
      bordered
      behavior="mobile"
    >
      <q-list>
        <q-item-label
          header
        >
          <div><img src="icons/logo-black.png"/></div>
        </q-item-label>

<!--start drawer-tab-->


    <div class="" style="max-width: 600px">
      <div>
        <q-tabs
          v-model="tab"
          dense
          class="text-dark"
          active-color="accent"
          indicator-color="accent"
          align="justify"
          narrow-indicator
        >
          <q-tab name="sadrzaj" label="Sadržaj" />
          <q-tab name="info" label="Info" />
        </q-tabs>
        <br>

        <q-tab-panels v-model="tab" animated>
          <q-tab-panel name="sadrzaj">

            <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          class="text-dark"
        />
          </q-tab-panel>

          <q-tab-panel name="info">
            <drawerInfo></drawerInfo>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>

  <!--end drawer-tab-->
<div>

        </div>
      </q-list>
    </q-drawer>

<!--DRAWER-2-->

<q-drawer
      v-model="cartDrawerOpen"
      :breakpoint=767
      side="right"
      width=320
      bordered
      behavior="mobile"
    >
      <q-list>
        <q-item-label
          header
        >
          <div><img src="icons/logo-black.png"/></div>
        </q-item-label>

<!--start drawer-tab-->


    <div class="" style="max-width: 600px">
     <div><p class="q-pl-lg text-h6">KORPA -{{ korpa.length > 0 ? korpa.length : ''}}</p></div>
      

        <q-tab-panels v-model="cartTab" animated>
          <q-tab-panel name="korpa">
               <div class="row items-start">
    <div style="border-bottom: 1px solid grey" class="my-card" v-for = "(proizvod, index) in korpa" :key="index">
     
      <q-card-section horizontal>
         <q-card-section class="col-5">

          <q-img
            class="rounded-borders"
            :src="'images/products/small/'+ proizvod.slika" alt=""
          />
        </q-card-section>
        <q-card-section>

          <div>{{ proizvod.ime }}
          </div>

        </q-card-section>

      </q-card-section>
      <div class="q-ml-lg row">
        <div class="col-md-5 col-sm-5 col-xs-5">{{ proizvod.cena}} din </div>
        <div class="col-md-5 col-sm-5 col-xs-5">{{ proizvod.kolicina}} kom</div>
        <div class="col-md-2 col-sm-2 col-xs-2"><q-btn flat round color="positive" icon="close" class="text-right"/>@click="obrisiIzKorpe(index)"</div>
      </div>




    </div>
    </div>
    <div class="q-ml-lg q-mt-lg  q-pa-lg row" style="border-top: 1px solid grey; border-bottom: 1px solid grey">
        <div class="col-md-6"><b class="text-h6">UKUPNO:</b> </div>
        <div class="col-md-6"><span>getSumaKorpe()</span></div>
        <div >PROIZVOD.IME</div>
      </div>
      <div class="row q-mt-lg">
        <div class="col-md-5">
        
          <q-btn color="accent" rounded-borders size="20px" label="Izabrani proizvodi" class="self-center q-ma-sm" to="/cart"/>
        </div>
        <div class="col-md-2"></div>
        <div class="col-md-5">
          <q-btn color="black" rounded-borders outline size="18px" label="Poruči" class="self-center q-ma-sm" to="/checkout"/>
        </div>
      </div>
      <br><br><br><br>




          </q-tab-panel>

          <q-tab-panel name="info">
            <drawerInfo></drawerInfo>
          </q-tab-panel>
        </q-tab-panels>

    </div>

  <!--end drawer-tab-->
<div>

        </div>
      </q-list>
    </q-drawer>
    <!--END DRAWER-2-->

   <q-page-container>
      <router-view />
      <myFooter></myFooter>
    </q-page-container>

  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Početna',
    link: '/'
  },
  {
    title: 'Proizvodi',
    link: '#/shop'
  },
  {
    title: 'Korpa',
    link: '#/cart'
  },
  {
    title: 'Poruči',
    link: '#/checkout'
  },
  {
    title: 'Kategorije',
    link: '#/category'
  },
  {
    title: 'Česta pitanja',
    link: '#/faq'
  },
  {
    title: 'Galerija',
    link: '#/gallery'
  },
  {
    title: 'Kontakt',
    link: '#/contact'
  },


  /*{
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }*/
];

import { defineComponent, ref, computed } from 'vue'
import { useQuasar } from 'quasar'
import { onBeforeUnmount } from 'vue'
import { useStore } from 'vuex'
import products from '../data/products'


export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink,
    'drawerInfo' : require('components/Drawer/drawerInfo.vue').default,
    'btnSocialGroups' : require('components/Buttons/btnSocialGroups.vue').default,
    'myFooter' : require('components/Footer.vue').default,
  },

  setup () {
    const leftDrawerOpen = ref(false)
    const cartDrawerOpen = ref(false)
    const $q = useQuasar()
    const korpa = ref([])
    const store = useStore()
    const cartNumberOfItems = computed(() => store.getters['cart/getCartNumberOfItems'])

    let timer

    onBeforeUnmount(() => {
      if (timer !== void 0) {
        clearTimeout(timer)
        $q.loading.hide()
      }
    })
    function showProductInfo (value) {
      proizvodInfo.value = products.find(e => e.id === value)
      dialogProducts.value = true
    }

    function dodajUKorpu(id, kolicina = 1) {
      const proizvod = products.find(e => e.id === id)
      store.commit('cart/addToCart',{ proizvod, kolicina })
    }

   


    function showLoading() {
      $q.loading.show({
      spinner: QSpinnerGears,
      // other props
      })
      // hiding in 2s
      timer = setTimeout(() => {
        $q.loading.hide()
        timer = void 0
      }, 5000)
    }

    function toggleLeftDrawer() {
      leftDrawerOpen.value = !leftDrawerOpen.value
    }

    function toggleCartDrawer() {
      cartDrawerOpen.value = !cartDrawerOpen.value
    }

    return {
      tab: ref('sadrzaj'),
      cartTab: ref('korpa'),
      search: ref(''),
      essentialLinks: linksList,
      cartNumberOfItems,
      korpa,

      leftDrawerOpen,
      cartDrawerOpen,

      showLoading,
      toggleLeftDrawer,
      toggleCartDrawer
    }
  }
})
</script>


<style>
  .homepagePhone {
    font-size: 20px;
  }
  .greyLine {
    width: 100%;
    height: 1px;
    background: grey;
  }
  @media only screen and (min-width: 1019px) {
   .logoBottom {
    display: none;
  }

  }
  @media only screen and (max-width: 1020px) {
   .menuBottom {
    display: none;
  }
}
  @media only screen and (max-width: 1020px) {
   .logoTop {
    display: none;
  }
}

.my-card {
  width: 100%;
  max-width: 350px;
}
</style>
