import types from '@/store/modules/type'
import router from '@/router/index'
const state = {
  tabList: [{ title: '首页', key: '/home', path: '/home', closable: false }],
  activeKey: ['/home']
}
const getters = {}
const mutations = {
  [types.UP_MENU_TABLIST](state: any, payload: any) {
    state.activeKey = payload.menuItem.keyPath
    router.push({ path: state.activeKey[0] })
    let obj = state.tabList.map((item: any) => {
      if (item.key !== payload.menuItem.key && item.key) {
        return { title: payload.menuItem.item.title, key: payload.menuItem.key, path: payload.menuItem.key, closable: true }
      }
    })
    let obj2: any = {}
    if (obj[0]) {
      state.tabList.push(obj[0])
      state.tabList = state.tabList.reduce(function (item: any, next: any) {
        obj2[next.key] ? '' : (obj2[next.key] = true && item.push(next))
        return item
      }, [])
    }
  },
  [types.SET_ACTIVE_TABLE](state: any, payload: any) {
    state.activeKey = [payload.activeKey]
    router.push({ path: state.activeKey[0] })
  },
  [types.REMOVE_TAB_LIST](state: any, payload: any) {
    state.tabList.map((item: any, index: number) => {
      if (payload.targetKey === item.key) {
        state.tabList.splice(index, 1)
        state.activeKey = [state.tabList[state.tabList.length - 1].key]
      }
    })
  }
}
const actions = {
  upMenuTabList({ commit }: any, payload: [string, boolean]) {
    commit(types.UP_MENU_TABLIST, payload)
  },
  setActiveTable({ commit }: any, payload: any) {
    commit(types.SET_ACTIVE_TABLE, payload)
  },
  removeTabList({ commit }: any, payload: any) {
    commit(types.REMOVE_TAB_LIST, payload)
  }
}
export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
