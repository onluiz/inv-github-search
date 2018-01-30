<template>
  <div>
    <img :src="userSearch.avatar_url" />

    informacoes e mais informacoes aqui
  </div>
</template>

<script>
export default {
  name: 'PerfilPage',
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
};
</script>
