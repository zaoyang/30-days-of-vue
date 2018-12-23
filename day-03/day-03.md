# The Vue Instance - Data Driven Applications

In yesterday’s article, we’ve come to understand how data behaves reactively in Vue. Today, we’re going to spend a little more time discussing this behavior since it plays an especially important role in how we build applications in Vue.

## Reactive Data

Data in Vue is treated as reactive since modifying data often directly causes the view to update. For every key-value pair we declare in the `data` property of an instance, the Vue library creates _getters_ and _setters_ pertaining to that property. These setters and getters work _under the hood_ to track the data properties and cause the template to re-render when a change has been made.

I> For a more detailed explanation of data reactivity - be sure to read through the [Reactivity in Depth](https://vuejs.org/v2/guide/reactivity.html) section of the core Vue documentation.

For those who may be coming from a [React](https://reactjs.org/) background, you might notice reactive state (i.e. data) is different to how data is handled in React. In React, [state should often be treated as _immutable_](https://reactjs.org/docs/react-component.html#state). Reactive state is one of the key differences that make Vue unique. State (i.e. data) management is often intuitive and easy to understand since modifying state directly causes the view to update.

## Data Driven Applications

The reactive nature of data in Vue help facilitates the possibility of building applications in a _data-driven_ manner. To get a better understanding of this, we’ll take a look at the simple application we built in yesterday’s article.

<iframe src='../day-02/src/simple-data-change-example/index.html'
        height="250"
        scrolling="no"
        style='display: block; margin: 0 auto; width: 100%'>
</iframe>

Let’s assume we wanted to scale the application and introduce capabilities like:

-   Displaying the current date and time.
-   Toggling the user and city information from a list of options.
-   Toggling the background color with the click of a button.
-   etc...

With all these capabilities, we would adopt the reactive nature of Vue and introduce new data properties like `date` that’s given a value of the current date ( `new Date()`)  or `cities` which could be an array that contains a series of cities like `['Lagos', 'New York', 'Tokyo', 'Toronto']`.

The Mustache Syntax and certain directives (which we’ll start to see in the next article), will help us in binding all or some of this information to the template. With the help of methods and other inline capabilities, **we can trigger changes to the instance data** which would update the template to the situations we intend to see. This sort of explains the _data-driven_ mindset of how we build our UI.

I> If you've used [React](https://reactjs.org), [Angular](https://angular.io/), or other modern-day front end frameworks/libraries; you might be used to a similar pattern on how modifying data/state _drives the changes in an application UI_.

In contrast, let’s aim to reproduce the functionality of the application in the last article (i.e. toggling the greeting message with the click of a button) with the use of only standard (i.e. vanilla) JavaScript. Though there are a few ways to achieve this we might come up with something like this:

### HTML

```html
<html>
  <head>
    <link rel="stylesheet" href="./styles.css" />
  </head>

  <body>
    <div id="app">
      <h2>Hello World!</h2>
      <p>by Hassan Djirdeh who lives in Toronto</p>
      <button onclick="changeGreeting()">Change Greeting</button>
    </div>
    <script src="./main.js"></script>
  </body>
</html>
```

### JS

```javascript
// Vanilla JS implementation

let greetingTag = document.getElementsByTagName("h2")[0];

changeGreeting = () => {
  if (greetingTag.textContent === 'Hello World!') {
    greetingTag.textContent = 'What is up!';
  } else {
    greetingTag.textContent = 'Hello World!';
  }
}
```

The functionality that achieves the direct toggle between the different text content is inherently similar to what we had before:

-   Check if the text content of the `<h2>` element is `Hello World!`.
-   If the text content is `Hello World!` - change it to `What is up!`.
-   If the text content isn’t `Hello World!` - change it back to `Hello World!`.

The difference in the two approaches can be seen in how we were able to access and change the text content of the `<h2>` element. **In the vanilla JavaScript approach, the DOM is treated as the single source of truth**. To determine the text content of the `<h2>` element, we had to survey the DOM, find the element, then survey its `textContent` value. This is because the DOM is the _only place_ that has this information!

With our Vue example, we were able to simply retrieve and change the value of the data property being used in the template (`greeting`), without having the need to survey the DOM. This is why the **source of truth in Vue applications is the data property of a Vue instance**. In Vue applications, we’ll hardly ever find ourselves using methods like `document.getElementsByTagName` or `document.querySelector('img').setAttribute()` and instead use the `data` properties of our instances to _drive the changes in the UI_.

## Vue Data Properties

Vue initializes the reactivity of an instance upon instantiation, and as a result, requires us to declare properties upfront before we decide to use them. Because of this, we’re unable to directly add (or remove) properties from an already created instance. As an example, this won’t work:

```javascript
new Vue({
  el: '#app',
  data: {
    user: 'Hassan Djirdeh',
    city: 'Toronto'
  },
  methods: {
    addGreeting() {
      this.greeting = 'Hello World!'; // greeting is not initialized :(
    }
  }
});
```

In the example above, Vue would emit a console warning along the lines of:

```shell
Property or method "greeting" is not defined on the instance but referenced during render. Make sure that this property is reactive, either in the data option, or for class-based components, by initializing the property...
```

We’re expected to initialize all the properties we intend to use.

```javascript
new Vue({
  el: '#app',
  data: {
    greeting: '', // greeting is initialized with an empty string
    user: 'Hassan Djirdeh',
    city: 'Toronto'
  },
  methods: {
    addGreeting() {
      this.greeting = 'Hello World!'; // greeting can now be updated!
    }
  }
});
```

I> Vue 3.0, which is expected to launch sometime in 2019, will use a [Proxy-based observation mechanism](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy) to detect data changes. This would allow us to delete or add new properties after an instance has already been initialized! We take a deep dive to the updates Vue 3.0 will bring in the second last article of the series - **Vue 3.0 and the future of Vue**.

For more information on reactivity in Vue and declaring reactive properties upfront, be sure to check out the [Reactivity in Depth](https://vuejs.org/v2/guide/reactivity.html) section of the Vue documentation.

That's it for today! In the next article, we’ll begin the discussion on some important and very useful Vue directives.
