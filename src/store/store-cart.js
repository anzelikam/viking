const state = {
  cart: []
}

const mutations = {
  addToCart(state, { proizvod, kolicina }) {
    console.log('add to cart');
    const postojeciProizvod = state.cart.find(e => e.id === proizvod.id)

    if (postojeciProizvod) {
      postojeciProizvod.kolicina += kolicina
    } else {
      state.cart.push({ ...proizvod, kolicina })
    }
  },

  deleteFromCart(state, id) {
    const index = state.cart.findIndex(e => e.id === id)
    if (index !== -1) { // nadjen element
      state.cart.slice(index, 1)
    }
  },

  changeQty(state, id, kolicina) {
    const postojeciProizvod = state.cart.find(e => e.id === id)
    if (postojeciProizvod) {
      postojeciProizvod.kolicina = kolicina
    }
  }
}

const actions = {
}

const getters = {
  cart: (state) => {
    return state.cart
  },

  getCartNumberOfItems: (state) => {
    let count = 0

    state.cart.forEach(element => {
      count += element.kolicina
    })

    return count
  },

  getSumOfCart: (state) => {
    let sum = 0
    state.cart.forEach(element => {
      sum += element.kolicina * element.cena
    });

    return sum
  }

}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
