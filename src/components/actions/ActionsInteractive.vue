<template>
  <div class="actions__interactive interactive">
    <div class="interactive__content">
        <ul class="interactive__people">
          <vue-swing :config="config"
                     ref="vueswing"
                     @throwout="onThrowout">
            <app-person v-for="user in users"
                        :key="user.id"
                        :user="user"
            ></app-person>
          </vue-swing>
        </ul>
    </div>
    <div class="interactive__buttons">
      <button v-for="btn in params"
              :key="btn.id"
              :class="btn.className"
              @click="swing(btn.action)"
      >Препарат {{ btn.param }}
      </button>
    </div>
  </div>
</template>

<script>
import AppPerson from '@/components/AppPerson'
import VueSwing from 'vue-swing'
import { directionChecker } from '@/utils/direction'
import { swingConfig } from '@/utils/swing-config'

export default {
  props: {
    params: {
      type: Array,
      required: true
    },
    people: {
      type: Object,
      required: true
    },
    update: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: {
    'exact-length': {
      type: Function,
      required: false
    },
    'next-card': {
      type: Object,
      required: true
    },
    clear: {
      type: Boolean,
      required: false
    }
  },
  watch: {
    update(newValue) {
      if (newValue) {
        this.users = this.people
        this.$emit('exact-length', this.users.length)
        this.$emit('clear')
      }
    }
  },
  data() {
    return {
      byButton: false,
      users: this.people,
      config: swingConfig
    }
  },
  methods: {
    onThrowout({ target, throwDirection }) {
      if (this.byButton) {
        setTimeout(() => {
          this.throwCard(target, throwDirection)
        }, 200)
      } else {
        this.throwCard(target, throwDirection)
      }
    },
    swing(direction) {
      const coordinates = directionChecker(direction)
      this.byButton = true
      const cards = this.$refs.vueswing.cards
      cards[cards.length - 1].throwOut(
        coordinates.x,
        coordinates.y
      )
      this.byButton = false
    },
    throwCard(target, direction) {
      this.users = this.users.filter(e => e.id !== +target.id)
      this.$emit('next-card', {
        length: this.users.length,
        direction: direction.toString()
      })
      if (!this.users.length) {
        return this.$router.push('/final')
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
  &__people {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    div:first-child {
      width: 100%;
      height: 100%;
      li {
        overflow: hidden;
      }
    }
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
