<template>
  <v-card color="darken-2" class="white--text">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex xs7>
          <div>
            <div class="headline">{{userSearch.name}}</div>
            <div>Foster the People</div>
          </div>
        </v-flex>
        <v-flex xs5>
          <v-card-media
            :src="userSearch.avatar_url"
            height="125px"
            contain
          ></v-card-media>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-btn color="orange" @click="openPage('/perfil')">Abrir Perfil</v-btn>
      <v-btn color="orange" @click="clean">Limpar Pesquisa</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'UserMiniCard',
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
  methods: {
    openPage(page) {
      this.$router.push(page);
    },
    clean() {
      this.$store.commit('cleanUser');
    },
  },
};
</script>
