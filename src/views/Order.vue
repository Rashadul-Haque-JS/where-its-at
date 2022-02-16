<template>
  <div class="order">
    <header>
      <h1>Order</h1>
    </header>
    <main>
      <p class="others-info" v-if="!orders.length">No order is placed yet!</p>

      <article class="order-list" v-for="(order,idx ) in orders" :key="order.id" :idx="idx">
        <OrderModel :order="order" :idx="idx" />
      </article>

      <article v-if="orders.length" class="order-price">
        <p>Totalt värde på order</p>
        <h2>{{ summation }}</h2>
      </article>
    </main>

    <footer>
      <router-link to="/Tickets">
        <button>Sicka Order</button>
      </router-link>
    </footer>
    <nav class="nav">
      <router-link to="/"></router-link>
      <router-link to="/Events"></router-link>
      <router-link to="/Order"></router-link>
    </nav>
  </div>
</template>

<script>
import OrderModel from "../components/OrderModelView.vue";
import { mapGetters } from "vuex";
export default {
  components: { OrderModel },
  computed: {
    ...mapGetters({
      orders: "allOrders",
      summation: "totalSum",
    }),
  },
};
</script>

<style lang="scss" scoped>
.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    h1 {
      font-family: "Sansita", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      text-align: center;
      color: #f56b9a;
    }
  }

  main {
    width: 310px;
    height: 424px;
    margin: 48px 0px 20px 0px;
    .others-info {
      font-family: "Fira Sans", sans-serif;
      font-style: italic;
      font-weight: normal;
      font-size: 20px;
      line-height: 23px;
      text-align: center;

      color: rgba(255, 255, 255, 0.8);
    }

    .order-list {
      margin-bottom: 24px;
    }

    .order-price {
      font-family: "Fira Sans", sans-serif;
      font-style: italic;
      font-weight: normal;
      font-size: 19px;
      line-height: 23px;
      text-align: center;

      color: rgba(255, 255, 255, 0.8);
      h2 {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;

        text-align: center;

        color: #ffffff;

        text-shadow: 1px 1px 0px #f56b9a;
        margin-top: 16px;
      }

      p {
        font-family: "Fira Sans", sans-serif;
        font-style: italic;
        font-weight: normal;
        font-size: 19px;
        line-height: 23px;
        text-align: center;

        color: rgba(255, 255, 255, 0.8);
        margin-bottom: 0px;
      }
    }
  }

  footer {
    margin-top: 8px;
    button {
      width: 310px;
      height: 60px;
      font-style: normal;
      font-weight: 600;
      font-size: 22px;
      line-height: 26px;

      text-align: center;

      color: #ffffff;

      background: #37aeab;
      border-radius: 3px;
      cursor: pointer;
    }
  }

  .nav {
    width: 100%;
    height: 8px;
    display: flex;
    justify-content: center;
    position: absolute;

    bottom: 12px;

    a {
      width: 8px;
      height: 8px;
      margin: 0px 4px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 100%;

      &.router-link-exact-active {
        color: #ffffff;
      }
    }
  }
}
</style>