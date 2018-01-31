<template>
  <v-container>
    <back-to page="/" title="Inicio"></back-to>
    <h1>Desculpe, mas nenhum usuário foi encontrado =/</h1>
  </v-container>
</template>

<script>
import BackTo from '@/components/Navigation/BackTo';

export default {
  name: 'NotFoundPage',
  components: {
    BackTo,
  },
};
</script>
