import Vue from 'vue'
const utils = {
    num: 1,
}
Vue.use({
    ...utils,
    install: Vue => {
        Vue.prototype.$utils = utils
    }
})