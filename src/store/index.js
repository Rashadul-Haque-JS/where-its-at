import Vue from 'vue'
import Vuex from 'vuex'
import Events from '../assets/events.json'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: { ...Events },
    numOfTickets: 0,
    order: [],



  },
  mutations: {
    incrTicket(state, payload) {
      let key = 'number';
      state.numOfTickets++

      setTimeout(() => {
        payload[key] = 1;
        payload.number = state.numOfTickets;
      }, 100);

    },



    decrTicket(state, payload) {
      let key = 'number'
      if (state.numOfTickets > 0) {
        state.numOfTickets--

        setTimeout(() => {
          payload[key] = 'number';
          payload.number = state.numOfTickets
        }, 100);

      }

    },
    addOrder(state, payload) {
    
      state.order.push(payload)
      // state.numOfTickets = 1
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
        total += element.price * element.number
      })
      return total
    }
  },



  modules: {
  }
})
