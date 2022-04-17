<template>
  <q-page>
    <q-parallax
      class="bg-dark"
      :height="330"
      src="images/bg/global-background.png" 
    >
      <h2 class="text-white text-weight-medium q-pl-sm">PORUČI</h2>
      <p class="paralaxHeader"><a class="text-h4 text-weight-bold text-accent" href="/">POČETNA /</a><span class="text-h4 text-weight-bold text-secondary"> PORUČI</span></p>
      <span><img src="images/bg/global-background-shape-2.png" class="shape"/></span>
    </q-parallax>
    <div class="row q-mt-lg q-pl-lg q-pr-lg">
      <div class="col-xs-12 col-sm-2 col-md-3"></div>
      <div class="col-xs-12 col-sm-8 col-md-6" style="border: 1px solid LightGrey; border-radius: 10px; margin-bottom: 50px; padding: 40px;">
           <p><span class="text-weight-medium text-h6">Način plaćanja: </span> Gotovinom pouzećem</p>
           <br>
      <!--start input-form-->
      <div class="q-gutter-md">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-7">
            <p>Ime i prezime *</p>
            <q-input filled standout="text-accent" v-model="name" label="Ime"/>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-5"></div>
        </div>
        <p>Zemlja / Region *</p>
        <q-input filled standout="text-accent" v-model="zemlja" label="Zemlja"/>
        <p>Ulica i broj *</p>
        <q-input filled standout="text-accent" v-model="adresa" label="Ulica i broj"/>
        <p>Mesto / Grad *</p>
        <q-input filled standout="text-accent" v-model="mesto" label="Mesto"/>
        <p>Poštanski broj/ ZIP *</p>
        <q-input filled standout="text-accent" v-model="zip" label="Mesto"/>
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-5 q-mb-md">
            <p>Telefon *</p>
            <q-input filled standout="text-accent" v-model="tel" label="Broj telefona..."/>
          </div>
          <div class="col-xs-12 col-sm-12 col-md-1"></div>
          <div class="col-xs-12 col-sm-12 col-md-6">
            <p>Email *</p>
            <q-input filled standout="text-accent" v-model="email" label="email..."/>
          </div>
        </div>
        <p>Dodatna napomena</p>
        <q-input
          v-model="ainfo"
          filled
          standout="text-accent"
          label="Napomena o vašoj porudžbini, Napomena u vezi dostave !"
          type="textarea"
        />
        <q-field filled>
          <template v-slot:control>
            <div class="self-center full-width no-outline" tabindex="0">Ukupno</div>
          </template>

          <template v-slot:append>
            getSumaKorpe()  din
          </template>
        </q-field>
        <br>
        <div class="text-center">
          <q-btn color="accent" rounded-borders  size="20px" label="POTVRDI KUPOVINU" class="self-center q-ma-sm" type="submit"/>
        </div>
        <br><br>
        </div>
        <!--end input-form-->
      </div>
      <div class="col-xs-12 col-sm-2 col-md-3"></div>
    </div>
  </q-page>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const name = ref('')
    const zemlja = ref('')
    const adresa = ref('')
    const mesto = ref('')
    const zip = ref('')
    const tel = ref('')
    const email = ref('')
    const ainfo = ref('')
    
    return {
      name,
      zemlja,
      adresa,
      mesto,
      zip,
      tel,
      email,
      ainfo
    }
  }
})
</script>

