<template>
  <v-container>
    <h1>Inicio</h1>
    <form @submit.prevent="search">
      <v-layout row wrap>
        <v-flex xs12 sm5>
          <v-text-field
            id="userSearch"
            name="userSearch"
            label="Nome de usuário GitHub aqui!"
            v-model="searchText"
          ></v-text-field>
        </v-flex>
        <v-flex xs12 sm7>
          <v-btn
            color="orange"
            type="submit">
            <v-icon>search</v-icon>
            Pesquisar
          </v-btn>
          <v-btn color="orange" @click="clean">
            <v-icon>clear_all</v-icon>
            Limpar
          </v-btn>
        </v-flex>
      </v-layout>
    </form>
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

