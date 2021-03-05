<template>
  <div>
    <p>Пути с именем - "{{ currentAddress }}" не было найдено</p>
  </div>
</template>

<script>
export default {
  computed: {
    currentAddress() {
      return this.$route.path
    }
  }
}
</script>

<style scoped lang="scss">
div {
}
p {
  border-radius: 3rem;
  text-align: center;
  margin: 10rem auto;
  box-shadow: rgba(0, 0, 0, 0.25) 0 14px 28px, rgba(0, 0, 0, 0.22) 0 10px 10px;
  padding: 5rem;
  font-size: 1.5rem;
  font-family: Avenir, sans-serif;
  width: 50%;
}
</style>
