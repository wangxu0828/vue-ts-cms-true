import WXRequest from './request'

export const wxRequest = new WXRequest({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 5000,
  customInterceptors: {
    reqInterceptor: (req) => req,
    reqErrInterceptor: (err) => err,
    resInterceptor: (res) => res,
    resErrInterceptor: (err) => err
  }
})
