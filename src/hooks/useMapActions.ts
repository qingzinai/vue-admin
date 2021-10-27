import { useStore, mapState } from 'vuex'
import { key } from '@/store/index'
export function useMapActions(mapper: any, mapFn: any) {
  const store = useStore(key)
  const storeActionsFns = mapFn(mapper)
  const storeAction: any = {}
  Object.keys(storeActionsFns).forEach(fnKey => {
    storeAction[fnKey] = storeActionsFns[fnKey].bind({ $store: store })
  })
  return storeAction
}
