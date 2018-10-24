const actions = {
	actionName(context, name) {
		return context.commit('SET_NAME', name)
	}
}
export default actions
