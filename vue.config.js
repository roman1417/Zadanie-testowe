const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    sourceMap: true,
    loaderOptions: {
      scss: {
        additionalData: `@import "@/assets/scss/global-styles.scss";`,
      },
    },
  },
});
