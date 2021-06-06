<template>
  <div>
    <h1 class="font-bold">Roll the Gacha</h1>
    <BaseButton @click="handleRoll(RollTypes.SINGLE)" class="mr-3"
      >Single Roll</BaseButton
    >
    <BaseButton @click="handleRoll(RollTypes.MULTI)"
      >Multi (10) Roll</BaseButton
    >
  </div>
</template>

<script>
// import { ref } from 'vue';
import BaseButton from '@/components/Buttons/BaseButton';
import { RollTypes } from '@/constants';

export default {
  name: 'App',
  components: {
    BaseButton,
  },
  setup() {
    const handleRoll = (type) => {
      switch (type) {
        case RollTypes.SINGLE:
          console.log('single');
          break;
        case RollTypes.MULTI:
          console.log('multi');
          break;
        default:
          break;
      }
    };

    return {
      handleRoll,
      RollTypes,
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
