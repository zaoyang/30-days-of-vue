new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  computed: {
    reverseMessage() {
      return this.message.split('').reverse().join('');
    },
  }
});
