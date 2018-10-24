/**
 * 我们一般使用getters来获取state的状态，而不直接使用state
 */
export default {
	gettersName(state) {
		return state.name
	},
	gettersAge(state) {
		return state.age
	}
}
