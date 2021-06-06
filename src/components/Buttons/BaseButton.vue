<template>
  <button class="px-3 py-1 rounded-sm text-sm" :class="buttonClass">
    <slot />
  </button>
</template>

<script>
const buttonTheme = (variant) => {
  switch (variant) {
    case 'primary':
      return 'bg-indigo-600 text-white';
    default:
      return '';
  }
};

export default {
  props: {
    variant: {
      type: String,
      default: 'primary',
    },
  },
  setup(props) {
    return {
      buttonClass: buttonTheme(props.variant),
    };
  },
};
</script>

<style lang="scss" scoped></style>
