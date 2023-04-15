import Auth from '@/api/auth'
import User from '@/api/user'

export default ({ $axios }, inject) => {
  const api = {
    auth: Auth($axios),
    user: User($axios),
  }

  // Inject $api
  inject('api', api)
}
