<template>
  <div class="app__actions actions">
    <actions-sidebar :params="params"
                     :counter="counter"
                     :length="persons.length"></actions-sidebar>
    <actions-interactive :counter="counter"
                         @next-person="nextPerson"
                         :params="params"
                         :user="currentUser"></actions-interactive>
  </div>
</template>

<script>
import ActionsSidebar from '@/components/actions/ActionsSidebar'
import ActionsInteractive from '@/components/actions/ActionsInteractive'
export default {
  data() {
    return {
      counter: 0,
      params: [
        { id: 0, icon: 'fas fa-frown', param: 1, count: 0, className: 'action-btn-blue' },
        { id: 1, icon: 'fas fa-smile', param: 2, count: 0, className: 'action-btn-light-blue' },
        { id: 2, icon: 'fas fa-heart', param: 3, count: 0, className: 'action-btn-salad' }
      ],
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
    lastPerson() {
      return this.counter + 1 === this.persons.length
    },
    currentUser() {
      return this.persons[this.counter]
    }
  },
  methods: {
    nextPerson() {
      if (!this.lastPerson) {
        this.counter++
      } else {
        this.$router.push('/final')
        this.counter = 0
      }
    }
  },
  components: { ActionsSidebar, ActionsInteractive }
}
</script>

<style scoped lang="scss">
@import "./../template";
.actions {
  display: flex;
  height: 100%;
  &__sidebar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 0 0 25%;
    background-color: white;
    background-image: linear-gradient(63.53deg, rgba(45, 133, 80, 0.7) 16.62%, rgba(94, 110, 194, 0.7) 83.38%)
  }
  &__interactive {
    flex: 0 0 75%;
  }
}
</style>
