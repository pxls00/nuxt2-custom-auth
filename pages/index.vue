<template>
  <div class="container container--fluid">
    <button class='btn btn--primary'>main</button>
    <nuxt-link :to="$getRoutePath('settings')" class="link">settings</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  head() {
    return {
      title: 'Home',
    }
  },
}
</script>
