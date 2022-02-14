<template>
  <div class="order-model">
    <div class="order-info">
      <h2>{{ order.name }}&nbsp; sek</h2>
      <p class="date">
        <span>{{ order.when.date }}</span> kl.
        <span>{{ order.when.from }}-{{ order.when.to }}</span>
      </p>
    </div>

    <div class="actions">
      <button @click="decreaseNum">
        <img src="@/assets/decrease.svg" alt="Minus sign" />
      </button>
      <span>{{ order.number }}</span>
      <button @click="increaseNum">
        <img src="@/assets/increase.svg" alt="Plus sign" />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: { order: Object },
  computed: {},

  methods: {
    increaseNum() {
      this.order.number++;
    },

    decreaseNum() {
      this.order.number > 1 ? this.order.number-- : ''
    },
  },
};
</script>

<style lang="scss" scoped>
.order-model {
  width: 310px;
  height: 96px;
  border: 1px solid #f56b9a;
  font-family: "Fira Sans", sans-serif;
  margin-bottom: 24px;

  .order-info {
    width: 290px;
    height: 56px;

    h2 {
      font-family: "Sansita", sans-serif;
      font-style: italic;
      font-weight: 700;
      font-size: 24px;
      line-height: 28px;

      text-align: start;

      color: #f56b9a;
      margin: 2px 0px 4px 2px;
    }

    p {
      font-family: "Fira Sans", sans-serif;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;

      text-align: start;

      color: #37aeab;
      margin: 1px 0px 4px 2px;
    }
  }

  .actions {
    width: 100%;

    height: 32px;
    display: flex;
    border-top: 1px solid #f56b9a;
    margin: 0px;
    button {
      width: 88px;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #231f42;
      border: none;

      img {
        width: 14px;
      }
    }

    span {
      width: 128px;
      height: 34px;
      display: flex;
      justify-content: center;
      font-size: 20px;
      font-weight: bold;
      align-items: center;
      border-left: 1px solid #f56b9a;
      border-right: 1px solid #f56b9a;
      color: #ffffff;
    }
  }
}
</style>