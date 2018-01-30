<template>
  <div>
    <user-mini-card v-if="userSearch.id > 0"></user-mini-card>
    <h2 v-if="userSearch.id === 0">Nenhum resultado filtrado ainda :/</h2>
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
