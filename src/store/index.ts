import { createStore, useStore as useOriginStore } from 'vuex'
import type { IRootState, IState } from './types'
import { loginModule } from './login'

const store = createStore<IRootState>({
  state: () => {
    return {
      name: '',
      password: ''
    }
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    login: loginModule
  }
})

export function useStore() {
  return useOriginStore<IState>()
}

export default store
