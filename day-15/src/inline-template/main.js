let inlineTemp = {
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'inline-temp': inlineTemp
  }
});
