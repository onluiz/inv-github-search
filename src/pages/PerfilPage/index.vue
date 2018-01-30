<template>
  <div>
    PerfilPage {{userSearch.name}}
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
