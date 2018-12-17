let xTemp = {
  template: '#x-template-component',
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'x-temp': xTemp
  }
});
