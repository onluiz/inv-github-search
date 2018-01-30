<template>
  <v-toolbar>
    <v-toolbar-title @click="openPage('/')">
      <!-- <v-btn icon>
        <v-icon>arrow_back</v-icon>
      </v-btn> -->
      GitSearch
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <a :href="urlGithub">Acessar GitHub</a>
    <v-menu bottom left>
      <v-btn icon slot="activator" dark>
        <v-icon>more_vert</v-icon>
      </v-btn>
      <v-list>
        <v-list-tile v-for="(item, i) in items" :key="i">
          <v-list-tile-title @click="openPage(item.page)">{{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      items: [
        { title: 'Inicio', page: '/' },
        { title: 'Anotações', page: '/notes' },
      ],
      urlGithub: 'https://github.com/login/oauth/authorize?client_id=2a4d09cfa80c8fdce2b6',
    };
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
