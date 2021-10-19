<template>
  <div class="items-list flex-column flex-justify-start">
    <issue-item v-for="item in items" :item="item" :key="item.id"/>
  </div>
</template>

<script>
import IssueItem from '@/components/IssueItem'

export default {
  name: 'ItemsList',
  components: { IssueItem },
  props: {
    items: Array
  }
}
</script>

<style scoped lang="scss">
  .items-list {
    gap: 10px;
  }
</style>
