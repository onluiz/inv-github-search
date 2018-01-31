<template>
  <v-container grid-list-xs>
    <v-list clas="list" two-line subheader>
      <v-subheader>{{ userSearch.name }}</v-subheader>
      <template v-for="(repo, index) in reposSearch">
        <v-divider v-if="index > 0" :key="reposSearch.name"></v-divider>
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

<style scoped>
  .list {
    margin-top: 10px;
    padding-bottom: 0;
  }
</style>