import { AUTH_TOKEN_EXPIRE_TIME } from '~/constants/auth'
import expireTimeGenerator from '~/helpers/expireTimeGenerator'

export default function (cookie) {
  return {
    set (name, value, options = {}) {
      const expirationDateTime = expireTimeGenerator(options.expires || AUTH_TOKEN_EXPIRE_TIME)
      const encodedValue = encodeURIComponent(JSON.stringify(value))
      const opts = {
        expires: expirationDateTime,
        ...options
      }
      cookie.set(name, encodedValue, opts) 
    },
    
    delete (name) {
      cookie.remove(name)
    },
    
    get (name) {
      const cookieItem = cookie.get(name)
  
      if(cookieItem) {
        return JSON.parse(decodeURIComponent(cookieItem))
      }
  
      return ''
    }
  }
}