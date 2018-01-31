<template>
  <button>{{ desc }}</button>
</template>

<script>
export default {
  name: 'ExampleButton',
  props: {
    desc: {
      type: String,
      required: true,
      default: 'Button Description',
    },
  },
  data() {
    return {
      message: 'Hi!',
    }
  },
};
</script>

