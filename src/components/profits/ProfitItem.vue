<template>
  <base-container>
    <div class="profit">
      <div
        class="profit__image-wrapper"
        :class="{ 'profit__image-wrapper--on-right': !imageOnLeft }"
      >
        <img :src="profitImage" :alt="alt" class="profit__image" />
      </div>
      <div
        class="profit__text-wrapper"
        :class="{ 'profit__text-wrapper--without-icon': !icon }"
      >
        <div class="profit__icon-wrapper" v-if="icon">
          <img :src="profitIcon" :alt="iconAlt" class="profit__icon" />
        </div>
        <h3 class="profit__title">{{ title }}</h3>
        <p class="profit__text">{{ text }}</p>
      </div>
    </div>
  </base-container>
</template>

<script>
export default {
  name: 'ProfitItem',
  props: {
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
    imageOnLeft: {
      type: Boolean,
      required: true,
    },
    icon: {
      type: String,
      required: false,
    },
    iconAlt: {
      type: String,
      required: false,
    },
  },
  computed: {
    profitImage() {
      return require('@/assets/images/' + this.image);
    },
    profitIcon() {
      return require('@/assets/images/' + this.icon);
    },
  },
};
</script>

<style lang="scss" scoped>
.profit {
  @include row;
  flex-wrap: nowrap;
  margin-bottom: 120px;

  @include mq(xlarge) {
    margin-bottom: 100px;
  }

  @include mq(large) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 85px;
  }

  @include mq(medium) {
    margin-bottom: 75px;
  }

  @include mq(small) {
    margin-bottom: 60px;
  }

  &__image-wrapper {
    width: 51.5%;
    height: 550px;
    flex-shrink: 0;

    @include mq(xlarge) {
      width: 45%;
      height: 400px;
    }

    @include mq(large) {
      width: 500px;
      height: auto;
    }

    @include mq(medium) {
      width: 85%;
    }

    @include mq(small) {
      width: 90%;
    }

    &--on-right {
      order: 1;

      @include mq(large) {
        order: 0;
      }
    }
  }

  &__image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &__text-wrapper {
    min-height: 630px;
    padding: 0 60px 60px;
    background: linear-gradient(
      $background,
      $background 60px,
      $white 60px,
      $white
    );

    @include mq(xlarge) {
      min-height: auto;
      padding: 0 55px 55px;
      background: linear-gradient(
        $background,
        $background 50px,
        $white 50px,
        $white
      );
    }

    @include mq(large) {
      margin-bottom: 20px;
      padding: 0 70px 45px;
    }

    @include mq(medium) {
      padding: 0 30px 40px;
    }

    @include mq(small) {
      padding: 0 15px 30px;
    }

    &--without-icon {
      padding-top: 120px;

      @include mq(xlarge) {
        padding-top: 90px;
      }

      @include mq(large) {
        background: $white;
        padding-top: 60px;
      }

      @include mq(medium) {
        padding-top: 45px;
      }
    }
  }

  &__icon-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 162px;
    height: 162px;
    margin-bottom: 70px;
    background-color: $orange;

    @include mq(xlarge) {
      margin-bottom: 55px;
    }

    @include mq(large) {
      margin-bottom: 45px;
    }

    @include mq(medium) {
      margin-bottom: 35px;
    }
  }
}
</style>
