<template>
  <a href="/">{{ value }}</a>
  <span class="separator">&nbsp;/&nbsp;</span>
</template>

<script>
export default {
  name: 'BreadcrumbItem',
  props: {
    value: {
      type: String,
      reqired: true,
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: $white;
  text-decoration: none;
  @include transition;

  &:hover {
    color: lighten($orange, 35%);
  }
}
</style>
