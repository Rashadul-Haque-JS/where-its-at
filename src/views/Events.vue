<template>
  <div class="events">
    <section>
      <h1>Events</h1>
      <input
        type="text"
        id="search"
        name="search"
        
      />
    </section>
    <router-link 
      :to="'/events/' + event.id"
      v-for="event in events"
      :key="event.name"
    >
      <EventModelView :event="event" />
    </router-link>
  </div>
</template>

<script>
import EventModelView from "../components/EventModelView.vue";
export default {

  data(){
    return{
      image:'require("../assets/search.svg")'
    }
  },
  components: { EventModelView },
  computed: {
    events() {
      return this.$store.getters.allEvents;
    },
  },

 
};
</script>

<style lang="scss" scoped>
.events {
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:45px;
    h1 {
      font-family: 'Sansita', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;

      text-align: center;

      color: #f56b9a;
    }
    input#search {
      width: 310px;
      height: 40px;

      background: rgba(255, 255, 255, 0.1);
      border-radius: 3px;
      // background-image: url('@/assets/search.svg');
     border: none;
      text-indent: 20px;
    }

    
  }
  a{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-decoration: none;
  }
}
</style>