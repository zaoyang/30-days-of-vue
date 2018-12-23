# Vue Directives

The last article was a little heavy on discussion. In this article, we’ll dive into more code examples by addressing some important native __directives__.

A __Vue directive__ is essentially a special type of command that can be added to HTML content and often appears as a prefixed HTML attribute. We’ll first revisit the __v-on__ directive since we’ve used it in one of the earlier articles.

## Event Handling with v-on

The [__v-on__](https://vuejs.org/v2/guide/events.html) directive can be used to create event listeners within the DOM to enable us to do something when a particular event happens.

In article __#2__, the __v-on__ directive was used to call an instance `changeGreeting()` method when a button was clicked:

```html
<button v-on:click="changeGreeting">Change Greeting</button>
```

Instead of triggering a method in the instance, we’re also able to run JavaScript _inline_ in the template:

```html
<button v-on:click="greeting = 'Hi there!'">Change Greeting</button>
```

Though inline JavaScript works just as well, calling methods bound to the instance is often preferable when intended functionality change gets more complicated.

It's important to keep in mind that the __v-on__ directive can be used with virtually any native DOM event:

```html
<h1 v-on:click="method">Click me!</h1>
<h1 v-on:dblclick="method">Double Click me!</h1>
<input v-on:keydown="method" placeholder="Press down on keys" />
<input v-on:keyup="method" placeholder="Release keys" />
<form v-on:submit="method">...</form>
<!-- ... -->
```

Here’s a code sample that shows some different event listeners with different expected outcomes:

### HTML

{lang=html,line-numbers=off}
<<[src/v-on-example/index.html](./src/v-on-example/index.html)

### JS

{lang=javascript,line-numbers=off}
<<[src/v-on-example/main.js](./src/v-on-example/main.js)

<iframe src='./src/v-on-example/index.html'
        height="250"
        scrolling="no"
        style='display: block; margin: 0 auto; width: 100%'>
</iframe>

From the code sample above, you may have noticed the `v-on` directive be used on a `keyup.enter` event. `keyup.enter` is one of the [unique key modifiers](https://vuejs.org/v2/guide/events.html#Key-Modifiers) Vue provides to allow us to react to events from commonly used keys like the Enter key.

Finally, event handlers usually have an event object that contains details about the event. In the __v-on__ directive, we’re able to access this original event object by explicitly passing in the `$event` variable:

```html
<h1 v-on:click="method($event)">Click me!</h1>
```

The __v-on__ directive is essentially what we use to detect and handle events in Vue applications.

## Attribute binding with v-bind

The simplest form of data binding in Vue is the Mustache Syntax (i.e. double curly braces) which is used to bind data values on to _text content_ of HTML elements.

In the code samples prepared in the first and second articles, we used the Mustache Syntax to bind `greeting`, `user`, and `city` properties defined in our instance on to the template:

```html
<html>
  <body>
    <div id="app">
      <h2>{{ greeting }}</h2>
      <p>by {{ user }} who lives in {{city}}</p>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

__We’re unable to use the Mustache syntax to bind data to standard HTML attributes like `href`, `id`, `src`, etc__. To bind HTML attributes, Vue provides the native [__v-bind__](https://vuejs.org/v2/guide/syntax.html#Attributes) directive.

Here’s an example of using the __v-bind__ directive to bind a data property (named `cityImage`) to the `src` attribute of an `img` element:

### HTML

{lang=html,line-numbers=off}
<<[src/v-bind-example/index.html](./src/v-bind-example/index.html)

### JS

{lang=javascript,line-numbers=off}
<<[src/v-bind-example/main.js](./src/v-bind-example/main.js)

With the `cityImage` appropriately bound, we’ll be presented with a view of Toronto’s skyline:

<iframe src='./src/v-bind-example/index.html'
        height="325"
        scrolling="no"
        style='display: block; margin: 0 auto; width: 100%'>
</iframe>

## Conditional rendering with v-if (or v-show)

Oftentimes, we may find ourselves interested in conditionally rendering content based on the value of an expression. In Vue, we can achieve this with the help of the [__v-if__](https://vuejs.org/v2/guide/conditional.html#v-if) and [__v-show__](https://vuejs.org/v2/guide/conditional.html#v-show) directives.

To see an example of conditional rendering, let’s first add a button to our previous example that would allow us to change the city title and image from Toronto to Lagos:

### HTML

```html
<html>
  <body>
    <div id="app">
      <h2>{{ greeting }}</h2>
      <p>by {{ user }} who lives in {{ city }}</p>
      <img v-bind:src="cityImage" />
      <button v-on:click="changeCity">Change City</button>
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="./main.js"></script>
  </body>
</html>
```

### JS

{lang=javascript,line-numbers=off}
<<[src/v-if-example/main.js](./src/v-if-example/main.js)

The `changeCity()` method first checks if the `city` data value is `'Toronto'`, if so - it changes the `city` to `'Lagos'` and the `cityImage` to a hosted image of the [Lekki-Ikoyi Link Bridge](https://en.wikipedia.org/wiki/Lekki-Ikoyi_Link_Bridge) in Lagos state. If the city information has been already been changed, the `changeCity()` information simply reverts the information back to Toronto.

If we wanted to render some content in _certain conditions_ (e.g. when `city === 'Toronto'`), the __v-if__ or __v-show__ directive would prove useful. Since I (Hassan) live in Toronto, we can change the text content in the template to better reflect my presence. For example, we’ll use two separate `<p>` tags each containing a __v-if__ directive to display the appropriate description text content:

{lang=html,line-numbers=off}
<<[src/v-if-example/index.html](./src/v-if-example/index.html)

The text content of the first `<p>` tag that says `by Hassan who lives in Toronto` will only render if the `city` property is equal to `'Toronto'`. If `city` is equal to `'Lagos'`, the second `<p>` tag will instead only be displayed and say `by Hassan who wishes to visit Lagos`:

<iframe src='./src/v-if-example/index.html'
        height="325"
        scrolling="no"
        style='display: block; margin: 0 auto; width: 100%'>
</iframe>

I> Vue also provides the [__v-else__](https://vuejs.org/v2/guide/conditional.html#v-else) directive to describe an else block and the [__v-else-if__](https://vuejs.org/v2/guide/conditional.html#v-else-if) directive to describe an else-if-block.

Instead of the __v-if__ directive, we could also use the __v-show__ directive to conditionally render content:

{lang=html,line-numbers=off}
<<[src/v-show-example/index.html](./src/v-show-example/index.html)

<iframe src='./src/v-show-example/index.html'
        height="325"
        scrolling="no"
        style='display: block; margin: 0 auto; width: 100%'>
</iframe>

Though they achieve a similar outcome, the __v-if__ and __v-show__ directives differ from one another. The __v-if__ directive __does not render the element__ only until the stated condition is `true`. The __v-show__ directive, on the other hand, __always renders the element__ _but_ controls the CSS [`display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) property depending on whether the stated condition is `true`.

The __v-if__ directive is usually preferred as long as you don’t need the element to always be present in the DOM __and__ you don’t expect the toggling between displaying/hiding the element to happen very often. If we expect the element to toggle often at runtime - the __v-show__ directive would be more appropriate.

## Shorthand syntax with v-on and v-bind

Vue provides unique shorthand syntax only for the commonly used __v-bind__ and __v-on__ directives. The __v-bind__ directive can be shortened with the __:__ symbol:

```html
<!-- the full syntax -->
<img v-bind:src="dataProperty" />

<!-- the shorthand syntax -->
<img :src="dataProperty" />
```

And the __v-on__ directive can be shortened with the __@__ symbol:

```html
<!-- the full syntax -->
<button v-on:click="methodName"></button>

<!-- the shorthand syntax -->
<button @click="methodName"></button>
```

Though the shorthand syntax is entirely optional and achieves the exact same outcome, we’ll stick with using the shorthand syntax for the rest of the course.

Awesome! We'll stop here for today. In the next article, we’ll spend some time discussing how the __v-for__ directive can be used to help render lists of elements.
