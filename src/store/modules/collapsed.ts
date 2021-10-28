import types from '@/store/modules/type'
const state = {
  collapsed: false
}
const getters = {}
const mutations = {
  [types.CHANGE_COLLAPSED](state: any) {
    return (state.collapsed = !state.collapsed)
  }
}
const actions = {
  changeCollapsed({ commit }: any) {
    commit(types.CHANGE_COLLAPSED)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
