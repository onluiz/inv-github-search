<template>
  <v-layout row>
    <v-flex>
      <h1>
        <v-btn icon color="orange" @click="openPage()">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        Perfil
      </h1>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'BackTo',
  props: {
    page: {
      type: String,
      default: '/',
    },
  },
  methods: {
    openPage() {
      this.$router.push(this.page);
    },
  },
};
</script>
