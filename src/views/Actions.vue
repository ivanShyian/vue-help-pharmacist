<template>
  <div class="app__actions actions">
    <actions-sidebar :params="params"></actions-sidebar>
    <actions-interactive :params="params"></actions-interactive>
  </div>
</template>

<script>
import ActionsSidebar from '@/components/actions/ActionsSidebar'
import ActionsInteractive from '@/components/actions/ActionsInteractive'
export default {
  data() {
    return {
      params: [
        { id: 0, icon: 'fas fa-frown', param: 1, count: 0, className: 'action-btn-blue' },
        { id: 1, icon: 'fas fa-smile', param: 2, count: 0, className: 'action-btn-light-blue' },
        { id: 2, icon: 'fas fa-heart', param: 3, count: 0, className: 'action-btn-salad' }
      ]
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
    background: linear-gradient(63.53deg, rgba(45, 133, 80, 0.7) 16.62%, rgba(94, 110, 194, 0.7) 83.38%);
  }
  &__interactive {
    flex: 0 0 75%;
  }
}
</style>
