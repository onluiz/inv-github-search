<template>
  <v-card color="cyan darken-2" class="white--text">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex>
          <div>
            <div class="headline">{{repo.name}}</div>
            <div>
              {{repo.description}}
            </div>
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

