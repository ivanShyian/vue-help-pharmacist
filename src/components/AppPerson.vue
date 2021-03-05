<template>
  <li class="interactive__person-card person-card" :id="user.id">
    <div class="person-card__image">
      <img :src="require(`@/assets/persons/${user.img}`)" alt="User image">
    </div>
    <div class="person-card__content">
      <span>{{ user.name }} {{ correctAgeWord }}</span>
      <p>{{ user.message }}</p>
    </div>
    <app-card-label :opacity="calcOpacity"
                    :type="type"
    ></app-card-label>
  </li>
</template>

<script>
import AppCardLabel from '@/components/ui/AppCardLabel'
import { secondWordAfterAge } from '@/utils/age'

export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    opacity: {
      type: Object,
      required: false
    },
    type: {
      type: Number,
      required: false
    }
  },
  computed: {
    correctAgeWord() {
      return secondWordAfterAge(this.user.age)
    },
    calcOpacity() {
      return +Object.keys(this.opacity) === this.user.id ? this.opacity[this.user.id] : 0
    }
  },
  components: {
    AppCardLabel
  }
}
</script>

<style scoped lang="scss">
.person-card {
  position: absolute;
  top: 10%;
  left: 44%;
  box-shadow: 0 0 40px rgba(127, 127, 127, 0.4);
  border-radius: 40px;
  height: 550px;
  background: white;
  max-width: 550px;
  @media (min-width: 1700px) {
    left: 44%;
    max-width: 650px;
    height: 650px;
  }
  @media (min-width: 2000px) {
    border-radius: 60px;
    max-width: 750px;
    height: 750px;
    left: 50%;
  }
  @media (max-height: 800px) {
    max-width: 400px;
    height: 400px;
  }

  &__image {
    img {
      pointer-events: none;
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
