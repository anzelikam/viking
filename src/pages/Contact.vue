<template>
<q-page>

  <q-parallax
    class="bg-dark"
    :height="330"
    src="images/bg/global-background.png" 
  >
    <h2 class="text-white text-weight-medium q-pl-sm">KONTAKTIRAJTE NAS</h2>
    <p class="paralaxHeader"><a class="text-h4 text-weight-bold text-accent" href="/">POČETNA /</a><span class="text-h4 text-weight-bold text-secondary"> KONTAKT</span></p>
    <span><img src="images/bg/global-background-shape-2.png" class="shape"/></span>
  </q-parallax>
    <div class="row q-mt-lg">
      <div class="col-xs-12 col-sm-2 col-md-2"></div>
      <div class="col-xs-12 col-sm-8 col-md-8">
        <q-card flat bordered class="q-ma-lg"> 
          <div class="row q-pa-lg q-ma-lg">
            <div class="col-sm-12 col-md-6 col-lg-4">
              <q-item>
                <q-item-section top avatar>
                  <img src="icons/ci-1.png" class="iconSize"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold">KONTAKTIRAJTE NAS</q-item-label>
                  <q-item-label class="text-primary">Lazar@streetpower.se</q-item-label>
                  <q-item-label class="text-primary">064/496-22-41</q-item-label>
                </q-item-section>
              </q-item> 
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <q-item>
                <q-item-section top avatar>
                  <img src="icons/ci-2.png" class="iconSize"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold">NAŠA LOKACIJA</q-item-label>
                  <q-item-label class="text-primary">Aleksandar Saša Tomin</q-item-label>
                  <q-item-label class="text-primary">Đure Jakšića 38, 26350 Samoš</q-item-label>
                </q-item-section>
              </q-item> 
            </div>
            <div class="col-sm-12 col-md-6 col-lg-4">
              <q-item>
                <q-item-section top avatar>
                  <img src="icons/ci-3.png" class="iconSize"/>
                </q-item-section>
                <q-item-section>
                  <q-item-label class="text-h6 text-weight-bold">RADNO VREME</q-item-label>
                  <q-item-label class="text-primary">Radno vreme</q-item-label>
                  <q-item-label class="text-primary">Dostupni smo radnim danima 7-19h</q-item-label>
                </q-item-section>
              </q-item> 
            </div>
          </div>
          <div class="q-pa-md" >
            <div class="q-gutter-md">
              <div>
                <q-input outlined v-model="name" label="Ime i prezime :" /> <br>
              </div>
              <div>
                <q-input outlined v-model="email"  label="e-mail :" /> <br>
              </div>
              <div>
                <q-input outlined v-model="subject" label="Tema :"/> <br>
              </div>
              <div>
                <q-input
                  v-model="message"
                  outlined 
                  type="textarea"
                  label="Vaša poruka :"
                />
              </div>
            </div>
          </div>
          <div class="text-center">
            <q-btn color="accent" rounded-borders size="20px" label="Pošalji poruku" class="self-center q-ma-lg" v-model="submit"/> 
          </div>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-2 col-md-2"></div>
    </div>
    <div>   
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2811.0884427900914!2d20.772622915455965!3d45.205545779098735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x475a994b2aab3e57%3A0x371e078834185bbb!2zQnJhxIdhIFZpa2luZyBTYW1vxaE!5e0!3m2!1sbs!2srs!4v1633151016003!5m2!1sbs!2srs"
        width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy">
      </iframe>
    </div>

</q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';


  export default defineComponent ({
    setup () {
      const name = ref('')
      const email = ref('')
      const subject = ref('')
      const message = ref('')
      const submit = ref('')
      const ph = ref('')
      const dense = ref(false)

      return {
         name,
         email,
         subject,
         message,
         submit,
         ph,
         dense
      }
    }
      
    
  })
</script>
