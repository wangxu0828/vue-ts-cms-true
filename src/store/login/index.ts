import type { Module } from 'vuex'

import type { ILoginState } from './type'
import { IRootState } from '../types'

export const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    return {
      token: '',
      userInfo: {},
      userMenus: []
    }
  },
  mutations: {},
  actions: {},
  getters: {}
}
