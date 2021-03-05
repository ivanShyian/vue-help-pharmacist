<template>
  <div :class="['app-label', color]"
       :style="`opacity: ${opacity ?? 0}`">
    <span>Препарат {{ type }}</span>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: Number,
      required: true
    },
    opacity: [Number, Object]
  },
  computed: {
    color() {
      if (this.type === 1) {
        return 'blue'
      } else if (this.type === 2) {
        return 'lightblue'
      } else {
        return 'orange'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  div {
    position: absolute;
    background: transparent;
    top: 50%;
    left: 5%;
    transform: rotate(-25deg);
    span {
      font-weight: 700;
      display: block;
      font-family: Avenir, sans-serif;
      font-size: 3rem;
      letter-spacing: 1px;
      padding: 1.1rem 3rem;
    }
  }
</style>
