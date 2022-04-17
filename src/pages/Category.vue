<template>
  <q-page>
    <q-parallax
      class="bg-dark"
      :height="330"
      src="images/bg/global-background.png" 
    >
      <h2 class="text-white text-weight-medium">KATEGORIJE</h2>
      <p class="paralaxHeader"><a class="text-h4 text-weight-bold text-accent" href="/">POČETNA /</a><span class="text-h4 text-weight-bold text-secondary"> KATEGORIJE</span></p>
      <span><img src="images/bg/global-background-shape-2.png" class="shape"/></span>
    </q-parallax>

    <div class="q-pa-md">
      <div style="max-width: 1100px; margin: auto;">
        <q-tabs
          v-model="tab"
          align="justify"
          narrow-indicator
          class="q-mb-lg tabsBorder"
        >
          <q-tab class="text-accent" name="mikrofiber" label="Mikrofiber" />
          <q-tab class="text-accent" name="plastika" label="Plastika" />
          <q-tab class="text-accent" name="poliranje" label="Poliranje" />
          <q-tab class="text-accent" name="protiv rđe" label="Protiv rđe" />
          <q-tab class="text-accent" name="staklo" label="Staklo" />
          <q-tab class="text-accent" name="zaštita boje" label="Zaštita boje" />
        </q-tabs>

     
        <q-tab-panels
          v-model="tab"
          animated
          transition-prev="scale"
          transition-next="scale"
          class="text-left"
        >
          <q-tab-panel name="mikrofiber" class="row">
            <div v-for="(proizvod, index) in products" :key="index" class="col-md-6 col-sm-12 col-xs-12 animate__animated animate__zoomIn" >
              <q-item class="q-mb-lg q-pa-sm categoryItem" v-if="proizvod.kategorija === 'mikrofiber'">
                <q-item-section avatar>
                  <img :src="'images/products/small/'+ proizvod.slika" alt="" class="avatar"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label><h6 class="categoryLink"><a href="/#shop">{{ proizvod.ime }}</a></h6></q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-tab-panel>

          <q-tab-panel name="plastika" class="row">
            <div v-for="(proizvod, index) in products" :key="index" class="col-md-6 col-sm-12 col-xs-12 animate__animated animate__zoomIn" >
              <q-item class="q-mb-lg q-pa-sm categoryItem" v-if="proizvod.kategorija === 'plastika'">
                <q-item-section avatar>
                  <img :src="'images/products/small/'+ proizvod.slika" alt="" class="avatar"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label><h6 class="categoryLink"><a href="/#shop">{{ proizvod.ime }}</a></h6></q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-tab-panel>

          <q-tab-panel name="poliranje" class="row">
            <div v-for="(proizvod, index) in products" :key="index" class="col-md-6 col-sm-12 col-xs-12 animate__animated animate__zoomIn" >
              <q-item class="q-mb-lg q-pa-sm categoryItem" v-if="proizvod.kategorija === 'poliranje'">
                <q-item-section avatar>
                  <img :src="'images/products/small/'+ proizvod.slika" alt="" class="avatar"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label><h6 class="categoryLink"><a href="/#shop">{{ proizvod.ime }}</a></h6></q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-tab-panel>

          <q-tab-panel name="protiv rđe" class="row">
            <div v-for="(proizvod, index) in products" :key="index" class="col-md-6 col-sm-12 col-xs-12 animate__animated animate__zoomIn" >
              <q-item class="q-mb-lg q-pa-sm categoryItem" v-if="proizvod.kategorija === 'protiv rđe'">
                <q-item-section avatar>
                  <img :src="'images/products/small/'+ proizvod.slika" alt="" class="avatar"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label><h6 class="categoryLink"><a href="/#shop">{{ proizvod.ime }}</a></h6></q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-tab-panel>

          <q-tab-panel name="staklo" class="row">
            <div v-for="(proizvod, index) in products" :key="index" class="col-md-6 col-sm-12 col-xs-12 animate__animated animate__zoomIn" >
              <q-item class="q-mb-lg q-pa-sm categoryItem" v-if="proizvod.kategorija === 'staklo'">
                <q-item-section avatar>
                  <img :src="'images/products/small/'+ proizvod.slika" alt="" class="avatar"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label><h6 class="categoryLink"><a href="/#shop">{{ proizvod.ime }}</a></h6></q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-tab-panel>

          <q-tab-panel name="zaštita boje" class="row">
            <div v-for="(proizvod, index) in products" :key="index" class="col-md-6 col-sm-12 col-xs-12 animate__animated animate__zoomIn" >
              <q-item class="q-mb-lg q-pa-sm categoryItem" v-if="proizvod.kategorija === 'zaštita boje'">
                <q-item-section avatar>
                  <img :src="'images/products/small/'+ proizvod.slika" alt="" class="avatar"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label><h6 class="categoryLink"><a href="/#shop">{{ proizvod.ime }}</a></h6></q-item-label>
                </q-item-section>
              </q-item>
            </div>
          </q-tab-panel>
         </q-tab-panels>
        </div>
      </div>
    </q-page>
  </template>

<script>
import { defineComponent, ref } from 'vue';
import products from '../data/products'

export default defineComponent({

  setup () {
    const tab = ref('mikrofiber')

  return {
      tab,
      products
     
    }
  }
})
</script>

