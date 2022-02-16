<template>
  <div class="ticket-model">
    <header>
      <p>WHAT</p>
      <h1>{{ ticket.name }}</h1>
    </header>
    <main>
      <div class="place-info">
        <p class="where">WHERE</p>
        <h2>{{ ticket.where }}</h2>
        <p class="place">Göteborgs universitet. Pedagogen, hus A</p>
      </div>
      <div class="others-info">
        <div class="date-info">
          <p>
            {{ ticket.when.date }}
          </p>
          <p class="from">From &#160;{{ ticket.when.from }}</p>
          <p>To &#160;{{ ticket.when.to }}</p>
        </div>
        <div class="seat-info">
          <p>INFO</p>
          <p>{{ticket.info}}</p>
        </div>
      </div>
    </main>
    <footer>
      <img src="../assets/bar_code.svg" alt="Bar code" />
      <p>#A2ED7</p>
    </footer>
  </div>
</template>

<script>
export default {
  props: { ticket: Object },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.ticket-model {
  width: 312px;
  height: 442px;
  background-color: #fff;
  padding: 14px;
  margin: 80px auto 0px auto;
  border-radius: 5px;

  box-shadow: -1px 0px 17px 12px rgba(82, 82, 82, 0.29);

  header {
    height: 88px;
    h1 {
      font-family: "Sansita", sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 26px;
      line-height: 30px;

      align-items: center;

      color: #f56b9a;
      margin: 20px 0px 0px 10px;
    }

    p {
      font-family: "Fira Sans", sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 10px;
      line-height: 12px;
      display: flex;
      align-items: center;

      color: rgba(0, 0, 0, 0.4);
      margin-left: 10px;
    }
  }

  main {
    background: rgba(0, 0, 0, 0.03);

    .place-info {
      border-top: dotted 1px rgba(0, 0, 0, 0.4);
      border-bottom: dotted 1px rgba(0, 0, 0, 0.4);
      padding: 8px 0px 0px 0px;
      .where {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;

        align-items: center;

        color: rgba(0, 0, 0, 0.4);
        margin-left: 10px;
      }

      h2 {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: 600;
        font-size: 18px;
        line-height: 22px;

        align-items: center;

        color: rgba(0, 0, 0, 0.7);
        margin: 10px 0px 6px 10px;
        margin-left: 10px;
      }

      .place {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: bold;
        font-size: 10px;
        line-height: 12px;

        align-items: center;

        margin: 0px 0px 32px 10px;
      }
    }
    .others-info {
      .date-info {
        background-color: #dadada;
        display: flex;
        justify-content: space-between;
        border: 1px dotted;
        padding: 12px 0px;
        p {
          font-family: "Fira Sans", sans-serif;
          font-style: normal;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          padding: 0px 12px;
          color: rgba(0, 0, 0, 0.6);
        }
        .from {
          border-left: 1px dotted rgba(0, 0, 0, 0.4);
          border-right: 1px dotted rgba(0, 0, 0, 0.4);
        }
      }
      .seat-info {
        font-family: "Fira Sans", sans-serif;
        font-style: normal;
        font-weight: normal;
        font-size: 12px;
        line-height: 14px;
        padding: 10px 0px;
        color: rgba(0, 0, 0, 0.6);
        border-bottom: 2px gray solid;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    align-items: center;
    height: 120px;
    margin-top: 28px;
    p {
      font-family: "Fira Sans", sans-serif;
      font-style: normal;
      font-weight: bold;

      color: rgba(0, 0, 0, 0.4);
    }
  }
}
</style>