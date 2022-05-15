<template>
  <main-banner
    :images="bannerData.images"
    :title="bannerData.title"
    :path="bannerData.path"
    :current-page="bannerData.currentPage"
  ></main-banner>
</template>

<script>
import MainBanner from './components/banner/MainBanner.vue';

export default {
  name: 'App',
  data() {
    return {
      bannerData: {
        images: {
          large: '../../assets/images/banner_1920x467.jpg',
          medium: '../../assets/images/banner_1024x249.jpg',
          small: '../../assets/images/banner_411x100.jpg',
        },
        title: 'Franczyza',
        path: ['Strona główna'],
        currentPage: 'Franczyza',
      },
    };
  },
  components: {
    MainBanner,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;700&display=swap');

html {
  font-size: 10px;
}

body {
  font-family: $maven;
  color: $dark;
  background-color: $background;
}
</style>
