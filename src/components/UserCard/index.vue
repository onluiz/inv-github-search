<template>
  <v-card>
    <v-card-media :src="userAvatar" height="200px">
    </v-card-media>
    <v-card-title primary-title>
      <div>
        <h3 class="headline mb-0">{{name}}</h3>
        <div>
          Repositórios: {{public_repos}}<br>
          Seguidores: {{followers}} <br>
          Seguindo: {{following}} <br>
        </div>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn flat color="orange">Repositórios</v-btn>
      <v-btn flat color="orange">Anotações</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import logoInvolves from '@/assets/images/logo.png'
export default {
  name: 'UserCard',
  props: {
    avatar: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    public_repos: {
      type: String,
      required: true,
    },
    followers: {
      type: String,
      required: true,
    },
    following: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      logoInvolves
    };
  },
  computed: {
    userAvatar() {
      return this.avatar || this.logoInvolves;
    },
  },
};
</script>
