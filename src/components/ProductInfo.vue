<template>
  <q-card
    id="demo"
    style="width: 900px; max-width: 90vw;" >

    <q-btn
      icon="close"
      color="accent"
      side top
      v-close-popup
      class="q-pa-sm q-ma-md"
      style="float: right;"
    />

    <q-card-section class="row">
      <div class = "col-xs-12 col-sm-12 col-md-6 text-center">
          <img :src="'images/products/small/'+ proizvod.slika" alt=""/>
      </div>
      <div class = "col-xs-12 col-sm-12 col-md-6 text-left">
        <h5 class="text-weight-bold">{{ proizvod.ime }}</h5>
        <p class="text-h5">
          <span class="text-primary">CENA: </span>
          <span class="text-accent">{{ proizvod.cena }}</span><br>
          <span class="text-primary">STANJE: </span>
          <span class="text-accent">{{ proizvod.stanje }}</span>
        </p><br><br>
          <span class="text-h6">KOLIČINA: </span>
          <input
            class="q-pa-sm self-center"
            v-model="kolicina"
            type="number"
            placeholder="1"
            style="width: 90px; font-size: 21px;"
          >
          <q-btn
            color="accent"
            rounded-borders
            size="20px"
            label="dodaj u korpu" class="self-center q-ma-sm"
            @click="$emit('dodaj-u-korpu', proizvod.id, kolicina)"
          />
          <div class="q-pa-md" style="max-width: 350px">
          </div>
      </div>
    </q-card-section>

    <q-list bordered class="rounded-borders">
      <q-expansion-item
        expand-separator
        icon="info"
        label="Pogledaj detalje"
        caption="+ kratko uputstvo"
      >
      <q-card>
        <q-card-section>
        {{ proizvod.opis }}
        </q-card-section>
      </q-card>
      </q-expansion-item>
    </q-list>
  </q-card>
</template>


<script>
import { defineComponent, ref } from 'vue';

export default defineComponent ({
  props: {
    proizvod: Object
  },

  setup() {
    const kolicina = ref(1)

    return { kolicina }
  }

})
</script>
