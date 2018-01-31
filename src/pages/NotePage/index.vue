<template>
  <v-container fluid>
    <v-layout row>
      <v-flex>
        <h2>Nova anotção para {{ userSearch.login }}</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-text-field
          name="search-field"
          label="Título"
          id="testing"
          v-model="note.title"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-text-field
          name="input-7-1"
          label="Label Text"
          multi-line
          v-model="note.desc"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-btn
          color="orange"
          large
          block
          @click="addNote">
          Salvar
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import notesLib from '.././../libs/notes-lib';

export default {
  name: 'NotePage',
  data() {
    return {
      note: {
        author: '',
        idUser: '',
        title: '',
        desc: '',
      },
    };
  },
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
  mounted() {
    if (this.userSearch.id > 0) {
      this.note.idUser = this.userSearch.id;
    } else {
      this.$store.commit('openSnackBar', `Para adicionar notas, primeiro
        pesquise por um usuário.`);
      this.$router.history.go(-1);
    }
  },
  methods: {
    addNote() {
      notesLib.addNote(this.note, () => {
        this.$store.dispatch('openSnackBar', 'Nota adicionada com sucesso.');
        this.$router.history.go(-1);
      });
    },
  },
};
</script>
