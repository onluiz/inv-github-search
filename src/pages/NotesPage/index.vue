<template>
  <v-container fluid>
    <h2>
      <v-icon>library_books</v-icon> Notas para {{ userSearch.login }}
    </h2>
    <v-layout row>
      <v-flex>
        <v-btn
          color="orange"
          large block
          @click="newNote">
          <v-icon>add</v-icon> Anotação
        </v-btn>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <note-card :notes="notes"></note-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import notesLib from '@/libs/notes-lib';
import NoteCard from '@/components/NoteCard';

export default {
  name: 'NotesPage',
  components: {
    NoteCard,
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
