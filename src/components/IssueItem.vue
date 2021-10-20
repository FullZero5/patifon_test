<template>
  <div class="issue-item cursor-pointer bg-white hover:bg-gray-50" @click="selectItem(item.id)">
    <span>{{ item.id }}</span>
    <span>{{ item.name }}</span>
    <span v-if="getType =='issue'">{{ getUserName(item.user) }}</span>
    <span>{{ item.price }}</span>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'IssueItem',
  props: {
    item: Object
  },
  computed: {
    ...mapGetters([
      'getType',
      'getUserName'
    ])
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
