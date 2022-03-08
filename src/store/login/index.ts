import { ILoginResult } from './../../service/login/types'
import { getUserInfo, getUserMenus, login } from './../../service/login/index'
import type { Module } from 'vuex'
import router from '@/router'
import type { ILoginState } from './type'
import { IRootState } from '../types'
import { cache } from '@/utils'

export const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state: () => {
    const token = cache.getCache('token') || ''
    const userInfo = cache.getCache('userInfo') || {}
    const userMenus = cache.getCache('userMenus') || []
    const currentPath =
      cache.getCache('currentPath') || '/main/analysis/overview'
    return {
      token,
      userInfo,
      userMenus,
      currentPath
    }
  },
  mutations: {
    changeToken(state, payload) {
      state.token = payload
      cache.setCache('token', payload)
    },
    changeUserInfo(state, payload) {
      state.userInfo = payload
      cache.setCache('userInfo', payload)
    },
    changeUserMenus(state, payload) {
      state.userMenus = payload
      cache.setCache('userMenus', payload)
    },
    changeCurrentPath(state, payload) {
      state.currentPath = payload
      cache.setCache('currentPath', payload)
    }
  },
  actions: {
    loginAction: async function ({ commit }, payload) {
      const res = await login<ILoginResult>(payload)
      const { id, token } = res.data
      commit('changeToken', token)
      const userInfo = await getUserInfo(id)
      const userMenus = await getUserMenus(id)
      commit('changeUserInfo', userInfo.data)
      commit('changeUserMenus', userMenus.data)
    },
    leaveAction: () => {
      cache.clearCache()
      router.push('/login')
    }
  },
  getters: {}
}
