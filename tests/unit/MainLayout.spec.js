import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import MainScene from '@/components/MainLayout.vue'
import ItemsList from '@/components/ItemsList.vue'
import IssueForm from '@/components/IssueForm.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

const store = new Vuex.Store({
  state: {
    tasks: [{
      'id': 1,
      'name': 'Задача-1',
      'solution': 'foo bar',
      'longitude': 34.232,
      'latitude': 59.1231,
      'price': '1000',
      'program': 1,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, saepe.'
    }],
    issues: [{
      'id': 1,
      'name': 'Задача-1',
      'solution': 'foo bar',
      'longitude': 34.232,
      'latitude': 59.1231,
      'price': '1000',
      'program': 1,
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, saepe.'
    }],
    getSelectItem: {}
  },
  getters: {
    getTasks: () => [],
    getSelectItem: () => []   
  }
})

// eslint-disable-next-line no-undef
describe('MainScene.vue', () => {
  it('renders with mount and does initialize', () => {
    const wrapper = shallowMount(MainScene, { 
      store, 
      localVue 
    })
    expect(wrapper.find(ItemsList).exists()).toBe(true)
    expect(wrapper.find(IssueForm).exists()).toBe(true)
  })
})
