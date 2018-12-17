let multiLineTemplate = {
  template: `
    <div class="card">
      <header class="card-header card-header-title">
        {{ message }}
      </header>
    </div>
   `,
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'multi-line-template': multiLineTemplate
  }
});
