<template>
  <v-container>
    <h1>Perfil</h1>
    <v-layout row wrap>
      <v-flex xs12 sm4 md6>
        <img :src="userSearch.avatar_url" class="l-avatar"/>
      </v-flex>
      <v-flex xs12 sm8 md6 class="flex-text">
        <v-card>
          <v-card-title primary-title><div>
              <h3 class="headline">{{ userSearch.name }}</h3>
              <div>
                Username: {{ userSearch.login }} <br>
                Seguidores: {{ userSearch.followers }} <br>
                Seguindo: {{ userSearch.following }} <br>
              </div>
            </div>
          </v-card-title>
          <v-card-actions>
            <v-btn color="orange" @click="openPage('/repos')">
              <v-icon>dashboard</v-icon> Repositórios
            </v-btn>
            <v-btn color="orange" @click="openPage('/notes')">
              <v-icon>library_books</v-icon> Notas
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'PerfilPage',
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
  mounted() {
    if (this.userSearch.id === 0) {
      this.$store.commit('openSnackBar', `Para ver um perfil, primeiro
        pesquise por um usuário.`);
      this.$router.history.go(-1);
    }
  },
};
</script>

<style scoped>
  .l-avatar {
    width: 100%;
  }
  @media (max-width: 600px) {
    .flex-text {
      margin-top: -14px;
    }
  }
</style>

