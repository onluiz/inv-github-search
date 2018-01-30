<template>
  <v-container fluid>
    <v-btn color="orange" @click="$router.push('/perfil')">Voltar</v-btn>
    <v-layout row>
      <v-flex>
        <h2>Repositórios do usuário Luiz Alberto</h2>
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
          color="primary"
          large block
          @click="nextPage">
          Carregar Mais
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import RepoCard from '../../components/RepoCard';

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
