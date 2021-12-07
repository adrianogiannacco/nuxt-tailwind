<template>
  <button class="my-button" :class="variant ? `my-button--${variant}`: ''">
    <slot></slot>
  </button>
</template>

<script>
  export default {
    props: {
      variant: {
        type: String,
        default: ''
      },
    },
  }
</script>

<style lang="postcss">
.my-button {
  @apply border rounded border-gray py-2 px-4 uppercase text-gray;

  &--primary {
    @apply border-blue bg-blue text-white;
  }
}
</style>