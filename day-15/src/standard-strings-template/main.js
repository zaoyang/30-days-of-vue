let singleLineTemplate = {
  template: '<div class="card"><header class="card-header\
    card-header-title">{{ message }}</header></div>',
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'single-line-template': singleLineTemplate
  }
});
