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
