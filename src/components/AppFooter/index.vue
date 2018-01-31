<template>
  <v-footer class="pa-3">
    <v-spacer></v-spacer>
    <div>GitSearch © {{ currentDate }}</div>
  </v-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      currentDate: new Date().getFullYear(),
    };
  },
};
</script>
