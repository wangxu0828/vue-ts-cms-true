type cacheValue = string | number | any[] | object

class Cache {
  getCache(key: string) {
    const value = window.localStorage.getItem(key)
    if (value) {
      return JSON.parse(value)
    } else {
      return ''
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
const cache = new Cache()
export default cache
