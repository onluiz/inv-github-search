<template>
  <v-container fluid>
    <div v-if="userSearch.id === 0">
      <v-layout row>
        <v-flex>
          <img :src="involvesLogo" alt="">
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <h2>Digite um nome de usuário do GitHub e clique em "Pesquisar" =)</h2>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-text-field
            id="userSearch"
            name="userSearch"
            label="Nome de usuário GitHub aqui!"
            v-model="searchText"
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-btn 
            color="primary"
            large block
            @click="search">
            Pesquisar
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
    <div v-if="userSearch.id > 0">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
        <user-card></user-card>
      </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <v-btn 
            color="primary"
            large block
            @click="clean">
            Limpar Pesquisa
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import involvesLogo from '@/assets/images/logo.png';
import UserCard from '../../components/UserCard';

export default {
  name: 'HomePage',
  components: {
    UserCard,
  },
  data() {
    return {
      involvesLogo,
      searchText: 'onluiz',
    };
  },
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
  methods: {
    search() {
      this.$store.dispatch('setUser', this.searchText);
    },
    clean() {
      this.$store.commit('cleanUser');
    },
  },
};
</script>

