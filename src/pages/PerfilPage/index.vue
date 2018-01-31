<template>
  <v-container>
    <back-to page="/" title="Inicio"></back-to>
    <h2>Perfil de {{ userSearch.name }}</h2>
    <img :src="userSearch.avatar_url" class="l-avatar"/>
    <v-card>
      <v-card-title>
        <h2>Dados</h2>
      </v-card-title>
      <v-card-text>
        Nome: {{ userSearch.name }} <br>
        Username: {{ userSearch.login }} <br>
        Seguidores: {{ userSearch.followers }} <br>
        Seguindo: {{ userSearch.following }} <br>
      </v-card-text>
      <v-card-actions>
        <v-btn color="orange" @click="openPage('/repos')">
          <v-icon>dashboard</v-icon> Abrir Repositórios
        </v-btn>
        <v-btn color="orange" @click="openPage('/notes')">
         <v-icon>library_books</v-icon> Abrir Notas
        </v-btn>
      </v-card-actions>
    </v-card>    
  </v-container>
</template>

<script>
import BackTo from '@/components/Navigation/BackTo';

export default {
  name: 'PerfilPage',
  components: {
    BackTo,
  },
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
  methods: {
    openPage(page) {
      this.$router.push(page);
    },
  },
};
</script>

<style scoped>
  .l-avatar {
    width: 100%;
  }
</style>

