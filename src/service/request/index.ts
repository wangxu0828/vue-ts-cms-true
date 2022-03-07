import { cache } from '@/utils'
import axios from 'axios'
import type { AxiosInstance } from 'axios'

import { ElLoading } from 'element-plus'

import type { WXConfig } from './types'
class HYRequest {
  instance: AxiosInstance
  loading: any
  showLoading: boolean
  constructor(config: WXConfig) {
    this.instance = axios.create(config)
    this.showLoading = config.showLoading || true
    if (config.customInterceptors?.reqInterceptor) {
      this.instance.interceptors.request.use(
        config.customInterceptors.reqInterceptor,
        config.customInterceptors.reqErrInterceptor
      )
    }

    if (config.customInterceptors?.resInterceptor) {
      this.instance.interceptors.response.use(
        config.customInterceptors.resInterceptor,
        config.customInterceptors.resErrInterceptor
      )
    }

    this.instance.interceptors.request.use(
      (req) => {
        if (this.showLoading) {
          this.loading = ElLoading.service({
            text: '加载中....',
            background: 'rgba(0, 0, 0, 0.3)'
          })
        }
        if (cache.getCache('token')) {
          if (req.headers) {
            req.headers.Authorization = 'Bearer ' + cache.getCache('token')
          }
        }
        return req
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res.data
      },
      (err) => {
        return err
      }
    )
  }

  request<T>(config: WXConfig<T>) {
    if (config.customInterceptors?.reqInterceptor) {
      config = config.customInterceptors.reqInterceptor(config)
    }
    if (config.showLoading === false) {
      this.showLoading = false
    }
    return new Promise<T>((resolve, reject) => {
      this.instance
        .request<any, T>(config)
        .then((res) => {
          if (config.customInterceptors?.resInterceptor) {
            res = config.customInterceptors.resInterceptor(res)
          }
          resolve(res)
        })
        .catch((err) => {
          reject(err)
        })
        .finally(() => {
          this.loading.close()
        })
    })
  }

  get<T>(config: WXConfig<T>) {
    return this.request({ method: 'GET', ...config })
  }

  post<T>(config: WXConfig<T>) {
    return this.request({ method: 'POST', ...config })
  }

  delete<T>(config: WXConfig<T>) {
    return this.request({ method: 'DELETE', ...config })
  }

  patch<T>(config: WXConfig<T>) {
    return this.request({ method: 'PATCH', ...config })
  }
}

export default HYRequest
