<template>
  <div class="my-card" :class="`my-card--${layout}`">
    <div class="my-card__img" :class="`my-card__img--${layout}`">
      <img
        v-if="img"
        :src="img"
        alt="alt"
        :class="{ 'h-full object-cover': layout === 'row' }"
      />
    </div>
    <div class="my-card__inner" :class="`my-card__inner--${layout}`">
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
    layout: {
      type: String,
      default: 'col',
    },
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
