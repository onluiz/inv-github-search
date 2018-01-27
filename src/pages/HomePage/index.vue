<template>
  <v-container fluid>
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
          name="search-field"
          label="Nome de usuário GitHub aqui!"
          id="testing"
        ></v-text-field>
      </v-flex>
    </v-layout>
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
    <v-layout row>
      <v-flex>
        <h2>Resultados:</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-media src="/static/doc-images/cards/desert.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Luiz Alberto</h3>
            <div>
              10 Repositórios <br>
              37 Seguidores <br>
              22 Estrelas <br>
            </div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange">Repositórios</v-btn>
          <v-btn flat color="orange">Anotações</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import involvesLogo from '@/assets/images/logo.png';

export default {
  name: 'HomePage',
  data() {
    return {
      involvesLogo,
    };
  },
  methods: {
    resultPage() {
      this.$router.push('/result');
    },
  },
};
</script>

