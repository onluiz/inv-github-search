<template>
  <v-container fluid>
    <v-layout row>
      <v-flex>
        <v-btn 
          color="primary"
          large block
          @click="resultPage">
          Pesquisar
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'ResultPage',
};
</script>

