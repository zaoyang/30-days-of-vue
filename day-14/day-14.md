# Vue Components - Local Registration, Data, and Single Root Template

In the last couple of articles, we've been introduced to how Vue components help make our Vue applications more modular, taken a look at how props help pass data from parent to child components, and discussed how custom events can be used to facilitate communication from child components upwards to parent instances.

In this article, we’ll be addressing a few nice-to-knows that we haven't really discussed yet when it comes to using simple standard components.

## Global vs. Local Registration

So far, we've been using the `Vue.component()` constructor to create components in our applications. `Vue.component()` registers the component globally since the component is accessible in any Vue instance that has been instantiated after this constructor.

```javascript
Vue.component('global-component', {
  template: `<p>Hello World!</p>`
});

new Vue({
  template: `
    <div>
      <global-component></global-component>
    </div>
  `
});
```

Instead of having components registered globally, we’re also able to register components _locally_ within a particular instance.  We can achieve this by first assigning the options object of a component to a plain JavaScript object.

```javascript
const localComponent = {
  template: `<p>Hello World!</p>`
}
```

In the sample above, we've created a component options object with the name of `localComponent`. To have `localComponent` be registered locally within a parent instance, we'll have to declare `localComponent` in the **`components`** property of the instance we’d want the component registered in.

The **`components`** property accepts key-value pairs with the key referring to how the component is to be named in the instance, and the value being the options object of the component.

If we wanted to register `localComponent` locally in an instance and have it be declared as `local-component` in the template, we’ll register it like the following:

```javascript
const localComponent = {
  template: `<p>Hello World!</p>`
}

new Vue({
  template: `
    <div>
      <local-component></local-component>
    </div>
  `,
  components: {
    'local-component': localComponent
  }
});
```

Local registration is useful since it helps us avoid having to declare all components globally and instead have components encapsulated in the instances that they intend to be rendered in.

## Data as a function

Since Vue components _are_ Vue instances, they have almost all the same functionality as a root level instance does. One differentiation to keep in mind is that the `data` property of a Vue component **should always be a function**.

Traditionally, we’ve defined `data` as a standard property object:

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  }
});
```

For components, `data` should always be a **function that returns an object**.

```javascript
let componentObject = {
  template: '<p>{{message}}</p>',
  data() {
    return {
      message: 'Greetings!'
    }
  }
}
```

The reason behind this is that Vue doesn’t recognize the difference between data objects used in different instances and as a result _treats them all as the same single data object_. If you try declaring a standard data object in a component, Vue will emit a console warning along the lines of:

```shell
[Vue warn]: The "data" option should be a function that returns a per-instance value in component definitions.
```

By having data in components be functions that return objects, each component is able to maintain its own independent data object. Here's an [adapted example from the Vue documentation](https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function) that displays three identical components with each having their own independent data object.

### JS

```javascript
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
```

### HTML

```html
<html>
  <head>
    <link rel="stylesheet" href="./styles.css" />
    <link rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.5.3/css/bulma.css" >
  </head>

  <body>
    <div id="app">
      <p>Three different components with each containing an independant data object.</p>
      <counter-one></counter-one>
      <counter-two></counter-two>
      <counter-three></counter-three>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

<iframe src='./src/components-data-example/index.html'
        height="115"
        scrolling="no"
        style='display: block; margin: 0 auto; width: 100%'>
</iframe>

## Single Root Template

With Vue template declarations, it’s a **must** to wrap the template of components in a single root element. If we attempted to have the template of a component render two sibling elements like below:

```javascript
const localComponent = {
  template: `
    <p>Hello World!</p>
    <button>Click Here!</button>
  `
}
```

The Vue console will emit a warning referencing the incorrect template and stating:

```shell
Component template should contain exactly one root element...
```

This restriction is due to the [technical constraints of Vue's diff algorithm](https://github.com/vuejs/vue/issues/7088#issuecomment-348252040) (i.e. algorithm on how changes are patched and implemented on the actual DOM). If you're interested in reading more about this, here's an [interesting issue that was opened](https://github.com/vuejs/vue/issues/7088), in Nov 2017, on the Vue core library that discussed this constraint.

Today's article was a brief discussion on some nice-to-knows when it comes to working with Vue components. In tomorrow’s article, we’ll look at some of the different ways we’re able to declare the template of a component. Good job getting through week two and see you tomorrow!
