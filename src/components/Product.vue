<template>
  <q-card bordered-accent class="q-mr-md">
    <q-card-actions align="right" class="q-pt-md justify-center">
      <q-btn outline icon="visibility" :id="proizvod.id"  @click="$emit('show-product-info', proizvod.id)"/>
      <q-btn outline icon="shopping_cart" @click="$emit('dodaj-u-korpu', proizvod.id)" />
    </q-card-actions>
    <img :src="'images/products/small/'+ proizvod.slika" alt=""/>

    <q-card-actions class="justify-center">
      <div style="height: 200px;">
        <p class="text-h6 text-uppercase"><span class="text-primary">{{ proizvod.kategorija }}</span><br><br>
          <span class="text-dark text-bold">{{ proizvod.ime }}</span><br>
          <span class="text-primary">CENA </span>
          <span class="text-accent">{{ proizvod.cena }} /</span><del class="text-primary">{{ proizvod.staraCena }}</del>
        </p>
      </div>

    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    proizvod: Object
  }
}
</script>
