<template>
  <base-container>
    <div class="profit">
      <div
        class="profit__image-wrapper"
        :class="{ 'profit__image-wrapper--on-right': !imageOnLeft }"
      >
        <img :src="image" :alt="alt" class="profit__image" />
      </div>
      <div class="profit__text-wrapper">
        <div class="profit__icon-wrapper" v-if="icon">
          <img :src="icon" :alt="iconAlt" class="profit__icon" />
        </div>
        <h3 class="profit__title">{{ title }}</h3>
        <p class="profit__text">{{ text }}</p>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  name: 'ProfitItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    imageOnLeft: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    iconAlt: {
      type: String,
      required: false,
    },
  },
};
</script>
