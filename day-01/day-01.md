# What is Vue?

> Over the next 30 days, we’re going to walk through everything you need to know to get started with the Vue framework. From the **very beginning** through topics like the **Vue Instance**, **Components**, and even **Testing**.

Each day in our 30-day adventure will build upon the previous day's materials which will give us a good introduction to various terms, concepts, and underpinnings of the Vue framework.

This series is mainly targeted to readers that have no prior Vue knowledge and have a little or some experience with JavaScript. Though this course has been prepared for you to cover the material linearly from article-to-article, you are more than welcome to hop around in the course if you feel you’ve already grasped certain concepts.

With all that said, let’s get started. We’ll start at the very beginning by discussing what Vue is.

## What is Vue?

Vue is an open source JavaScript framework geared towards building user interfaces, created by [Evan You](https://twitter.com/youyuxi?lang=en). If we take a glance at the [front page of the main website](https://vuejs.org/), we can see that Vue is said to be the progressive JavaScript framework that is **approachable**, **versatile**, and **performant**. Let’s explain each of these points:

### Progressive

Vue is recognized to be **progressive** since it can be scaled down as well as it scales up. For very simple use cases, you can use Vue like you use jQuery - by dropping a single script tag:

```html
<script src="https://cdn.jsdelivr.net/npm/vue"></script>
```

But as your needs start to grow, Vue grows with you by giving you tools within the ecosystem to help you be more productive. Oftentimes, Vue is labeled as an adoptable framework since each of these tools can be incrementally added when needed.

### Approachable

Vue is understood to be **approachable** since as long as you know standard HTML, CSS, and JS; you’re able to start working with Vue right away to build more complex web applications.

### Versatile

The Vue framework is recognized to be **versatile** since the Vue library itself fits neatly within an ecosystem of tools that make up the entire Vue framework. These tools are the:

-   The [vue-cli](https://cli.vuejs.org/) (i.e. Vue Command Line Interface) which allows for rapid prototyping and set-up of Vue-Webpack applications.
-   [vue-router](https://router.vuejs.org/) which helps us introduce client side routing into our application with relative ease.
-   [vuex](https://vuex.vuejs.org/guide/), the Elm-inspired Flux-like library that helps facilitate how data is managed in an application.
-   [vue-test-utils](https://vue-test-utils.vuejs.org/), the testing utility library that introduces various helpers and function to make testing Vue components a lot easier.

Each of the above tools was created and is currently maintained by the Vue core team. This makes integrating and using them in Vue applications a relatively seamless experience. We’ll be discussing each of these libraries at various points throughout this series.

### Performant

Finally, Vue is seen to be **performant** since it takes advantage of the virtual DOM for incredibly fast re-render times. The Vue core library is also built to require minimal effort towards performance optimization.

## Okay… cool… but how do we use it?

In the simplest way possible, we can get started working with Vue by placing a script tag in an HTML file that loads the latest version of Vue from a Content Delivery Network (CDN). We can also reference a JavaScript file (named `main.js` for example) which would be the file where our Vue JavaScript code lives:

```html
<html>
  <body>
    <script src="https://unpkg.com/vue"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

Since the Vue library is available, we’re able to now create a new Vue application. We’ll create this application by declaring the Vue Instance - which is the heart of a Vue application - in the `main.js` file. The Vue instance is created by declaring the `new Vue({})` constructor:

```javascript
new Vue({
  // options
});
```

A Vue instance accepts an **options** object which can contain details of the instance such as its template, data, methods, etc. Root level instances allow us to specify the DOM element with which the instance is to be mounted/attached to, like so:

```javascript
new Vue({
  el: '#app',
});
```

We've just used the element option, `el`, to dictate the HTML element with the `id` of `app` to be the **mounting point** of our Vue application.

I> Vue is a user interface library focused on the _view_ layer. A Vue application needs to depend on an HTML DOM element to control how the element behaves.

The Vue instance can also return data that needs to be handled within the view. This data has to be dictated within a `data` option. In our instance, let’s declare a `greeting` data property that’s given a string value of `Hello World!`:

```javascript
new Vue({
  el: '#app',
  data: {
    greeting: 'Hello World!',
  },
});
```

To have the `greeting` data value be presented in the template, we’ll first need to declare the element that our Vue app is to be mounted on (i.e. the element with the id of `app`):

```html
<html>
  <body>
    <div id="app"><!--  where our Vue template code will live --></div>
    <script src="https://unpkg.com/vue"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

We’ll now be able to display the value of the greeting property in our Vue instance on the HTML template. To bind data values as the text content of elements, we’ll use the [Mustache Syntax](https://vuejs.org/v2/guide/syntax.html#Text):

```html
<html>
  <body>
    <div id="app">
      <h2>{{ greeting }}</h2>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

The `greeting` data property in the template is now directly bound to the value in our instance. When our app loads, we’ll be presented with Hello World!

<iframe src='./src/index.html' style='display: block; margin: 0 auto; width: 100%'></iframe>

That was easy, wasn’t it? In the next article, we'll take a deeper look at the `data` property of a Vue instance and how it enables the _reactivity_ of our Vue applications.
