# Vue Components - Template Definitions

> Today, we'll be taking a look at some of the different ways we can declare the template/markup of a component.

For all the components we’ve seen so far, we’ve used either standard strings or template literals to define the component template. In this article, we'll summarize why we use either strings or template literals before investigating some other ways of defining the template of a component.

## Component Templates

### Template Strings

The `template` option of a component expects a string, so we’re able to define the entire markup of a component within standard strings.

Here's an example of the root instance template rendering a `single-line-template` component while passing in a `message` prop.

```html
    <div id="app">
      <single-line-template :message="message"></single-line-template>
    </div>
```

The `template` of the `single-line-template` component is kept within standard strings.

```javascript
let singleLineTemplate = {
  template: '<div class="card"><header class="card-header card-header-title">{{ message }}</header></div>',
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
```

<iframe src='./src/standard-strings-template/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

Standard strings (i.e. ‘ ‘ ) in JavaScript expect the string to be defined in _a single line_ which can make reading the markup of a component difficult. If we wanted to break our component template into multi-line format - we can take advantage of [ES6 Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (i.e. back-ticks ``).

```javascript
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
```

I> Template literals is an unsupported ES6 feature in older browsers like IE11.

In addition to defining the template in strings, the [Vue documentation](https://vuejs.org/v2/guide/components-edge-cases.html#Alternate-Template-Definitions) highlights two other alternative definitions - **inline templates** and **x-templates**.

### Inline Templates

Inline templates allow us to simply regard the inner content of a declared component as its template. This is achieved by using the special `inline-template` keyword on the component.

To see an example of this, we'll first declare a local `inlineTemp` component object that expects a `message` prop.

In the root template, we can render the `inline-temp` component and pass in the `message` data as props.

```html
<div id="app">
  <inline-temp :message="message"></inline-temp>
</div>
```

As of this moment, the `inline-temp` component has no template and nothing will be shown. We can use the `inline-template` keyword and declare the template of the component _as the inner content between the component opening and closing tags_.

```html
      <inline-temp :message="message" inline-template>
        <div class="card">
          <header class="card-header card-header-title">{{ message }}</header>
        </div>
      </inline-temp>
```

<iframe src='./src/inline-template/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

The [Vue documentation](https://vuejs.org/v2/guide/components-edge-cases.html#Inline-Templates) states that inline templates make it harder to understand the template of a component and as a best practice, **should not be used**. 

### X Templates

With x-templates, we’re able to use `<script>` tags to define pockets of markup that represent the templates of components. To recreate the same example above with x-templates, we'll instantiate a `xTemp` component object with the template property given a value of `#x-template-component`. We can have the component registered in the root instance as well.

```javascript
let xTemp = {
  template: '#x-template-component',
  props: ['message']
}

new Vue({
  el: '#app',
  data: {
    message: 'Greetings!',
  },
  components: {
    'x-temp': xTemp
  }
});
```

In the root template, we can first render the `x-temp` component and pass in the expected `message` prop.

```html
<div id="app">
  <x-temp :message="message"></x-temp>
</div>
```

To specify the template of the `x-temp` component, we can write a _separate_ `<script></script>` tag in the root markup that has `type=text/x-template` and `id=x-template-component`. The `x-template-component` id is the value of the `template` option in the `xTemp` component object. The template of the component will then be the inner contents of this script tag.

```html
    <div id="app">
      <x-temp :message="message"></x-temp>

      <script type="text/x-template" id="x-template-component">
        <div class="card">
          <header class="card-header card-header-title">
            {{ message }}
          </header>
        </div>
      </script>
    </div>
```

<iframe src='./src/x-template/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

Though x-templates may seem to be a pretty neat feature, there are significant downsides to having the template of a component _completely separate_ from the actual component definition. For this reason, the [Vue documentation](https://vuejs.org/v2/guide/components-edge-cases.html#X-Templates) states that x-templates **should be avoided in most cases**.

### Shortcomings and render functions

From what we've gathered in this article, template strings are a more viable approach than using inline templates or x-templates. Though template strings work fairly well, there are some shortcomings that get more noticeable as our components start to become more complicated.

The first and probably more obvious shortcoming is that the `template` property of a component expects the markup of a component to be kept within a string. For simple templates, this works fine but as components become larger; having **no syntax highlighting** and the **entire markup of a component kept within back-ticks (or strings)** makes the template of components **hard to read**.

The components we’ve created so far have done a good job in isolating markup (HTML) and logic (JS). Wouldn’t it also be nice if we could isolate the CSS a component contains to be within the component itself?

This is where one of Vue’s most useful features comes in - **Single File Components**. Before we dive into Single File Components, we'll be taking a quick detour tomorrow and discussing **render** functions - functions that allow us to create the markup of components _entirely with JavaScript_.
