<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.svg" />
    <section>
      <h1>Where It's @</h1>
      <p>Ticketing made easy</p>
    </section>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.home {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 600px;

  section {
    width: 282px;
    height: 122px;

    h1 {
      width: 282px;
      font-family: 'Sansita', sans-serif;
      font-style: normal;
      font-weight: 700;
      font-size: 32px;
      line-height: 37px;
      text-align: center;
      margin: 16px 0px 0px 0px;
      color: #f56b9a;
    }

    p {
      width: 282px;

      font-family: 'Fira Sans', sans-serif;
      font-size: 22px;
      font-style: italic;
      font-weight: 400;
      line-height: 26px;
      letter-spacing: 0em;
      text-align: center;
      margin: 16px 0px 0px 0px;
      color: #fff;
    }
  }
}
</style>