import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  strict: (process.env.NODE_ENV !== 'production'),
  state: () => ({
    amount: 0
  }),
  getters: {
    getAmount: (state) => state.amount
  },
  actions: {
    plusAmount ({state, commit}, value) {
      value = parseInt(state.amount) + value
      commit('SET_AMOUNT', value)
    },
    minusAmount ({state, commit}, value) {
      value = parseInt(state.amount) - value
      commit('SET_AMOUNT', value)
    }
  },
  mutations: {
    'SET_AMOUNT': (state, value) => {
      state.amount = value
    }
  }
})

export default store
