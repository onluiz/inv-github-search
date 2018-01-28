<template>
  <v-toolbar>
    <v-toolbar-title @click="openPage('/')">Github Search</v-toolbar-title>
    <v-spacer></v-spacer>
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
    };
  },
  methods: {
    openPage(page) {
      this.$router.push(page);
    },
  },
};
</script>
