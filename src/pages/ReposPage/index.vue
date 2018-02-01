<template>
  <v-container>
    <h1>Repositórios</h1>
    <v-list clas="list" two-line subheader>
      <v-subheader><h3>Repositórios de {{ userSearch.login }}</h3></v-subheader>
      <template v-for="repo in reposSearch">
        <v-divider v-if="repo.id > 0" :key="repo.id"></v-divider>
        <v-list-tile v-bind:key="repo.name" :href="repo.html_url" target="_blank">
          <v-list-tile-content>
            <v-list-tile-title>{{repo.name}}</v-list-tile-title>
            <v-list-tile-sub-title>{{repo.description}}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
      <v-btn
        color="orange"
        large block
        @click="nextPage">
        Carregar Mais
      </v-btn>
    </v-list>
  </v-container>
</template>

<script>
import RepoCard from '@/components/RepoCard';

export default {
  name: 'ReposPage',
  components: {
    RepoCard,
  },
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
    reposSearch() {
      return this.$store.state.GlobalModules.SearchModule.user.repos;
    },
  },
  mounted() {
    if (this.userSearch.id === 0) {
      this.$store.commit('openSnackBar', `Para ver repositórios, primeiro
        pesquise por um usuário.`);
      this.$router.history.go(-1);
    } else {
      this.$store.dispatch('setUserRepos');
    }
  },
  methods: {
    nextPage() {
      this.$store.dispatch('nextReposPage');
    },
    previousPage() {
      this.$store.dispatch('previousReposPage');
    },
  },
};
</script>

<style scoped>
  .list {
    margin-top: 10px;
    padding-bottom: 0;
  }
</style>