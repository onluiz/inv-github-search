<template>
  <v-container fluid>
    <back-to v-if="userSearch.id > 0" page="/perfil" title="Perfil"></back-to>
    <back-to v-if="userSearch.id === 0" page="/" title="Inicio"></back-to>
    <v-layout row>
      <v-flex>
        <h2>Usuário: Luiz Alberto</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-btn 
          color="primary"
          large block
          @click="newNote">
          Nova Anotação
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <h2>Anotações</h2>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <note-card v-for="(note, i) in notes" :key="i" :note="note"></note-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import notesLib from '@/libs/notes-lib';
import BackTo from '@/components/Navigation/BackTo';
import NoteCard from '@/components/NoteCard';

export default {
  name: 'NotesPage',
  components: {
    NoteCard,
    BackTo,
  },
  methods: {
    newNote() {
      this.$router.push('/notes/new');
    },
  },
  data() {
    return {
      notes: [],
    };
  },
  computed: {
    userSearch() {
      return this.$store.state.GlobalModules.SearchModule.user;
    },
  },
  mounted() {
    this.notes = notesLib.getNotes();
  },
};
</script>
