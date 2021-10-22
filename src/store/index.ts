import { createStore, Store } from 'vuex'
import { InjectionKey } from 'vue'

export const key: InjectionKey<Store<state>> = Symbol('key')

export type state = {
  count: number
}
export default createStore({
  state: {
    count: 0
  },
  mutations: {
    add(state: any) {
      state.count += 1
    }
  }
})
