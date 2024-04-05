import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const initialState = () => ({
  cars: [
    {
      "type": "New",
      "make": "Mercedes-Benz",
      "model": "C Class",
      "trim": "C63 AMG Sport PKG",
      "vin": "123",
      "color": "black",
      "price": 100000,
      "miles": 0,
      "year": 2023
    },
    {
      "type": "Used",
      "make": "BMW",
      "model": "M Series",
      "trim": "M4 Supersonic",
      "vin": "4983",
      "color": "green",
      "price": 84500,
      "miles": 32,
      "year": 2019
    },
    {
      "type": "New",
      "make": "Toyota",
      "model": "Corolla",
      "trim": "Corolla XSE",
      "vin": "8922",
      "color": "blue",
      "price": 25000,
      "miles": 762,
      "year": 2022
    },
  ]
});

export default new Vuex.Store({
  state: initialState(),

  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
