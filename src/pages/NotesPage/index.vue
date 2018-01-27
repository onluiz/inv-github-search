<template>
  <v-container fluid>
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
        <v-card color="cyan darken-2" class="white--text">
            <v-container fluid grid-list-lg>
              <v-layout row>
                <v-flex>
                  <div>
                    <div class="headline">Título</div>
                    <div>
                      Bons repositórios, mas precisa
                      contribuir mais para projetos open source.
                    </div>
                  </div>
                </v-flex>
              </v-layout>
            </v-container>
          </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'NotesPage',
  methods: {
    newNote() {
      this.$router.push('/notes/new');
    },
  },
};
</script>
