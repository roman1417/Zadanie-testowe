<template>
  <div class="banner">
    <base-container>
      <div class="banner__wrapper">
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
  computed: {
    largeImage() {
      return `url(${require('@/assets/images/' + this.images.large)})`;
    },
    mediumImage() {
      return `url(${require('@/assets/images/' + this.images.medium)})`;
    },
    smallImage() {
      return `url(${require('@/assets/images/' + this.images.small)})`;
    },
  },
};
</script>

<style lang="scss" scoped>
.banner {
  position: relative;
  width: 100%;
  margin-bottom: 100px;
  background-image: v-bind(largeImage);
  background-size: cover;
  background-position: center;

  @include mq(large) {
    margin-bottom: 80px;
    background-image: v-bind(mediumImage);
  }

  @include mq(medium) {
    margin-bottom: 65px;
  }

  @include mq(small) {
    margin-bottom: 50px;
    background-image: v-bind(smallImage);
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(black, 0.16);
  }

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 470px;

    @include mq(large) {
      height: 400px;
    }

    @include mq(medium) {
      height: 320px;
    }

    @include mq(small) {
      height: 280px;
    }
  }

  &__claim {
    position: relative;
    z-index: 1;
    margin-top: 80px;
    font-size: 1.8rem;
    color: $white;
    text-align: center;

    @include mq(large) {
      margin-top: 70px;
      font-size: 16px;
    }

    @include mq(medium) {
      margin-top: 50px;
      font-size: 16px;
    }

    @include mq(small) {
      margin-top: 50px;
      font-size: 15px;
    }
  }
}
</style>
