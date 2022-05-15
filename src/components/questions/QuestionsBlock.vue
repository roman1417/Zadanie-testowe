<template>
  <base-container>
    <section class="questions">
      <h4 class="questions__title">
        Najczęściej zadawane <span class="questions__underline">pytania</span>
      </h4>
    </section>
  </base-container>
</template>

<script>
export default {
  name: 'QuestionsBlock',
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
