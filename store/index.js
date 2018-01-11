/**
 * Created: leezii
 * Date: 2018/1/11
 * Time: 13:12
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({

  state: {
    counter: 11
  },
  mutations: {
    increment (state) {
      state.counter++
    }
  }
})
export default store