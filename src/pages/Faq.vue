<template>
<q-page>

  <q-parallax
    class="bg-dark"
    :height="330"
    src="images/bg/global-background.png" 
  >
    <h2 class="text-white text-weight-medium q-pl-sm">ČESTA PITANJA</h2>
    <p class="paralaxHeader"><a class="text-h4 text-weight-bold text-accent" href="/">POČETNA /</a><span class="text-h4 text-weight-bold text-secondary"> ČESTA PITANJA</span></p>
    <span><img src="images/bg/global-background-shape-2.png" class="shape"/></span>
  </q-parallax>
    <div class="row q-mt-lg q-mb-lg q-pa-lg">
      <div class="col-xs-12 col-sm-12 col-md-2"></div>
      <div class="col-xs-12 col-sm-12 col-md-8">
        <q-card class="q-pa-lg">
          <q-list class="rounded-borders" v-for="( question, index ) in questions" :key = "index">
            <q-expansion-item
              :header-inset-level="1" :content-inset-level="2"
              expand-separator
              switch-toggle-side
              :label="question.pitanje"
              header-class="text-dark"
              class="text-h6"
            >
              <q-card>
                <q-card-section
                  class="text-subtitle1"
                >
                  <p v-html = "question.odgovor"></p>
                </q-card-section>
              </q-card>
            </q-expansion-item>
          </q-list>
          <br>
        </q-card>
      </div>
      <div class="col-xs-12 col-sm-12 col-md-2"></div>
    </div>
    <br><br><br>
   
</q-page>
</template>

<script>
  import { defineComponent } from 'vue';
  import questions from '../data/questions'

  export default defineComponent({
    setup () {

      return {
        questions
      }
    }
  })
</script>
