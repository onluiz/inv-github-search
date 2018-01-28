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
          v-model="note.title"
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
          v-model="note.desc"
        ></v-text-field>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-btn 
          color="primary"
          large
          block
          @click="saveNote">
          Salvar
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        {{note.title}} <br>
        {{note.desc}} <br>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
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
    userSearch: {
      get() {
        return this.$store.state.GlobalModules.SearchModule.user;
      },
      set(user) {
        this.$store.commit('setUser', user);
      },
    },
  },
  methods: {
    saveNote() {
      this.prepareNote();
      let notes = this.getFromLocalstorage();
      if (notes) {
        notes.push(this.note);
      } else {
        notes = [];
        notes.push(this.note);
      }
      this.addToLocalstorage(notes);
    },
    addToLocalstorage(notes) {
      localStorage.setItem('notes', JSON.stringify(notes));
    },
    getFromLocalstorage() {
      return JSON.parse(localStorage.getItem('notes'));
    },
    prepareNote() {
      this.note.idUser = this.userSearch.id;
    },
  },
};
</script>
