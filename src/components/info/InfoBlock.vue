<template>
  <base-container>
    <div class="info-block">
      <p class="info-block__head">Zostań częścią rozpoznawalnej marki</p>
      <h2 class="info-block__title">
        <strong
          >Ponad <span class="info-block__underline">2000</span> sklepów</strong
        >
        <span>w całej Polsce</span>
      </h2>
    </div>
  </base-container>
</template>

<script>
export default {
  name: 'InfoBlock',
};
</script>

<style lang="scss" scoped>
.info-block {
  margin-bottom: 120px;
  text-align: center;

  @include mq(xlarge) {
    margin-bottom: 100px;
  }

  @include mq(large) {
    margin-bottom: 85px;
  }

  @include mq(medium) {
    margin-bottom: 75px;
  }

  @include mq(small) {
    margin-bottom: 60px;
  }

  &__title {
    @include column;
  }

  &__head {
    margin-bottom: 0.1em;
    font-size: 2.8rem;
    line-height: 1.5;

    @include mq(xlarge) {
      font-size: 2.5rem;
    }

    @include mq(large) {
      font-size: 2.2rem;
    }

    @include mq(medium) {
      font-size: 2rem;
    }

    @include mq(small) {
      font-size: 1.8rem;
    }
  }

  &__underline {
    position: relative;
    display: inline-block;

    &::after {
      content: '';
      position: absolute;
      left: -0.13em;
      width: calc(100% + 0.26em);
      bottom: 0.11em;
      height: 0.11em;
      background-color: $orange;
    }
  }
}
</style>
