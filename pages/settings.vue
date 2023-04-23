<template>
  <div>
    <FormUserSettings />
  </div>
</template>

<script>
import FormUserSettings from '~/components/forms/settings-user-form.vue'
export default {
  name: 'SettingsPage',

  components: {
    FormUserSettings
  },

  head() {
    return {
      title: 'Settings',
    }
  },
}
</script>
