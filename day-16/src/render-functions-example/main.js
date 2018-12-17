let renderComponent = {
  render(h) {
    return h(
      'div', {
        'attrs': {
          class: 'card'
        },
      }, [
        h('header', {
          'attrs': {
            class: 'card-header card-header-title',
          },
        }, this.message)
      ]
    );
  },
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'render-component': renderComponent
  }
});
