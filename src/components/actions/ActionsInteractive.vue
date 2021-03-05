<template>
  <div class="actions__interactive interactive">
    <div class="interactive__content">
        <ul class="interactive__people">
          <vue-swing :config="config"
                     ref="vueswing"
                     @dragmove="dragMove"
                     @dragend="dragEnd"
                     @throwout="onThrowout">
            <app-person v-for="user in users"
                        :opacity="opacity"
                        :type="paramType"
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
import { directionChecker, directionType } from '@/utils/direction'
import { swingConfig } from '@/utils/swing-config'
import AppPerson from '@/components/AppPerson'
import VueSwing from 'vue-swing'

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
        this.opacity = {}
        this.paramType = 0
        this.$emit('exact-length', this.users.length)
        this.$emit('clear')
      }
    }
  },
  data() {
    return {
      config: swingConfig,
      users: this.people,
      byButton: false,
      paramType: 0,
      opacity: {}
    }
  },
  methods: {
    onThrowout({ target, throwDirection }) {
      if (this.byButton) {
        this.opacity = {
          [target.id]: 1
        }
        this.paramType = directionType(throwDirection)
        setTimeout(() => {
          this.throwCard(target, throwDirection)
        }, 200)
      } else {
        this.paramType = directionType(throwDirection)
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
    },
    dragMove({ target, throwOutConfidence, throwDirection }) {
      if (throwOutConfidence > 0.5 && throwDirection.toString() !== 'Symbol(INVALID)') {
        this.paramType = directionType(throwDirection)
        this.opacity = {
          [target.id]: throwOutConfidence
        }
      } else {
        this.opacity = {}
      }
    },
    dragEnd() {
      this.opacity = {}
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
