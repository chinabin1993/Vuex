import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import createLogger from 'vuex/dist/logger'
const debug = process.env.NODE_ENV !== 'production'
console.log(debug)
Vue.use(Vuex)

export default new Vuex.Store({
	state,
	mutations,
	actions,
	getters,
	plugins: debug ? [createLogger()] : []
})
