<template>
  <v-app dark>
    <app-header></app-header>
    <router-view></router-view>
    <snack-bar></snack-bar>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import SnackBar from '@/components/SnackBar';

export default {
  name: 'App',
  components: {
    AppHeader,
    SnackBar,
  },
};
</script>
