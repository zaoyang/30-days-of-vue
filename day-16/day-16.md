# Render Functions and JSX

> We took a look at the different types of component templates in yesterday's article. Today, we'll look to use a **render** function to create the markup of a component entirely with JavaScript.

From what we’ve seen in yesterday's article, it’s probably safe to say that creating the markup for Vue components (or instances) is a fairly straightforward process. We’ve seen some alternate template definitions like `inline-templates` and `x-templates`, but as a best practice, it’s best to stick with using an instance template option for simple components/instances.

> We did mention that there’s another way to have the templates of our components be defined (hint: **Single-File Components**). We’ll be taking a small detour today before diving into SFC’s tomorrow!

Vue, at build time, takes the templates we create for our instances/components and compiles them to something known as [**`render`**](https://vuejs.org/v2/guide/render-function.html#Basics) functions. It’s at these compiled `render` functions, where Vue builds a virtual representation of nodes that make up the virtual DOM.

I> As mentioned in an earlier article, Vue operates not directly on the browser’s Document Object Model (DOM) immediately, but on a **virtual DOM**. Vue uses the virtual DOM to maintain/manage and track the changes in our application in a “less-expensive” way (i.e. less expensive than immediately tracking the changes being made on the actual DOM).

Although Vue recommends for us to use templates to construct the markup of our instances in most cases, we’re also given the opportunity to _directly use_ `render` functions to build the markup of our instances as well! By using `render` functions, we skip the compile step that Vue takes to compile our templates down.

We’ll spend some time in this article taking a look at these `render` functions and how we can use them to construct the markup of the same element we've built in the last article.

## Render functions

In the last article, we discussed different template techniques to construct a simple card element that accepted a `message` prop.

<iframe src='../day-15/src/standard-strings-template/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

The markup of the card element we’ve created was pretty straightforward and contained a `<div>` element encompassing a `<header>` element. The text content of the `<header>` element displayed the value of the `message` prop.

```html
<div class="render-card">
  <header class="card-header card-header-title">
    {{ message }}
  </header>
</div>
```

We’ll recreate the above markup step by step with the help of a `render` function that’s available as a property in every instance.

```javascript
let renderComponent = {
  render() {
    // render function
  },
  props: ['message']
}
```

`render` functions in Vue always receive a `createElement` function as an argument.

```javascript
let renderComponent = {
  render(createElement) {
    // render function
  },
  props: ['message']
}
```

The `createElement` function is able to create the “virtual” representation of the DOM nodes that Vue uses to track and subsequently render on the page. The `createElement` function [takes three arguments of its own](https://vuejs.org/v2/guide/render-function.html#createElement-Arguments):

1.  An HTML tag name (or a component options object).
2.  A data object that corresponds to the attributes to be added to the HTML template (event listeners, class attributes, etc.).
3.  Child nodes of the parent node.

The HTML tag name for the parent node we want to construct is a `div` element. We'll return the `createElement` function and pass in a string of value `'div'` as the first argument:

```javascript
let renderComponent = {
  render(createElement) {
    return createElement('div');
  },
  props: ['message']
}
```

Since we’re interested in applying a `card` CSS class to the parent `div` element, we’ll declare the `data` object in the second argument of the `createElement` function to have an `attrs` property. In `attrs`, we'll specify a `class` key that has a string value of `'render-card'`:

```javascript
let renderComponent = {
  render(createElement) {
    return createElement(
      'div', {
        'attrs': {
          class: 'render-card'
        },
      }
    );
  },
  props: ['message']
}
```

Though we won’t be doing much more, there are numerous different ways of defining attributes with the second argument `data` object. If you’re interested, be sure to check out the [Vue documentation](https://vuejs.org/v2/guide/render-function.html#The-Data-Object-In-Depth) for a good summary.

To mimic the card we've built in the last article, the parent `<div>` element is to have a child `<header>` element of its own. In the third argument of the `createElement` function, we’re able to either specify a simple string to render text or an array to render more `createElement` functions (i.e. more elements). Since we’ll be rendering another generated element as the child, we’ll declare the `createElement` function within the child nodes array and give it a string value of `'header'`:

```javascript
let renderComponent = {
  render(createElement) {
    return createElement(
      'div', {
        'attrs': {
          class: 'render-card'
        },
      }, [
        createElement('header')
      ]
    );
  },
  props: ['message']
}
```

The `header` child element is to have classes of its own so we’ll pass in an attributes object in the nested `createElement` function to declare the classes the `header` element should have:

```javascript
let renderComponent = {
  render(createElement) {
    return createElement(
      'div', {
        'attrs': {
          class: 'render-card'
        },
      }, [
        createElement('header', {
          'attrs': {
            class: 'card-header card-header-title',
          }
        })
      ]
    );
  },
  props: ['message']
}
```

Thankfully, the child `header` element is to contain no child elements of its own and instead simply display the value of the `message` prop. To have the `header` element display the `message` prop as its child content we’ll declare `this.message` in the third argument of the nested `createElement` function. `this.message` will reference the message property available in the component as props:

```javascript
let renderComponent = {
  render(createElement) {
    return createElement(
      'div', {
        'attrs': {
          class: 'render-card'
        },
      }, [
        createElement('header', {
          'attrs': {
            class: 'card-header card-header-title',
          },
        }, this.message)
      ]
    );
  },
  props: ['message']
}
```

And that’s it! Before we finish, it might be worth mentioning that oftentimes instead of writing the `createElement` function as is, the term `createElement` is often labelled as `h` (short for `hyperscript` which is a term often used in virtual DOM implementations). Shortening the `createElement` keyword to `h` would have our `renderComponent` now look like the following:

```javascript
let renderComponent = {
  render(h) {
    return h(
      'div', {
        'attrs': {
          class: 'render-card'
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
```

By declaring the created component in the root template like we've done before, we'll see the rendered card element as expected.

<iframe src='./src/render-functions-example/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

I> [Sarah Drasner](https://twitter.com/sarah_edo) (Vue Core Team Member) has a great article on CSS-Tricks that explains the usage of the term `h` (short for `hyperscript`) in Vue render functions - <https://css-tricks.com/what-does-the-h-stand-for-in-vues-render-method/>.

Whew. If you’re feeling confused here, no need to worry. Though `render` functions give us more power in how we’d want to tailor the markup of our components, using standard templates is usually **a lot easier** the vast majority of time.

In certain few cases, `render` functions can make creating the markup of components simpler, like this [example shown here from the Vue documentation](https://vuejs.org/v2/guide/render-function.html#Basics).

## Render functions and JSX

A large reason as to why the implementation we’ve done above might be seen as somewhat painful was due to us writing the `render` function with raw native JavaScript. To help make writing `render` functions a lot easier, Vue gives us the ability to write `render` functions with JSX with the help of an appropriate [Babel plugin](https://github.com/vuejs/babel-plugin-transform-vue-jsx)!

I> If you come from a React background, **JSX** might already be a familiar topic. Simply put, **JavaScript XML** (or more commonly known as **JSX**) is an extension that allows us to write JavaScript that _looks like_ HTML (i.e. write XML-like syntax in JavaScript).

JSX can help recreate our `renderComponent` implementation in a way that is a lot easier to read since we can safely write HTML _in_ the render function:

```javascript
let renderComponent = {
  render(h) {
    return (
      <div class="render-card">
        <header class="card-header card-header-title">
          {this.message}
        </header>
      </div>
    );
  },
  props: ['message']
}
```

I> If we’re using JSX in our render functions, [**we must alias createElement to h in the render function argument**](https://vuejs.org/v2/guide/render-function.html#JSX).

[CodeSandbox](https://codesandbox.io/) (an online code-editor) provides great support for using JSX with Vue. Without worrying about the tooling we need just yet, here’s a [live CodeSandbox example](https://codesandbox.io/s/6j1733lvqw) of creating the `renderComponent` with JSX (the component is created in the `RenderComponent.vue` file).

With JSX, our `render` function doesn’t look too difficult! It’s important to keep in mind that JSX is a development tool that always need to be transpiled with the help of a Babel package (like [`babel-plugin-transform-vue-jsx`](https://github.com/vuejs/babel-plugin-transform-vue-jsx)) to standard JavaScript. `babel-plugin-transform-vue-jsx` also requires that we’re building our app with the help of a module bundler like Webpack.

## Conclusion

If you feel like you haven’t fully grasped the information in this article - **that is totally okay**. Vue recommends us to use standard templates whenever we can since render functions are harder to grasp and implement in an application. As a fun-fact as well, the Vue team has stated that [one of the bigger changes to come in Vue 3.0](https://medium.com/the-vue-point/plans-for-the-next-iteration-of-vue-js-777ffea6fabf#f25a) is the Virtual DOM format used in render functions, _particularly the native JavaScript way of doing so_. When Vue 3.0 does finally arrive, we’ll revamp how the examples in this article is set up but as of now - this article is intended to be an introduction to what `render` functions are. We won’t be discussing or using `render` functions for the rest of the course.

> We'll be taking a deep dive into many of the cool updates Vue 3.0 will bring in the second last article of the course - **Vue 3.0 and the future of Vue**.

In the application shown with CodeSandbox, you might be wondering why the component files look and are named differently (e.g. `RenderComponent.vue`) and why the entire application structure looks a little more advanced. This is because that application was a Vue app bundled with [**Webpack**](https://webpack.js.org/) with the components being built in **Single-File** format. It’s safe to say that it’s finally time to dive into what these components are, which we’ll be doing tomorrow!
