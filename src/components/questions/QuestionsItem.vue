<template>
  <li class="question-item">
    <div class="question-item__question" @click="$emit('question-click', id)">
      <p class="question-item__text">{{ question }}</p>
      <div class="question-item__icon-wrapper">
        <img
          src="../../assets/images/arrow.svg"
          alt="strzałka"
          class="question-item__icon"
        />
      </div>
    </div>
    <p class="question-item__answer" v-if="active">{{ answer }}</p>
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
