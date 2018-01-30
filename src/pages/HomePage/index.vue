<template>
  <v-container fluid>
    <div>
      <v-layout row>
        <v-flex>
          <h1>Inicio</h1>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex>
          <h2>Digite um nome de usuário do GitHub =)</h2>
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
            color="orange"
            large block
            @click="search">
            Pesquisar
          </v-btn>
        </v-flex>
      </v-layout>
    </div>
    <results-section></results-section>
  </v-container>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import UserCard from '@/components/UserCard';
import UserMiniCard from '@/components/UserMiniCard';
import ResultsSection from './sections/ResultsSection';

export default {
  name: 'HomePage',
  components: {
    UserCard,
    UserMiniCard,
    ResultsSection,
  },
  data() {
    return {
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
  props: {
    code: String,
  },
  mounted() {
    if (this.code) {
      this.$store.dispatch('exchangeForToken', this.code);
    }
  },
};
</script>

