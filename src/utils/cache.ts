type cacheValue = string | number | any[] | object

class cache {
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    } else {
      return Promise.reject(new Error('错误'))
    }
  }

  setCache(key: string, value: cacheValue) {
    window.localStorage.setItem(key, JSON.stringify(value))
  }

  removeCache(key: string) {
    window.localStorage.removeItem(key)
  }

  clearCache() {
    window.localStorage.clear()
  }
}

export default cache
