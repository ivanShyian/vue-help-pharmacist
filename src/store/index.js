import { createStore } from 'vuex'

export default createStore({
  state() {
    return {
      helpCount: null,
      result: []
    }
  },
  getters: {
    result(state) {
      return state.result
    }
  },
  mutations: {
    calcResult(state, params) {
      state.result = params.map(e => {
        return {
          name: e.param,
          value: Math.floor((100 / state.helpCount) * e.count)
        }
      })
    },
    calcCount(state, params) {
      state.helpCount = params.map(e => e.count).reduce((ac, sm) => ac + sm, 0)
    }
  },
  actions: {
    setResult({ commit }, params) {
      commit('calcCount', params)
      commit('calcResult', params)
    }
  }
})
