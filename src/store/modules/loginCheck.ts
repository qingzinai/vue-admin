import types from '@/store/modules/type'
import {toRaw} from "vue";
const state = {
    token: '',
}
const getters = {
    getToken: () => state.token,
}
const mutations = {
    login(state:any,token: string) {
        state.token = token
    }
}
// const actions = {
//     changeCollapsed({ commit }: any) {
//         commit(types.CHANGE_COLLAPSED)
//     }
// }

export default {
    namespaced: true,
    state,
    getters,
    mutations,
}
