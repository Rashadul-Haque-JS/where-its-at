<template>
  <div class="order">
    <header>
      <h1>Order</h1>
    </header>
    <main>
      <p class="others-info" v-if="!orders.length">No order is placed yet!</p>

      <article class="order-list" v-for="order in orders" :key="order.id">
        <OrderModel :order="order" />
      </article>

      <article v-if="orders.length" class="order-price">
        <p>Totalt värde på order</p>
        <h2>1020</h2>
      </article>
    </main>
    <footer>
      <button>Sicka Order</button>
    </footer>
  </div>
</template>

<script>
import OrderModel from "../components/OrderModelView.vue";
export default {
  components: { OrderModel },
  computed: {
    orders() {
      return this.$store.state.order;
    },
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
    margin-top: 20px;
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
}
</style>