import Vue from 'vue'
import Vuex from 'vuex'
import apiService from './api/service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    issues: [],
    tasks: [],
    users: [],
    programs: [],
    selectItem: {},
    type: 'task',
    page: 1,
    limit: 50
  },
  mutations: {
    SET_DATA(state, key, data) {
      state.data[key] = data
    },
    PAGE_INCREMENT(state) {
      state.page++
    },
    SELECT_ITEM(state, item) {
      state.selectItem = item
    },
    TOGGLE_TAB(state, logic) {
      state.type = logic ? 'task' : 'issue'
    },
    FETCH_USERS(state, users) {
      state.users = users
    },
    FETCH_TASKS(state, tasks) {
      state.tasks = tasks
    },
    FETCH_ISSUES(state, issue) {
      state.issues = issue
    }
  },
  getters: {
    getPage: state => {
      return state.page
    },
    getData: state => key => {
      return state.data[key]
    },
    getSelectItem: state => {
      return state.selectItem
    },
    getType: state => {
      return state.type
    },
    getUsers: state => {
      return state.users
    },
    getTasks: state => {
      return state.tasks
    },
    getIssues: state => {
      return state.issues
    }
  },
  actions: {
    async getItem({ commit, getters }, id) {
      commit('SELECT_ITEM', await apiService.getItem(getters.getType, id))
    },
    async loadUsers({ commit }) {
      commit('FETCH_USERS', await apiService.getUsers());
    },
    async loadTasks({ commit }) {
      commit('FETCH_TASKS', await apiService.getTask());
    },
    async loadIssues({ commit }) {
      commit('FETCH_ISSUES', await apiService.getIssue());
    },
    async saveDataItem({ commit, dispatch, getters }) {
      await apiService.saveItem(getters.getType, getters.getSelectItem.id, getters.getSelectItem)
      getters.getType === 'issue' ? dispatch('loadIssues') : dispatch('loadTasks')
    }
  }
})