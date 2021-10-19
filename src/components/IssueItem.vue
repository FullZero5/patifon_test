<template>
  <div class="issue-item" @click="selectItem(item.id)">
    <span>{{ item.id }}</span>
    <span>{{ item.name }}</span>
    <span>{{ item.price }}</span>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'IssueItem',
  props: {
    item: Object
  },
  methods: {
    ...mapActions({
      loadItem: 'getItem'
    }),
    selectItem(id) {
      this.loadItem(id)
    }
  }
}
</script>

<style scoped lang="scss">
  .issue-item {
    border: 1px solid lightgray;
    padding: 8px;
    span {
      padding-right: 15px;
    }
  }
</style>
