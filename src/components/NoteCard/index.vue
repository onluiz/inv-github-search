<template>
  <v-list subheader>
    <v-subheader>Anotações</v-subheader>
    <template v-for="(note, i) in notes">
      <v-list-tile avatar :key="i" v-bind:key="note.title" @click="">
        <v-list-tile-content>
          <v-list-tile-title v-html="note.title"></v-list-tile-title>
          <v-list-tile-sub-title v-html="note.desc"></v-list-tile-sub-title>
        </v-list-tile-content>
        <v-list-tile-action>
          <v-icon color="red">delete</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  name: 'NoteCard',
  props: {
    notes: {
      type: Array,
      required: true,
    },
  },
};
</script>
