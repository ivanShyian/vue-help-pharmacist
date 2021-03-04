<template>
  <div class="interactive__person-card person-card">
    <div class="person-card__image">
      <img :src="require(`@/assets/persons/${user.img}`)" alt="User image">
    </div>
    <div class="person-card__content">
      <span>{{ user.name }} {{ correctAgeWord }}</span>
      <p>{{ user.message }}</p>
    </div>
  </div>
</template>

<script>
import { secondWordAfterAge } from '@/utils/age'

export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  computed: {
    correctAgeWord() {
      return secondWordAfterAge(this.user.age)
    }
  }
}
</script>

<style scoped lang="scss">
.person-card {
  display: flex;
  flex-direction: column;
  box-shadow: 0 0 40px rgba(127, 127, 127, 0.4);
  border-radius: 40px;
  max-width: 550px;
  @media (min-width: 2000px) {
    border-radius: 60px;
  }
  @media (min-width: 2000px) {
    max-width: 750px;
  }
  &__image {
    img {
      width: 100%;
      height: auto;
    }
  }
  &__content {
    display: flex;
    flex-direction: column;
    font-family: Avenir, sans-serif;
    padding: 2rem 4rem;
    span {
      font-size: 2rem;
      color: #8E9AD5;
      @media (min-width: 2000px) {
        font-size: 3rem;
      }
    }
    p {
      font-size: 1.1rem;
      @media (min-width: 2000px) {
        font-size: 2rem;
      }
    }
  }
}
</style>
