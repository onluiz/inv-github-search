<template>
  <v-layout row>
    <v-flex>
      <h3>
        <v-btn icon color="orange" @click="openPage()">
          <v-icon>arrow_back</v-icon>
        </v-btn>
        Voltar para <b>{{ title }}</b>
      </h3>
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
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
    openPage() {
      this.$router.push(this.page);
    },
  },
};
</script>
