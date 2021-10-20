<template>
  <div class="flex-row flex-justify-between">
    <div style="flex-grow:2" class="flex-column left-side">
      <h3>Списки</h3>
      <div class="flex-row list-type-selector">
        <div class="tabs">
          <button :class="{ 'tab tab-lifted': true,'tab-active': isActive }" @click="toggleTab">Задачи</button>
          <button :class="{ 'tab tab-lifted': true,'tab-active': !isActive }" @click="toggleTab">Проблемы</button>
        </div>
      </div>
      <div class="overscroll-auto overflow-auto h-72">
        <items-list :items="isActive? getTasks : getIssues"></items-list>
      </div>
    </div>
    <div style="flex-grow:2" class="flex-column right-side">
      <h3>Формы</h3>
      <div class="card-wrapper">
        <issue-form :issue="getSelectItem"/>
      </div>
    </div>
  </div>
</template>

<script>
import ItemsList from '@/components/ItemsList'
import IssueForm from '@/components/IssueForm'
import { mapGetters, mapMutations } from 'vuex'

export default {
  name: 'MainLayout',
  components: { IssueForm, ItemsList },
  data() {
    return {
      isActive: true
    }
  },
  computed: {
    ...mapGetters([
      'getTasks',
      'getIssues',
      'getSelectItem'
    ])
  },
  methods: {
    ...mapMutations({
      toggle: 'TOGGLE_TAB'
    }),
    toggleTab() {
      this.isActive = !this.isActive;
      this.toggle(this.isActive)
    }
  }
}
</script>

<style scoped lang="scss">
  .left-side {
    padding: 0 10px;
    border-right: 1px solid black;
    .list-type-selector {
      .active {
        font-weight: bolder;
      }
    }
  }
  .right-side {
    padding: 0 10px;
  }
</style>
