<template>
  <v-card>
    <v-card-media
      class="media white--text"
      height="200px"
      @click="$router.push('/perfil')"
      :src="userSearch.avatar_url">
    </v-card-media>
    <v-card-title>
      <div>
        <div class="headline">{{ userSearch.name }}</div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn 
        class="btn-test" 
        color="orange" 
        @click="$router.push('/perfil')">
          <v-icon>assignment_ind</v-icon>
          Abrir Perfil
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'UserMiniCard',
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
  methods: {
    clean() {
      this.$store.commit('cleanUser');
    },
  },
};
</script>

<style scoped>
  .btn-test {
    width: 100% !important;
  }
</style>
