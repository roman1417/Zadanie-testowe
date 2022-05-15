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
          large: 'banner_1920x467.jpg',
          medium: 'banner_1024x249.jpg',
          small: 'banner_411x100.jpg',
        },
        title: 'Franczyza',
        path: ['Strona główna'],
        currentPage: 'Franczyza',
      },
      profits: {
        item1: {
          title: 'Zostaniesz otoczony opieką dedykowanego partnera',
          text: 'W Odido nie zostaniesz sam! Zapewnimy Ci opiekę doradcy, który zawsze chętnie pomoże w doborze asortymentu, przedstawi najkorzystniejsze oferty, czy przypomni o wzięciu udziału w konkursie.',
          image: './assets/images/profit1.jpg',
          imageOnLeft: true,
          alt: 'kobieta i mężczyzna rozmawiają w sklepie',
          icon: './assets/images/icon1.svg',
        },
        item2: {
          title: 'To Ty decydujesz, a my Cię wspieramy',
          text: 'Wiemy, że cenisz niezależność. Dlatego my skupiamy się na zapewnieniu Ci najbardziej korzystnych warunków, abyś Ty mógł zająć się prowadzeniem biznesu.',
          image: './assets/images/profit2.jpg',
          imageOnLeft: false,
          alt: 'mężczyzna z tabletem przy półce sklepowej',
          icon: './assets/images/icon2.svg',
        },
        item3: {
          title: 'MAKRO dla Franczyzobiorców Odido',
          text: 'Jako franczyzobiorca Odido możesz dostać nawet 7% rabatu na asortyment dostępny w MAKRO. Wszystko, czego potrzebują Twoi klienci możesz kupić na przestrzennej, dobrze wyposażonej hali lub zamówić przez naszą platformę do zamówień, a my dostarczymy zamówienie do Twojego sklepu. Do tego mamy szereg programów i aktywacji takich jak program Zielone Etykiety, Retro Bony, czy Program Koszyki, które naprawdę się opłacają. Mamy też atrakcyjne konkursy dedykowane tylko dla Franczyzobiorców Odido. ',
          image: './assets/images/profit3.jpg',
          imageOnLeft: true,
          alt: 'hala sklepowa w "Makro"',
        },
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
