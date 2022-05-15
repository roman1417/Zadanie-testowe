<template>
  <li class="question-item">
    <div class="question-item__question" @click="$emit('question-click', id)">
      <p class="question-item__text">{{ question }}</p>
      <div
        class="question-item__icon-wrapper"
        :class="{ 'question-item__icon-wrapper--is-active': active }"
      >
        <img
          src="../../assets/images/arrow.svg"
          alt="strzałka"
          class="question-item__icon"
        />
      </div>
    </div>
    <transition>
      <p class="question-item__answer" v-if="active">{{ answer }}</p>
    </transition>
  </li>
</template>

<script>
export default {
  name: 'QuestionIcon',
  emits: ['question-click'],
  props: {
    id: {
      type: String,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    question: {
      type: String,
      required: true,
    },
    answer: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.question-item {
  overflow: hidden;
  border-bottom: 1px solid #707070;

  &__question {
    @include row;
    flex-wrap: nowrap;
    align-items: center;
    padding: 25px 10px 25px 0;
    cursor: pointer;

    @include mq(xlarge) {
      padding: 22px 10px 22px 0;
    }

    @include mq(large) {
      padding: 20px 10px 20px 0;
    }

    @include mq(small) {
      padding: 18px 10px 18px 0;
    }
  }

  &__text {
    width: 70%;
    font-size: 2.4rem;

    @include mq(xlarge) {
      width: 80%;
      font-size: 2.2rem;
    }

    @include mq(large) {
      width: auto;
      padding-right: 1.5em;
      font-size: 2rem;
    }

    @include mq(small) {
      font-size: 1.8rem;
    }
  }

  &__icon-wrapper {
    width: 16px;
    height: 10px;
    transition: transform 0.5s;

    &--is-active {
      transform: rotateX(180deg);
    }
  }

  &__icon {
    width: 100%;
    height: 100%;
  }

  &__answer {
    padding-bottom: 1em;
    width: 70%;

    @include mq(xlarge) {
      width: 80%;
    }

    @include mq(large) {
      width: auto;
    }
  }
}

.v-enter-from {
  max-height: 0;
  opacity: 0;
}
.v-enter-active {
  transition: all 0.5s;
}
.v-enter-to {
  max-height: 999px;
  opacity: 1;
}

.v-leave-from {
  max-height: 999px;
  opacity: 1;
}
.v-leave-active {
  transition: all 0.5s ease;
}
.v-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
