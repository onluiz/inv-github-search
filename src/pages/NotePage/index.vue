<template>
  <v-container fluid>
    <v-layout row>
      <v-flex>
        <h2>Nova anotção para o usuário Luiz Alberto</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <h2>Título</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-text-field
          name="search-field"
          label="Título"
          id="testing"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <h2>Descrição</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-text-field
          name="input-7-1"
          label="Label Text"
          multi-line
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-btn 
          color="primary"
          large block>
          Salvar
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NotePage',
};
</script>
