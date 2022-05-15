<template>
  <div class="container">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'BaseContainer',
};
</script>

<style lang="scss" scoped>
.container {
  width: 1180px;
  margin: 0 auto;

  @include mq(xlarge) {
    width: 980px;
  }

  @include mq(large) {
    width: 720px;
  }

  @include mq(medium) {
    width: 90%;
  }
}
</style>
