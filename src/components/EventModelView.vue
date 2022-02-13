<template>
  <div class="event-model">
    <div class="event-date">
      <span>{{ event.when.date }}</span>
    </div>
    <div class="event-details">
      <div class="event-details-info">
        <h2>{{ event.name }}</h2>
        <p>{{ event.where }}</p>
        <p>{{ event.when.from }}-{{ event.when.to }}</p>
      </div>

      <div class="ticket-price">
        <p>{{ event.price }}sek</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: { event: Object },
};
</script>

<style lang="scss" scoped>
.event-model {
  width: 320px;
  height: 72px;
  display: flex;
  margin-bottom:12px ;
  

  .event-date {
    width: 56px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #ffffff;
    box-sizing: border-box;
    border-radius: 3px;
    span {
      font-family: 'Fira Sans', sans-serif;;
      font-size: 14px;
      line-height: 17px;

      text-align: center;

      color: #ffffff;
    }
  }

  .event-details {
    width: 224px;
    height: 56px;
    display: flex;
    justify-content: space-between;
    margin-left:24px;
    padding-bottom:4px ;
    border-bottom: 1px solid rgba(255, 255, 255, 0.3);

    .event-details-info {
      h2 {
        font-family: 'Fira Sans', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 22px;
        line-height: 26px;

        color: #ffffff;

        text-shadow: 1px 1px 0px #f56b9a;
        margin: 0px;
      }
      p:nth-of-type(1) {
        font-family: 'Fira Sans', sans-serif;
        font-style: italic;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;

        color: rgba(255, 255, 255, 0.8);
        margin: 0px;
      }

      p:nth-of-type(2) {
        font-family: 'Fira Sans', sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;

        color: #d0d0d0;
        margin: 0px;
      }
    }
    .ticket-price {
      display: flex;
      justify-content: center;
      align-items: flex-end;
      p {
        font-family: 'Fira Sans', sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 17px;
        line-height: 20px;

        text-align: right;

        color: #37aeab;
      }
    }
  }
}
</style>