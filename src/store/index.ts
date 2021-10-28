import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'
export const key: InjectionKey<Store<RootStateTypes>> = Symbol('key')
import tabList from '@/store/modules/tabList'
import collapsed from '@/store/modules/collapsed'
import RootStateTypes from '@/store/interFace'
export type state = {}

export default createStore<RootStateTypes>({
  modules: {
    tabList,
    collapsed
  }
})
