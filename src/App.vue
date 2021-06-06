<template>
  <div>
    <Gachapon :balance="balance" @charge="chargeBalance" />
  </div>
</template>

<script>
import { ref } from 'vue';

import Gachapon from '@/components/Gachapon';

export default {
  name: 'App',
  components: {
    Gachapon,
  },

  setup() {
    const balance = ref(1500);

    const chargeBalance = (amount) => {
      balance.value -= amount;
    };

    return {
      balance,
      chargeBalance,
    };
  },
};
</script>
