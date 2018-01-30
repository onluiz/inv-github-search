<template>
  <div>
    <div v-if="userSearch.id > 0">
      <h3>Usuário Encontrado:</h3>
      <user-mini-card></user-mini-card>
    </div>
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
