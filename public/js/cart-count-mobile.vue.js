import { getKorpa } from './products.js'

const app = new Vue({
  el: "#cartCountMobile",

  data: {
    korpa: []
  },

  mounted() {
    this.korpa = getKorpa()
  },

  methods: {
    getCartCount() {
      return  this.korpa.length
    }
  }
})