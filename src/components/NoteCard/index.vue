<template>
  <v-card color="cyan darken-2" class="white--text">
    <v-container fluid grid-list-lg>
      <v-layout row>
        <v-flex>
          <div>
            <div class="headline">{{note.title}}</div>
            <div>
              {{note.desc}}
            </div>
          </div>
        </v-flex>
      </v-layout>
    </v-container>
    <v-card-actions>
      <v-btn color="orange" icon class="hidden-md-and-up"><v-icon>delete</v-icon></v-btn>
      <v-btn 
        color="orange" 
        class="hidden-sm-and-down">
          <v-icon>delete</v-icon> Remover Nota
        </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'NoteCard',
  props: {
    note: {
      type: Object,
      required: true,
    },
  },
};
</script>

