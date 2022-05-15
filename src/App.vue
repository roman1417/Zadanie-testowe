<template>
  <main-banner
    :images="bannerData.images"
    :title="bannerData.title"
    :path="bannerData.path"
    :current-page="bannerData.currentPage"
  ></main-banner>
  <profit-item
    :title="profits.item1.title"
    :text="profits.item1.text"
    :image="profits.item1.image"
    :alt="profits.item1.alt"
    :image-on-left="profits.item1.imageOnLeft"
    :icon="profits.item1.icon"
    :icon-alt="profits.item1.iconAlt"
  >
  </profit-item>
  <profit-item
    :title="profits.item2.title"
    :text="profits.item2.text"
    :image="profits.item2.image"
    :alt="profits.item2.alt"
    :image-on-left="profits.item2.imageOnLeft"
    :icon="profits.item2.icon"
    :icon-alt="profits.item2.iconAlt"
  >
  </profit-item>
  <profit-item
    :title="profits.item3.title"
    :text="profits.item3.text"
    :image="profits.item3.image"
    :alt="profits.item3.alt"
    :image-on-left="profits.item3.imageOnLeft"
  >
  </profit-item>
</template>

<script>
import MainBanner from './components/banner/MainBanner.vue';
import ProfitItem from './components/profits/ProfitItem.vue';

export default {
  name: 'App',
  components: {
    MainBanner,
    ProfitItem,
  },
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
          image: 'profit1.jpg',
          alt: 'kobieta i mężczyzna rozmawiają w sklepie',
          imageOnLeft: true,
          icon: 'icon1.svg',
          iconAlt: 'koszyk na zakupy w dłoniach',
        },
        item2: {
          title: 'To Ty decydujesz, \n a my Cię wspieramy',
          text: 'Wiemy, że cenisz niezależność. Dlatego my skupiamy się na zapewnieniu Ci najbardziej korzystnych warunków, abyś Ty mógł zająć się prowadzeniem biznesu.',
          image: 'profit2.jpg',
          alt: 'mężczyzna z tabletem przy półce sklepowej',
          imageOnLeft: false,
          icon: 'icon2.svg',
          iconAlt: 'uścisk dłoni',
        },
        item3: {
          title: 'MAKRO dla Franczyzobiorców Odido',
          text: 'Jako franczyzobiorca Odido możesz dostać nawet 7% rabatu na asortyment dostępny w MAKRO. Wszystko, czego potrzebują Twoi klienci możesz kupić na przestrzennej, dobrze wyposażonej hali lub zamówić przez naszą platformę do zamówień, a my dostarczymy zamówienie do Twojego sklepu. Do tego mamy szereg programów i aktywacji takich jak program Zielone Etykiety, Retro Bony, czy Program Koszyki, które naprawdę się opłacają. Mamy też atrakcyjne konkursy dedykowane tylko dla Franczyzobiorców Odido. ',
          image: 'profit3.jpg',
          imageOnLeft: true,
          alt: 'hala sklepowa w "Makro"',
        },
      },
    };
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
