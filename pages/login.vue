<template>
  <div>
    <button @click='login'>send</button>
    <nuxt-link ref='' :to="{path: toUrl || '/'}">click</nuxt-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'SignInPage',
  head() {
    return {
      title: 'Sign In',
    }
  },
  computed: {
    ...mapState('auth', ['toUrl']),
  },
  methods: {
    login() {
        const requestData = {
          data: this.loginWithExistCredentials()
        }
        this.$auth.login(requestData).then(() => {
          this.$router.push({path: this.toUrl || this.$getRoutePath('index')})
        }).catch(console.log)
    },
    
    loginWithExistCredentials() {
      return {
        login: "9678622972",
        password: "8680026651",
        fromuser: 0
      }
    }
  }
}
</script>
