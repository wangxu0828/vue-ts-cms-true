import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'

import { ElLoading } from 'element-plus'
interface WXConfig extends AxiosRequestConfig {
  customInterceptors?: {
    reqInterceptor?: (req: AxiosRequestConfig) => AxiosRequestConfig
    reqErrInterceptor?: (err: any) => any
    resInterceptor?: (res: AxiosResponse) => AxiosResponse
    resErrInterceptor?: (err: any) => any
  }
  showLoading?: boolean
}

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

        return req
      },
      (err) => {
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res) => {
        return res
      },
      (err) => {
        return err
      }
    )
  }

  request(config: WXConfig) {
    if (config.customInterceptors?.reqInterceptor) {
      config = config.customInterceptors.reqInterceptor(config)
    }
    if (config.showLoading === false) {
      this.showLoading = false
    }
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
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
}

export default HYRequest
