<template>
  <v-card color="darken-2" class="white--text">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex>
          <div>
            <a class="link headline white--text" :href="repo.html_url" target="_blank">{{repo.name}}</a>
            <div class="grey--text">{{repo.description}}</div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: 'RepoCard',
  props: {
    repo: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
  .link {
    text-decoration: none;
  }
</style>


