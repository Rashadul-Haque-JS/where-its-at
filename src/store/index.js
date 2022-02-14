import Vue from 'vue'
import Vuex from 'vuex'
import Events from '../assets/events.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: { ...Events },
    numOfTickets: 1,
    order: [],



  },
  mutations: {
    incrTicket(state, payload) {
      let key;
      state.numOfTickets++
      payload[key] = 'number'
      payload[key] = 'totalPrice'
      payload.number = state.numOfTickets
      payload.totalPrice = payload.price * payload.number
      delete payload.undefined
    },



    decrTicket(state, payload) {
      let key;
      if (state.numOfTickets > 1) {
        state.numOfTickets--
        payload[key] = 'number'
        payload[key] = 'totalPrice'
        payload.number = state.numOfTickets
        payload.totalPrice = payload.price * payload.number
        delete payload.undefined
      }

    },
    addOrder(state, payload) {
      state.order.push(payload)
      state.numOfTickets = 1
    }
  },
  actions: {
    incrTicket(context, payload) {
      context.commit('incrTicket', payload)
    },


    decrTicket(context, payload) {
      context.commit('decrTicket', payload)
    },

    addOrder(context, payload) {
      if (!context.state.order.includes(payload)) {
        context.commit("addOrder", payload)
      } else { alert('This item already in the cart!') }

    },

  },

  getters: {
    allEvents: (state) => state.events.events,

    allOrders: (state) => state.order,

    totalSum(state) {
      let total = 0;
      state.order.forEach(element => {
        total += element.totalPrice
      })
      return total
    }
  },



  modules: {
  }
})
