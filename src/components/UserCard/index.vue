<template>
  <v-card>
    <v-card-media :src="user.avatar_url" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{user.name}}</h3>
        <div>
          Repositórios: {{user.public_repos}}<br>
          Seguidores: {{user.followers}} <br>
          Seguindo: {{user.following}} <br>
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange" @click="openPage('/repos')">Repositórios</v-btn>
      <v-btn flat color="orange" @click="openPage('/notes')">Anotações</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import logoInvolves from '@/assets/images/logo.png';

export default {
  name: 'UserCard',
  data() {
    return {
      logoInvolves,
    };
  },
  computed: {
    user: {
      get() {
        return this.$store.state.GlobalModules.SearchModule.user;
      },
    },
  },
  methods: {
    openPage(page) {
      this.$router.push(page);
    },
  },
};
</script>
