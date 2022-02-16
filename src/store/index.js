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
      state.numOfTickets++
      payload.ticketsNumber = state.numOfTickets

    },


    decrTicket(state, payload) {
      if (state.numOfTickets > 0) {
        state.numOfTickets--
        payload.ticketsNumber = state.numOfTickets


      }
    },

    removeOrder(state, payload) {
      state.order.splice(payload,1)
    },


    changeTicketsPlus(state, payload) {
      let newArr = state.order.filter((e => e.id == payload.id))
      newArr[0].ticketsNumber++
    },


    changeTicketsMinus(state, payload) {
      let newArr = state.order.filter((e => e.id == payload.id))
      newArr[0].ticketsNumber > 1 ? newArr[0].ticketsNumber-- : ''



    },



    addOrder(state, payload) {
      if (!state.order.includes(payload)) {
        state.order.push(payload)
      } else { alert('This item already in the cart!') }

      state.numOfTickets = 0
    }
  },
  //Action.......................................
  actions: {
    incrTicket(context, payload) {
      context.commit('incrTicket', payload)
    },


    decrTicket(context, payload) {
      context.commit('decrTicket', payload)
    },

    changeTicketsPlus(context, payload) {
      context.commit('changeTicketsPlus', payload)

    },

    changeTicketsMinus(context, payload) {
      context.commit('changeTicketsMinus', payload)

    },

    addOrder(context, payload) {

      context.commit("addOrder", payload)


    },

    removeOrder(context, payload) {
      context.commit('removeOrder', payload)
    },

  },

  getters: {
    allEvents: (state) => state.events.events,

    allOrders: (state) => state.order,

    totalSum(state) {
      let total = 0;
      state.order.forEach(element => {
        total += element.price * element.ticketsNumber
      })
      return total
    }
  },






  modules: {
  }
})
