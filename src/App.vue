<template>
  <div>
    <h1 class="font-bold mb-3">Roll the Gacha</h1>
    <BaseButton @click="handleRoll(RollTypes.SINGLE)" class="mr-3"
      >Single Roll</BaseButton
    >
    <BaseButton @click="handleRoll(RollTypes.MULTI)"
      >Multi (10) Roll</BaseButton
    >
    <div class="mt-3">Gem Balance: {{ balance }}</div>
    <div v-if="errorMessage" class="text-red-600 font-bold">
      {{ errorMessage }}
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import BaseButton from '@/components/Buttons/BaseButton';
import { RollTypes } from '@/constants';

export default {
  name: 'App',
  components: {
    BaseButton,
  },
  setup() {
    const balance = ref(1500);
    const errorMessage = ref(null);

    const chargeBalance = (cost) => {
      if (balance.value - cost < 0) {
        errorMessage.value = 'Not enough credits';
      } else {
        errorMessage.value = '';
        balance.value -= cost;
      }
    };

    const handleRoll = (type) => {
      switch (type) {
        case RollTypes.SINGLE:
          chargeBalance(150);
          break;
        case RollTypes.MULTI:
          chargeBalance(1500);
          break;
        default:
          break;
      }
    };

    return {
      balance,
      errorMessage,
      handleRoll,
      RollTypes,
    };
  },
};
</script>
