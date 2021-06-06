<template>
  <div class="p-3 border-4 border-black">
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
  components: {
    BaseButton,
  },

  props: {
    balance: {
      type: Number,
      required: true,
    },
  },

  setup(props, context) {
    const errorMessage = ref(null);

    const chargeBalance = (cost) => {
      if (props.balance - cost < 0) {
        errorMessage.value = 'Not enough credits';
      } else {
        errorMessage.value = '';
        context.emit('charge', cost);
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
      errorMessage,
      handleRoll,
      RollTypes,
    };
  },
};
</script>
