<template>
  <div id="app">
    <div id="nav" v-if="['Home', 'Events'].includes($route.name)">
      <router-link to="/"></router-link>
      <router-link to="/Events"></router-link>
      <router-link to="/Order"></router-link>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss" >
@import url("https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600&family=Sansita:ital,wght@1,400;1,700&display=swap");

:root {
  --headline-font: "Sansita", sans-serif;
  --others-font: "Fira Sans", sans-serif;
}

html body {
  display: flex;
  justify-content: center;
  align-items: center;

  #app {
    width: 375px;
    height: 667px;
    position: relative;
    background-color: #231f42;
    margin-top: 48px;

    #nav {
      width: 100%;
      height: 8px;
      display: flex;
      justify-content: center;
      position: absolute;

      bottom: 40px;

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
}
</style>
