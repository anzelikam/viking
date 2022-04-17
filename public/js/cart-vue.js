import {  products, korpa, saveKorpa, dodajUkorpu, obrisiIzKorpe } from './products.js'

function closeCB(e) {
  console.log(".cart-bar__close > a");
  e.preventDefault();
  $(".cart-bar-wrapper").removeClass("show");
  $("body").removeClass("on-side");
  $('.overlay').removeClass('active');
  $('.cart-trigger').removeClass('active');
}


var app = new Vue({
  el: "#cart",

  data: {
    proizvodi: products,
    korpa: []
  },

  mounted() {
    this.korpa = korpa
  },

  methods: {
    obrisiIzKorpe(index) {
      obrisiIzKorpe(index)
    },

    getSumaKorpe() {
      let suma = 0
      this.korpa.forEach(element => {
        suma += element.kolicina * this.proizvodi[element.id].cena
      })

      return suma
    },

    closeCartBar(e) {
      closeCB(e)
    }

  }
})