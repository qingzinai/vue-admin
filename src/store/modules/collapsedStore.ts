import {defineStore} from 'pinia';

export const collapsedStore = defineStore('collapsedStore', {
    state: () => {
        return {
            collapsed: false
        }

    },
    getters: {},
    //  左侧菜单收缩开启
    actions: {
        changeCollapsed() {
            // 指向state
            return (this.collapsed = !this.collapsed)
        }
    }
});


