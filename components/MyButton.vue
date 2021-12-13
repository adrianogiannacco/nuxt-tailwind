<template>
  <button
    class="my-button"
    :class="[variant ? `my-button--${variant}` : '', { hidden: hidden }]"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: '',
    },
    hidden: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
