import { ILoginState } from './login/type'

export interface IRootState {
  name: string
  password: string
}

export interface IModuleState {
  login: ILoginState
}

export type IState = IRootState & IModuleState
