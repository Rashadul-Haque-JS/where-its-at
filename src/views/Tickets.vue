<template>
  <div class="tickets">
      
      <p class="mgs" v-if="!tickets.length">You didn't purchase any ticket yet!</p>
    <ul>
      <li v-for="ticket in tickets" :key="ticket.name">
        <TicketsModel :ticket="ticket" />
      </li>
    </ul>
    <router-link to="/events">BACK TO EVENTS</router-link>
  </div>
</template>

<script>
import TicketsModel from "../components/TicketsModelView.vue";
import { mapGetters } from "vuex";
export default {
  components: { TicketsModel },
  computed: {
    ...mapGetters({ tickets: "allOrders" }),
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.tickets {
  width: 375px;
  height: 667px;
  display:flex;
  justify-content: center;
  background: linear-gradient(#d35b9a, #50286e, #231f42);
  position: relative;

  .mgs{
      text-align: center;
      font-family: "Fira Sans", sans-serif;
      font-style: italic;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;

      color: rgba(255, 255, 255, 0.8);
      margin-top: 100px;
      transform: translateX(50%);
  }

  ul {
    width: 320px;
    display: grid;
    grid-auto-rows: 15px;

    li {
      list-style-type: none;
    }

    li:hover {
      z-index: 1;
      
    }
  }
  a{
    font-family: "Fira Sans", sans-serif;
      font-style: italic;
      font-weight: normal;
      font-size: 12px;
      line-height: 12px;
      text-align: center;
     position: absolute;
     bottom: 24px;
      color: rgba(255, 255, 255, 0.8);
  }
}
</style>