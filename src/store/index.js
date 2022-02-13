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
    incrTicket(state) {
      state.numOfTickets++
    },

    decrTicket(state) {
      if (state.numOfTickets > 0) {
        state.numOfTickets--
      }
      
    }
  },
  actions: {
    incrTicket(context) {
      context.commit('incrTicket')
    },

    decrTicket(context) {
      context.commit('decrTicket')
    }

  },

  getters:{
    allEvents: (state) => state.events.events
  },

  modules: {
  }
})
