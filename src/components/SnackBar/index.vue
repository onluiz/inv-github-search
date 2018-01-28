<template>
  <v-snackbar
      :timeout="timeout"
      :top="y === 'top'"
      :bottom="y === 'bottom'"
      :right="x === 'right'"
      :left="x === 'left'"
      :multi-line="mode === 'multi-line'"
      :vertical="mode === 'vertical'"
      :color="color"
      v-model="snackBar.isVisible"
    >
      {{ snackBar.message }}
      <v-btn color="pink" @click.native="closeSnackBar">Fechar</v-btn>
    </v-snackbar>
</template>

<script>
export default {
  computed: {
    snackBar() {
      return this.$store.state.GlobalModules.SnackBarModule.snackBar;
    },
  },
  methods: {
    closeSnackBar() {
      this.$store.commit('closeSnackBar');
    },
  },
  data() {
    return {
      y: 'bottom',
      x: null,
      mode: 'vertical',
      timeout: 6000,
      color: 'blue',
    };
  },
};
</script>
