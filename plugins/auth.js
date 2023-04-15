import cookieMethods from '~/helpers/cookieMethods'
import {AUTH_USER_KEY, AUTH_TOKEN_NAME} from '~/constants/auth'


export default ({ $cookies, $api, store, $getRoutePath, app }, inject) => {
  const cookie = cookieMethods($cookies)
  
  const auth = {
    // set token and cookie user, token and store user , token
    setUserData(data) {
      cookie.set(AUTH_USER_KEY, data.user)
      cookie.set(AUTH_TOKEN_NAME, data.token)
      store.dispatch('auth/login', data)
    },

    // set token and cookie user, token and store user , token with exist credentials
    setUserDataWithExistCredentials() {
      const cookieUser = cookie.get(AUTH_USER_KEY)
      const cookieToken = cookie.get(AUTH_TOKEN_NAME)
      const data = {
        token: cookieToken || null,
        user: cookieUser
      }
      store.dispatch('auth/login', data)
    },

    // clear cookie and and store
    clearUserData() {
      cookie.delete(AUTH_TOKEN_NAME)
      cookie.delete(AUTH_USER_KEY)
      store.dispatch('auth/logout')
    },

    // request to login
    async login (requestData) {
      // clear user data
      this.clearUserData()
      // send request from api
      const res = await $api.auth.login(requestData)
      // set user data
      this.setUserData(await res)
    },
  }

  // Inject $auth
  inject('auth', auth)
}