<template>
  <v-app dark>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
    <snack-bar></snack-bar>
  </v-app>
</template>

<script>
import AppHeader from '@/components/AppHeader';
import AppFooter from '@/components/AppFooter';
import SnackBar from '@/components/SnackBar';

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    SnackBar,
  },
};
</script>
