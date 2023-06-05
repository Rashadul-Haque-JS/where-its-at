<template>
  <div class="single-event">
    <nav class="nav">
      <router-link to="/"></router-link>
      <router-link to="/Events"></router-link>
      <router-link to="/Order"></router-link>
    </nav>
    <header>
      <h1>Event</h1>
      <p>So spirit so bright, it's generous delight.</p>
    </header>
    <main>
      <section class="date-time-place">
        <h1>{{ event.name }}</h1>
        <p class="date">
          <span>{{ event.when.date }}</span> kl.
          <span>{{ event.when.from }}-{{ event.when.to }}</span>
        </p>
        <p class="place">@{{ event.where }}</p>
      </section>
      <section class="ticket-price">
        <h2>{{ total }}&nbsp; sek</h2>
        <div class="actions">
          <button @click="decrease">
            <img src="@/assets/decrease.svg" alt="Minus sign" />
          </button>
          <span>{{ tickets }}</span>
          <button @click="increase">
            <img src="@/assets/increase.svg" alt="Plus sign" />
          </button>
        </div>
      </section>
    </main>
    <footer>
      <span v-if="btnDisable">* Minimum 1 ticket required!</span>
      <router-link to="/events">
        <button :disabled="btnDisable" @click="addToOrder">
          Lägg i varukorgen
        </button>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  computed: {
    event() {
      return this.$store.getters.allEvents.find(
        (event) => event.id == this.$route.params.id
      );
    },
    tickets() {
      return this.$store.state.numOfTickets;
    },

    total() {
      return this.event.price * this.tickets;
    },

    btnDisable() {
      return this.tickets < 1 ? true : false;
    },
  },

  methods: {
    increase() {
      this.$store.dispatch("incrTicket", this.event);
    },

    decrease() {
      this.$store.dispatch("decrTicket", this.event);
    },

    addToOrder() {
      this.$store.dispatch("addOrder", this.event);
    },
  },
};
</script>

<style lang="scss" scoped>
.single-event {
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  .nav {
    width: 100%;
    height: 8px;
    display: flex;
    justify-content: center;
    position: absolute;

    bottom: -28px;

    a {
      width: 10px;
      height: 10px;
      margin: 0px 6px;
      background: rgba(255, 255, 255, 0.3);
      border-radius: 100%;

      &.router-link-exact-active {
        color: #ffffff;
      }
    }
  }
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

    p {
      width: 220px;
      font-style: italic;
      font-weight: normal;
      font-size: 19px;
      line-height: 23px;
      text-align: center;

      color: rgba(255, 255, 255, 0.8);
    }
  }

  main {
    .date-time-place {
      margin: 48px 0px 54px 0px;
      h1 {
        font-family: "Sansita", sans-serif;
        font-style: normal;
        font-weight: 700;
        font-size: 35px;
        line-height: 41px;

        color: #f56b9a;
        margin-bottom: 0px;
        text-align: center;
      }
      .date {
        font-style: normal;
        font-weight: bold;
        font-size: 19px;
        line-height: 23px;

        text-align: center;

        color: #37aeab;
        margin: 8px 0px;
      }

      .place {
        font-style: italic;
        font-weight: normal;
        font-size: 16px;
        line-height: 19px;

        text-align: center;

        color: #ffffffb3;
        margin-top: 0px;
      }
    }

    .ticket-price {
      width: 230px;
      height: 130px;
      border: 1px solid #f56b9a;
      font-family: "Fira Sans", sans-serif;

      h2 {
        font-weight: bold;
        font-size: 32px;
        line-height: 38px;

        text-align: center;

        color: #ffffff;

        text-shadow: 1px 1px 0px #f56b9a;
        height: 54px;
        margin: 24px 0px 0px 0px;
      }
      .actions {
        width: 230px;

        height: 50px;
        display: flex;
        border-top: 1px solid #f56b9a;
        button {
          width: 65px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: #231f42;
          border: none;

          img {
            width: 20px;
          }
        }

        span {
          width: 100px;
          display: flex;
          justify-content: center;
          font-size: 24px;
          font-weight: bold;
          align-items: center;
          border-left: 1px solid #f56b9a;
          border-right: 1px solid #f56b9a;
          color: #ffffff;
        }
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    margin-top: 80px;
    span {
      color: #e63636;
      font-size: 0.8rem;
      text-align: center;
    }
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
      margin-top: 8px;
      cursor: pointer;
    }
  }
}
</style>

// Path: src/views/Events.vue

