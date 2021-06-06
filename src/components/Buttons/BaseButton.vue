<template>
  <button :class="buttonClass">
    <slot />
  </button>
</template>

<script>
const DEFAULT_BUTTON_STYLES = 'px-3 py-1 rounded-sm text-sm';

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
      buttonClass: `${DEFAULT_BUTTON_STYLES} ${buttonTheme(props.variant)}`,
    };
  },
};
</script>
