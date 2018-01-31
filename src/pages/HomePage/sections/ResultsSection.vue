<template>
  <div v-if="userSearch.id > 0">
    <v-container grid-list-xs>
      <v-layout>
        <v-flex xs12 sm6>
          <user-mini-card></user-mini-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import UserMiniCard from '@/components/UserMiniCard';

export default {
  name: 'ResultsSection',
  components: {
    UserMiniCard,
  },
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
};
</script>
