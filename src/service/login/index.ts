import { IData } from './../types'
import { wxRequest } from '@/service'
import { IAccount } from './types'
enum LoginApi {
  login = '/login',
  LoginUserInfo = '/users/', // 用法: /users/1
  UserMenus = '/role/' // 用法: role/1/menu
}

export function login<T>(data: IAccount) {
  return wxRequest.post<IData<T>>({
    url: LoginApi.login,
    data
  })
}

export function getUserInfo(id: number) {
  return wxRequest.get<IData>({
    url: LoginApi.LoginUserInfo + id
  })
}

export function getUserMenus(id: number) {
  return wxRequest.get<IData>({
    url: LoginApi.UserMenus + id + '/menu'
  })
}
