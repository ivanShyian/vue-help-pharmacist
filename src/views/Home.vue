<template>
  <div class="app__home home">
    <div class="home__circle">
      <div class="home__content">
        <span>Добро пожаловать в игру</span>
        <h1>Помоги Фармацевту</h1>
        <button @click="$router.push('/actions')">Начать</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
@import "./../template";
.home {
  position: relative;
  &__circle {
    background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
    position: absolute;
    width: 860px;
    height: 860px;
    border-radius: 50%;
    top: -5%;
    left: 10%;
    display: flex;
    justify-content: center;
  }
  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    max-width: 580px;
    padding-left: 1.5rem;
    span {
      font-family: Avenir, sans-serif;
      font-size: 2.6rem;
      letter-spacing: 0.02em;
      text-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
    }
    h1 {
      font-family: Montserrat, sans-serif;
      letter-spacing: 0.02em;
      font-size: 5.1rem;
    }
    @include simpleButton(#8e9ad5, "",2.2rem);
    button {
      margin: 0 auto;
      padding: 1.7rem 7rem;
    }
    button:active {
      background: #bfbfbf;
    }
  }
}
</style>
