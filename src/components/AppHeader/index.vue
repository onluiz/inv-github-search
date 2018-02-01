<template>
  <div>
    <v-toolbar>
      <v-toolbar-side-icon @click.stop="drawer = !drawer" class="white--text"></v-toolbar-side-icon>
      <v-btn icon v-show="page.path !== '/home'" @click="back">
        <v-icon>arrow_back</v-icon>
      </v-btn>
      <v-slide-y-transition mode="out-in">
        <v-toolbar-title class="white--text" v-text="page.name">
        </v-toolbar-title>
      </v-slide-y-transition>
      <v-spacer/>
      <a class="c-github-login" :href="urlGithub">
        <h3 class="o-labe__github-login">Login</h3>
      </a>
    </v-toolbar>
    <v-navigation-drawer
      app
      temporary
      absolute
      v-model="drawer">
      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :to="item.page"
          :key="item.page">
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import logoGitHubMark32 from '@/assets/images/GitHub-Mark/PNG/GitHub-Mark-32px.png';

export default {
  name: 'AppHeader',
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Inicio', page: '/home', icon: 'home' },
        { title: 'Anotações', page: '/notes', icon: 'library_books' },
        { title: 'Nova Anotação', page: '/notes/new', icon: 'exposure_plus_1' },
        { title: 'Repositórios', page: '/repos', icon: 'dashboard' },
      ],
      urlGithub: 'https://github.com/login/oauth/authorize?client_id=2a4d09cfa80c8fdce2b6',
      logoGitHubMark32,
    };
  },
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
    page() {
      return this.$route;
    },
  },
  methods: {
    back() {
      this.$router.history.go(-1);
    },
  },
};
</script>

<style>
  .c-github-login {
    text-decoration: none;
  }
  .o-labe__github-login {
    color: white;
  }
</style>
