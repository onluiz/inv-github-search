<template>
  <v-container fluid>
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
  </v-container>
</template>

<script>
import RepoCard from '../../components/RepoCard';

const octokit = require('@octokit/rest')();

export default {
  name: 'ReposPage',
  components: {
    RepoCard,
  },
  computed: {
    userSearch: {
      get() {
        return this.$store.state.GlobalModules.SearchModule.user;
      },
      set(user) {
        this.$store.commit('setUser', user);
      },
    },
    reposSearch: {
      get() {
        return this.$store.state.GlobalModules.SearchModule.user.repos;
      },
      set(repos) {
        this.$store.commit('setUserRepos', repos);
      },
    },
  },
  beforeMount() {
    octokit.repos.getForUser({ username: this.userSearch.login })
      .then(({ data }) => {
        this.reposSearch = data;
        this.$store.commit('openSnackBar', '1234');
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.log('err', err);
        this.$store.commit('openSnackBar');
      });
  },
};
</script>
