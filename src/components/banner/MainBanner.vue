<template>
  <div class="banner">
    <base-container>
      <div class="banner__claim">
        <div class="banner__breadcrumbs">
          <breadcrumb-item
            v-for="item in path"
            :key="item"
            :value="item"
          ></breadcrumb-item>
          <span>{{ currentPage }}</span>
        </div>
        <h1 class="banner__title">{{ title }}</h1>
      </div>
    </base-container>
  </div>
</template>

<script>
import BreadcrumbItem from './BreadcrumbItem.vue';

export default {
  name: 'MainBanner',
  props: {
    images: {
      type: Object,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    path: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: String,
      required: true,
    },
  },
  components: {
    BreadcrumbItem,
  },
};
</script>
