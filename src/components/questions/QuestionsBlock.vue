<template>
  <base-container>
    <section class="questions">
      <h4 class="questions__title">
        Najczęściej zadawane <span class="questions__underline">pytania</span>
      </h4>
      <ul class="questions-list">
        <question-item
          v-for="question in questions"
          :key="question.id"
          :id="question.id"
          :active="question.active"
          :question="question.question"
          :answer="question.answer"
          @question-click="questionClick"
        ></question-item>
      </ul>
    </section>
  </base-container>
</template>

<script>
import QuestionItem from './QuestionsItem.vue';

export default {
  name: 'QuestionsBlock',
  components: {
    QuestionItem,
  },
  methods: {
    questionClick(id) {
      this.questions.forEach(item => {
        if (id === item.id) {
          item.active = !item.active;
        } else {
          item.active = false;
        }
      });
    },
  },
  data() {
    return {
      questions: [
        {
          id: 'q1',
          active: false,
          question: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 'q2',
          active: false,
          question: 'In sollicitudin risus sed lacinia eleifend?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        },
        {
          id: 'q3',
          active: false,
          question: 'Etiam semper nulla nec rhoncus scelerisque?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        },
        {
          id: 'q4',
          active: false,
          question: 'Mauris fermentum bibendum tortor?',
          answer:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
        },
      ],
    };
  },
};
</script>
