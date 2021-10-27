import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
export const key: InjectionKey<Store<state>> = Symbol('key')
import tabList from '@/store/modules/tabList'
import collapsed from '@/store/modules/collapsed'

export type state = {}

export default createStore({
  modules: {
    tabList,
    collapsed
  }
})
