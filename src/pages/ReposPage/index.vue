<template>
  <v-container fluid>
    <back-to page="/perfil" title="Perfil"></back-to>
    <v-layout row>
      <v-flex>
        <h2>
          <v-icon>dashboard</v-icon>Repositórios de {{ userSearch.login }}
        </h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <repo-card v-for="repo in reposSearch" v-bind:key="repo.id" :repo="repo"></repo-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-btn 
          color="orange"
          large block
          @click="nextPage">
          Carregar Mais
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import BackTo from '@/components/Navigation/BackTo';
import RepoCard from '@/components/RepoCard';

export default {
  name: 'ReposPage',
  components: {
    RepoCard,
    BackTo,
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
    this.$store.dispatch('setUserRepos');
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
