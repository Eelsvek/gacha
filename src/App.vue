<template>
  <div>
    <div>Gems: {{ balance }}</div>
    <div class="grid grid-cols-2 gap-4">
      <Gachapon
        :balance="balance"
        title="Summer Event 2021"
        @charge="chargeBalance"
      />
      <GachaponResults :items="[]" />
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

import Gachapon from '@/components/Gachapon';
import GachaponResults from '@/components/GachaponResults';

export default {
  name: 'App',
  components: {
    Gachapon,
    GachaponResults,
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
