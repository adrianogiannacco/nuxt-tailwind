<template>
  <div class="my-card">
    <img v-if="img" :src="img" alt="alt" />
    <div class="my-card__inner">
      <h2 v-if="title" class="my-card__title" v-text="title"></h2>
      <div v-if="$slots.content" class="flex-1">
        <p class="mb-3">
          <slot name="content"></slot>
        </p>
      </div>
      <div>
        <p v-if="date" class="my-card__date" v-text="date"></p>
        <ul v-if="tags.length" class="my-card__tags">
          <li
            v-for="(tag, i) in tags"
            :key="i"
            class="my-card__tags-item"
            v-text="tag"
          ></li>
        </ul>
        <MyButton variant="primary">Scopri di più</MyButton>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '',
    },
    img: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    tags: {
      type: Array,
      default: () => {
        return []
      },
    },
  },
}
</script>
