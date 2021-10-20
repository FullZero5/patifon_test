<template>
  <div class="issue-form flex-column flex-align-start">
    <div class="form-row" v-if="getType !=='issue'">
      <label>Координаты</label>
      <div class="field">
        <span>широта: {{ issue.longitude }} </span>
        <span>долгота: {{ issue.latitude}} </span>
      </div>
    </div>
    <div class="form-row">
      <label>Название</label>
      <div class="field">
        <input type="text" class="input input-bordered w-full" v-model="issue.name"/>
      </div>
    </div>
    <div class="form-row" v-if="getType !=='issue'">
      <label>Описание</label>
      <div class="field">
        <textarea class="textarea h-24 textarea-bordered w-full" v-model="issue.description"/>
      </div>
    </div>
    <div class="form-row" v-if="getType !=='issue'">
      <label>Цена</label>
      <div class="field form-control">
        <input type="text" class="input input-bordered" v-model="issue.price">
      </div>
    </div>
    <div class="form-row">
      <label>{{ getType !=='issue'? 'Программа' : 'Сотрудник' }}</label>
      <div class="field">
        <select class="select select-bordered w-full max-w-xs">
          <option   v-for="i in (getType !=='issue') ? getUsers : getPrograms" :value="i.id" :key="i.id">{{i.name}}</option>
        </select>
      </div>
    </div>
    <div class="submit-row">
      <div class="btn btn-accent" @click="onClickSubmit">
        Сохранить
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IssueForm',
  props: {
    issue: Object
  },
  computed: {
    ...mapGetters([
      'getType',
      'getUsers',
      'getPrograms'
    ])
  },
  methods: {
    ...mapActions([
      'saveDataItem',
      ''
    ]),
    onClickSubmit() {
      this.saveDataItem()
    }
  }
}
</script>

<style scoped lang="scss">
  .issue-form {
    gap: 10px;

    .form-row {
      display: flex;
      width: 100%;
      text-align: left;
      flex-direction: column;
      label {
        text-align: left;
      }
    }

    .submit-row {
      .button {
        padding: 10px;
        font-weight: bold;
        background-color: limegreen;
      }
    }
  }
</style>
