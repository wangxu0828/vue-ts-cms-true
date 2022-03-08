import store from '@/store'

const mapRouteToBreadCrumb = (userMenus: any[], currentPath: string): any => {
  for (const item of userMenus) {
    if (item.type === 1) {
      const arr = []
      const menu = mapRouteToBreadCrumb(item.children, currentPath)
      if (menu) {
        arr.push({ name: item.name, url: item.url })
        arr.push({ name: menu.name, url: menu.url })
        store.commit('login/changeCurrentPath', menu.url)
        return arr
      }
    }
    if (item.type === 2) {
      if (item.url === currentPath) {
        return item
      }
    }
  }
}

export default mapRouteToBreadCrumb
