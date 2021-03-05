<template>
  <div class="app__actions actions">
    <actions-sidebar :params="params"
                     :initial="initialLength"
                     :length="length"
                     @refresh="update = true"></actions-sidebar>
    <actions-interactive :params="params"
                         :people="persons"
                         :update="update"
                         @clear="update = false"
                         @exact-length="length = $event"
                         @next-card="nextCard"></actions-interactive>
  </div>
</template>

<script>
import ActionsSidebar from '@/components/actions/ActionsSidebar'
import ActionsInteractive from '@/components/actions/ActionsInteractive'
export default {
  mounted() {
    this.initialLength = this.persons.length
    this.length = this.persons.length
  },
  data() {
    return {
      initialLength: 0,
      length: 0,
      update: false,
      params: [
        { id: 0, icon: 'fas fa-frown', param: 1, count: 0, className: 'action-btn-blue', action: 'left' },
        { id: 1, icon: 'fas fa-smile', param: 2, count: 0, className: 'action-btn-light-blue', action: 'up' },
        { id: 2, icon: 'fas fa-heart', param: 3, count: 0, className: 'action-btn-salad', action: 'right' }
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
        },
        {
          id: 5,
          name: 'Инна',
          age: 19,
          img: 'mariya.png',
          message: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає,\n' +
            ' але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.\n'
        },
        {
          id: 6,
          name: 'Инна',
          age: 19,
          img: 'mariya.png',
          message: 'Бабуся приймає брендовий препарат від болю в суглобах, він допомагає,\n' +
            ' але занадто дорогий. У Вас є якісний аналог з нижчою ціною? Якщо ні — давайте бренд.\n'
        }
      ]
    }
  },
  watch: {
    update(newV) {
      if (newV) {
        this.params = this.params.map(el => {
          el.count = 0
          return el
        })
      }
    }
  },
  methods: {
    nextCard({ length, direction }) {
      this.length = length
      this.params = this.params.map(el => {
        if (direction.toLowerCase().includes(el.action)) {
          el.count++
          return el
        }
        return el
      })
      if (!this.length) {
        this.$store.dispatch('setResult', this.params)
      }
    }
  },
  components: {
    ActionsSidebar,
    ActionsInteractive
  }
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
