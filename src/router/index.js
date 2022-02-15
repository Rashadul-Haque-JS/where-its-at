import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"
import Events from "../views/Events.vue"
import Order from "../views/Order.vue"
import Event from "../views/Event.vue"
import Tickets from "../views/Tickets.vue"


Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },

  {
    path: "/Events",
    name: "Events",
    component: Events
  },

  {
    path: "/Events/:id",

    component: Event,
  },

  {
    path: "/Order",
    name: "Order",
    component: Order,
    children: [{
      path: "Ticket",

      component: Tickets
    }]

  },




]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
})

export default router
