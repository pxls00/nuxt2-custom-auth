const unnecessaryAuthPages = [
  'login',
  'register'
]

export default function ({ redirect, $auth,$getRoutePath, route, store}) {
  $auth.setUserDataWithExistCredentials()

  store.commit('auth/setUrl', route.query.to ? route.query.to : null)

  if(!unnecessaryAuthPages.some((_route) => route.name.startsWith(_route)) && !store.state.auth.loggedIn && !store.state.auth.tokenLocal) {
    if(route.path !== $getRoutePath('index')) {
      redirect({path: $getRoutePath('login'), query: {
        to: route.path
      }})
    }else {
      redirect($getRoutePath('login'))
    }
  }else if(store.state.auth.loggedIn && store.state.auth.tokenLocal && store.state.auth.toUrl) {
    redirect({path: store.state.auth.toUrl})
  }else if(unnecessaryAuthPages.some((_route) => route.name.startsWith(_route) && store.state.auth.loggedIn && !!store.state.auth.tokenLocal)) {
    redirect({path: $getRoutePath('index')})
  }
}
