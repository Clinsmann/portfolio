const initialState = () => ({
	isLoading: true
});

const state = initialState();

const getters = {
	isLoading: state => state.isLoading
};

const actions = {
	TOGGLE_IS_LOADING: ({ commit }, bool) => commit('TOGGLE_IS_LOADING', bool),

	reset: ({ commit }) => commit('RESET')
};

const mutations = {
	TOGGLE_IS_LOADING: (state, data) => state.isLoading = data,

	RESET(state) {
		const newState = initialState();
		Object.keys(newState).forEach(key => {
			state[key] = newState[key]
		});
	}
};

export default {
	namespaced: true,
	state,
	getters,
	actions,
	mutations
}