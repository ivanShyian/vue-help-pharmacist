<template>
  <div class="actions__sidebar sidebar">
    <div class="sidebar__buttons">
      <div><i class="fa fa-home"></i></div>
      <div><i class="fas fa-sync"></i></div>
    </div>
    <div class="sidebar__params">
      <span>Параметры:</span>
      <ul>
        <li v-for="p in params" :key="p.id">
          <i :class="p.icon"></i>
          <span>{{ p.count }}</span>
        </li>
      </ul>
    </div>
    <div class="sidebar__queue">
      <p>Осталось в очереди</p>
      <span><b>14</b>/15</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang="scss">
@import "../../template";
.sidebar {
  &__buttons {
    display: flex;
    padding: 3rem .5rem 0 2rem;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: white;
      padding: 1rem;
      border-radius: 50%;
      margin-right: 1.5rem;
      @media (min-width: 2000px) {
        padding: 2rem;
      }
      i {
        color: #FF5864;
        font-size: 1.5rem;
        @media (min-width: 2000px) {
          font-size: 3rem;
        }
      }
    }
    div:last-child {
      margin-right: 0;
    }
  }
  &__params {
    padding: 0 .5rem;
    width: 90%;
    margin: 0 auto;
    span {
      font-family: Avenir, sans-serif;
      font-weight: 700;
      display: block;
      font-size: 2rem;
      color: white;
      margin-bottom: 1.5rem;
      @media (min-width: 2000px) {
        font-size: 3rem;
      }
    }
    ul {
      padding: 0;
      margin: 0;
      list-style: none;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      li {
        flex: 0 0 35%;
        padding: .5rem 1rem;
        display: flex;
        align-items: center;
        background-color: white;
        border-radius: 5rem;
        margin: 0 1rem 2rem 0;
        @media (min-width: 2000px) {
          padding: 1.5rem 1.5rem;
        }
        span, i {
          margin: 0;
          font-size: 3rem;
          @media (min-width: 2000px) {
            font-size: 4rem;
          }
        }
        span {
          color: #424242;
        }
        i {
          margin: 0 3rem 0 0;
        }
      }
      @include faGradient();
    }
  }
  &__queue {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgba(255, 255, 255, .2);
    color: white;
    padding: 1rem .5rem;
    @media (min-width: 2000px) {
      padding: 2rem .5rem;
    }
    p, span {
      text-align: center;
      font-size: 2.4rem;
      font-family: Avenir, sans-serif, sans-serif;
      @media (max-width: 1450px) {
        font-size: 2rem;
      }
      @media (max-width: 1250px) {
        font-size: 1.6rem;
      }
      @media (min-width: 2000px) {
        font-size: 3rem;
      }
    }
    p {
      margin: 0 0 .2rem 0;
    }
  }
}
</style>
