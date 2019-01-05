# Vue Components - Local Registration, Data, and Single Root Templates

> Today, we'll cover some interesting points that govern the use of Vue components such as the ability to locally register components, the requirement to having the component `data` property always be a function, and the restriction to using a single root template.

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

In the sample above, we've created a component options object with the name of `localComponent`. To have `localComponent` be registered locally within a parent instance, we'll have to declare `localComponent` in the __`components`__ property of the instance we’d want the component registered in.

The __`components`__ property accepts key-value pairs with the key referring to how the component is to be named in the instance, and the value being the options object of the component.

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

Since Vue components _are_ Vue instances, they have almost all the same functionality as a root level instance does. One differentiation to keep in mind is that the `data` property of a Vue component __should always be a function__.

Traditionally, we’ve defined `data` as a standard property object:

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  }
});
```

For components, `data` should always be a __function that returns an object__.

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

{lang=javascript,line-numbers=off}
<<[src/components-data-example/main.js](./src/components-data-example/main.js)

### HTML

{lang=html,line-numbers=off}
<<[src/components-data-example/index.html](./src/components-data-example/index.html)

<iframe src='./src/components-data-example/index.html'
        height="115"
        scrolling="no"
         >
</iframe>

## Single Root Template

With Vue template declarations, it’s a __must__ to wrap the template of components in a single root element. If we attempted to have the template of a component render two sibling elements like below:

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

Instead, we are expected to wrap our component templates in a single root element. For example, we can have the elements shown in the example above be kept within a single parent `<div>` element:

```javascript
const localComponent = {
  template: `
    <div>
      <p>Hello World!</p>
      <button>Click Here!</button>
    </div>
  `
}
```

This restriction is due to the [technical constraints of Vue's diff algorithm](https://github.com/vuejs/vue/issues/7088#issuecomment-348252040) (i.e. algorithm on how changes are patched and implemented on the actual DOM). If you're interested in reading more about this, here's an [interesting issue that was opened](https://github.com/vuejs/vue/issues/7088), in Nov 2017, on the Vue core library that discussed this constraint.

Today's article was a brief discussion on some nice-to-knows when it comes to working with Vue components. In tomorrow’s article, we’ll look at some of the different ways we’re able to declare the template of a component. Good job getting through week two and see you tomorrow!
