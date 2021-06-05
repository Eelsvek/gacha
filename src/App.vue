<template>
  <div class="font-bold">Test: {{ name }}</div>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'App',
  setup() {
    const name = ref('Kevin');

    return {
      name,
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
