import type { AxiosRequestConfig, AxiosResponse } from 'axios'

export interface WXConfig<T = AxiosResponse> extends AxiosRequestConfig {
  customInterceptors?: {
    reqInterceptor?: (req: AxiosRequestConfig) => AxiosRequestConfig
    reqErrInterceptor?: (err: any) => any
    resInterceptor?: (res: T) => T
    resErrInterceptor?: (err: any) => any
  }
  showLoading?: boolean
}
