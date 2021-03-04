<template>
  <div class="actions__interactive interactive">
    <div class="interactive__content">
      <app-person :user="currentUser"></app-person>
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

export default {
  components: { AppPerson },
  props: {
    params: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      counter: 0,
      persons: [
        {
          id: 0,
          name: 'Марія',
          age: 19,
          img: 'mariya.png',
          message: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає,\n' +
            ' але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.\n'
        },
        {
          id: 1,
          name: 'Степан',
          age: 61,
          img: 'stepan.png',
          message: ' Спросоння відсунув гарячий чайник рукою та обпікся.' +
            'У Вас всі ліки від опіків такі дорогі? Можна хороший препарат недорого?'
        },
        {
          id: 2,
          name: 'Любов',
          age: 58,
          img: 'luybov.png',
          message: 'Лікар призначив препарат від артеріальної гіпертензії, а бренд дорого коштує. ' +
            'Тому мені потрібен аналог з хорошою ефективністю та приємною ціною.'
        },
        {
          id: 3,
          name: 'Олександр',
          age: 20,
          img: 'oleksandr.png',
          message: 'Порекомендуйте ефективний препарат від болю в горлі за розумну ціну.'
        },
        {
          id: 4,
          name: 'Ірина',
          age: 55,
          img: 'iryna.png',
          message: 'У мене часто невралгії, лікар призначив вітаміни групи В. Мені потрібен якісний аналог за прийнятною ціною.'
        }
      ]
    }
  },
  computed: {
    currentUser() {
      return this.persons[this.counter]
    }
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
