let counterOne = {
  template: `
    <button class="button is-primary" @click="counter++">
      You clicked me {{counter}} times
    </button>
  `,
  data() {
    return {
      counter: 0
    }
  }
}

let counterTwo = {
  template: `
    <button class="button is-primary" @click="counter++">
      You clicked me {{counter}} times
    </button>
    <button class="button is-primary" @click="counter++">
      You clicked me {{counter}} times
    </button>
  `,
  data() {
    return {
      counter: 0
    }
  }
}

let counterThree = {
  template: `
    <button class="button is-primary" @click="counter++">
      You clicked me {{counter}} times
    </button>
  `,
  data() {
    return {
      counter: 0
    }
  }
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'counter-one': counterOne,
    'counter-two': counterTwo,
    'counter-three': counterThree,
  }
});
