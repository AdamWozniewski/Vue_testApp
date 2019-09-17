<template>
  <v-app>
    <v-content>
      <snackbar />
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

import Snackbar from './components/Core/Snackbar';

export default {
  name: 'App',
  components: {
    Snackbar,
  },
};
</script>
