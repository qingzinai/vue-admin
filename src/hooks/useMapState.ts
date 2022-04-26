import { useStore, mapState } from 'vuex'
import { computed } from 'vue'
import { key } from '@/store/index'
export function useMapState(mapper: any) {
  // 拿到store独享
  const store = useStore(key)
  // 获取到对应的对象的functions: {name: function, age: function}
  const storeStateFns = mapState(mapper)
  const storeState: any = {}
  // 对数据进行转换
  Object.keys(storeStateFns).forEach(fnKey => {
    //这里绑定this的原因是computed计算属性在进行查找的时候默认会采用this.$store
    //由于setup中没有this绑定(this是undefined)，所以我们需要调用bind手动进行绑定
    const fn = storeStateFns[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })

  return storeState
}
