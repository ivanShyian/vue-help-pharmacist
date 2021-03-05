<template>
  <div class="actions__interactive interactive">
    <div class="interactive__content">
      <vue-swing :config="config">
        <app-person :user="user" ref="card"></app-person>
      </vue-swing>
    </div>
    <div class="interactive__buttons">
      <button v-for="btn in params"
              :key="btn.id"
              :class="btn.className"
      >Препарат {{ btn.param }}
      </button>
    </div>
  </div>
</template>

<script>
import AppPerson from '@/components/AppPerson'
import VueSwing from 'vue-swing'

export default {
  props: {
    params: {
      type: Array,
      required: true
    },
    persons: {
      type: Array,
      required: true
    },
    counter: {
      type: Number,
      required: true
    },
    user: {
      type: Object,
      required: true
    }
  },
  emits: {
    'next-person': {
      type: Function,
      required: true
    }
  },
  data() {
    return {
      config: {
        maxRotation: 80,
        isThrowOut: this.dragend,
        allowedDirections: [
          VueSwing.Direction.UP,
          VueSwing.Direction.LEFT,
          VueSwing.Direction.RIGHT
        ]
      }
    }
  },
  methods: {
    dragend(...event) {
      if (event[3] === 1) {
        this.$emit('next-person')
      }
    }
  },
  components: {
    AppPerson,
    VueSwing
  }
}
</script>

<style scoped lang="scss">
@import '../../template';

.interactive {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  &__content {
    flex: 0 0 85%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__buttons {
    z-index: 5;
    flex: 0 0 15%;
    display: flex;
    align-items: center;
    @include simpleButton(white, "", "");
    button {
      padding: 1.5rem 3rem;
      margin-right: 1.5rem;
      font-family: Avenir, sans-serif;
      @media (min-width: 2000px) {
        padding: 2.5rem 5rem;
        font-size: 2rem;
      }
    }
    button:last-child {
      margin: 0;
    }
  }
}
</style>
