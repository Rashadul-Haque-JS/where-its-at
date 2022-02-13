import Vue from 'vue'
import Vuex from 'vuex'
import Events from '../assets/events.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: { ...Events },
    numOfTickets:0,
    order: [],
    
  },
  mutations: {
    incrTicket(state,payload) {
      state.numOfTickets++
      payload.number = state.numOfTickets
    },

    decrTicket(state,payload) {
      if (state.numOfTickets > 0) {
        state.numOfTickets--
        payload.number = state.numOfTickets
      }
      
    },
    addOrder(state,payload) {
     state.order.push(payload)
   }
  },
  actions: {
    incrTicket(context,payload) {
      context.commit('incrTicket',payload)
    },

    decrTicket(context, payload) {
      context.commit('decrTicket',payload)
    },

    addOrder(context, payload) {
      if (!context.state.order.includes(payload)) {
        context.commit("addOrder", payload)
      } else { alert('This item already in the cart!') }

    },

  },

  getters:{
    allEvents: (state) => state.events.events
  },

  modules: {
  }
})
