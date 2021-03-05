<template>
  <div class="app__final final">
    <div class="final__content final-content">
      <div class="final-content__home-btn" @click="$router.push('/')"><i class="fa fa-home"></i></div>
      <div class="final-content__elements">
        <ul class="final-content__results" v-if="results.length">
          <li v-for="res in results" :key="res">
            <span>{{ res.value }}%</span>
            <span>Препарат {{ res.name }}</span>
          </li>
        </ul>
        <div class="final-content__text">
          <span>Ваш результат:</span><br>
          <span><b>«Что я здесь делаю?»</b></span>
          <p>Это тестовое задание, так что не будем углубляться в глубины проблем фармацевтов.</p>
        </div>
      </div>
      <button @click="$router.push('/actions')">Попробовать еще</button>
    </div>
    <div class="final__picture">
      <img src="../assets/final/final.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.getters.result
    }
  }
}
</script>

<style scoped lang="scss">
@import "./../template";
.final {
  width: 100%;
  height: 100%;
  display: flex;

  &__content {
    flex: 1 0 55%;
  }

  &__picture {
    flex: 0 1 45%;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      top: -9.77%;
      right: -10.42%;
    }
  }
}

.final-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  &__home-btn {
    display: flex;
    align-self: flex-start;
    flex-grow: 0;
    padding: 1rem;
    margin: 2rem 0 0 3rem;
    font-size: 2rem;
    border-radius: 50%;
    background: linear-gradient(63.53deg, #2D8550 16.62%, #5E6EC2 83.38%);
    color: white;
    cursor: pointer;
  }
  &__elements {
    display: flex;
    flex-direction: column;
  }
  &__results {
    padding: 0 0 2rem 0;
    display: flex;
    justify-content: center;
    list-style: none;
    border-bottom: 2px solid rgba(0, 0, 0, .2);
    margin: 0 0 3rem 0;
    li {
      display: flex;
      flex-direction: column;
      text-align: center;
      margin-right: 3rem;
      font-family: Avenir, sans-serif;
      font-size: 1.5rem;
      span:first-child {
        font-size: 3rem;
        margin-bottom: 1.5rem;
      }
    }
    li:last-child {
      margin: 0;
    }
  }
  &__text {
    max-width: 580px;
    font-family: Avenir, sans-serif;
    span {
      color: #8E9AD5;
      letter-spacing: 0.02em;
      font-size: 2rem;
    }
    span b {
      font-size: 2.5rem;
    }
    p {
      font-size: 1.5rem;
    }
  }
  @include simpleButton(white, "", "");
  button {
    padding: 1rem 2rem;
    align-self: flex-start;
    margin: 0 0 4rem 10rem;
    background: linear-gradient(90deg, #D9D9D9 0%, #A1A1A1 100%);;
  }
}
</style>
