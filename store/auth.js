export const state = () => ({
  user: null,
  loggedIn: false,
  tokenLocal: null,
  toUrl: null,
})

export const mutations = {
  setUser(state, user) {
    if(Object.keys(user).length) {
      state.user = user
    }
  },

  setToken(state, token) {
    if(token) {
      state.tokenLocal = token
      state.loggedIn = true
    }
  },

  setUrl(state, url) {
    state.toUrl = url
  },

  clearUser(state) {
    state.user = null
  },

  clearToken(state) {
    state.tokenLocal = null
    state.loggedIn = false
  }
}

export const actions = {
  // fetchUser({ commit }) {
  // },
  
  login({ commit }, {token, user}) {
    commit('setToken', token)
    commit('setUser', user)
  },

  logout ({ commit }) {
    commit('clearUser')
    commit('clearToken')
  }
}