# Vue Components - Template Definitions

> Today, we'll be taking a look at some of the different ways we can declare the template/markup of a component.

For all the components we’ve seen so far, we’ve used either standard strings or template literals to define the component template. In this article, we'll summarize why we use either strings or template literals before investigating some other ways of defining the template of a component.

## Component Templates

### Template Strings

The `template` option of a component expects a string, so we’re able to define the entire markup of a component within standard strings.

Here's an example of the root instance template rendering a `single-line-template` component while passing in a `message` prop.

{lang=html,line-numbers=off,crop-start-line=9,crop-end-line=12}
<<[src/standard-strings-template/index.html](./src/standard-strings-template/index.html)

The `template` of the `single-line-template` component is kept within standard strings.

{lang=javascript,line-numbers=off}
<<[src/standard-strings-template/main.js](./src/standard-strings-template/main.js)

<iframe src='./src/standard-strings-template/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

> Live version - https://30dofv-singlestringtemp.surge.sh

Standard strings (i.e. ‘ ‘ ) in JavaScript expect the string to be defined in _a single line_ which can make reading the markup of a component difficult. If we wanted to break our component template into multi-line format - we can take advantage of [ES6 Template Literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals) (i.e. back-ticks).

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

In addition to defining the template in strings, the [Vue documentation](https://vuejs.org/v2/guide/components-edge-cases.html#Alternate-Template-Definitions) highlights two other alternative definitions - __inline templates__ and __x-templates__.

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

{lang=html,line-numbers=off,crop-start-line=10,crop-end-line=16}
<<[src/inline-template/index.html](./src/inline-template/index.html)

<iframe src='./src/inline-template/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

> Live version - https://30dofv-inlinetemplates.surge.sh

The [Vue documentation](https://vuejs.org/v2/guide/components-edge-cases.html#Inline-Templates) states that inline templates make it harder to understand the template of a component and as a best practice, __should usually not be used__. 

### X Templates

With x-templates, we’re able to use `<script>` tags to define pockets of markup that represent the templates of components. To recreate the same example above with x-templates, we'll instantiate a `xTemp` component object with the template property given a value of `#x-template-component`. We can have the component registered in the root instance as well.

{lang=javascript,line-numbers=off}
<<[src/x-template/main.js](./src/x-template/main.js)

In the root template, we can first render the `x-temp` component and pass in the expected `message` prop.

```html
<div id="app">
  <x-temp :message="message"></x-temp>
</div>
```

To specify the template of the `x-temp` component, we can write a _separate_ `<script></script>` tag in the root markup that has `type="text/x-template"` and `id"=x-template-component"`. The `x-template-component` id is the value of the `template` option in the `xTemp` component object. The template of the component will then be the inner contents of this script tag.

{lang=html,line-numbers=off,crop-start-line=9,crop-end-line=21}
<<[src/x-template/index.html](./src/x-template/index.html)

<iframe src='./src/x-template/index.html'
        height="75"
        scrolling="no"
         >
</iframe>

> Live version - https://30dofv-xtemplates.surge.sh

Though x-templates may seem to be a pretty neat feature, there are significant downsides to having the template of a component _completely separate_ from the actual component definition. For this reason, the [Vue documentation](https://vuejs.org/v2/guide/components-edge-cases.html#X-Templates) states that x-templates __should be avoided in most cases__.

### Shortcomings and render functions

From what we've gathered in this article, template strings are a more viable approach than using inline templates or x-templates. Though template strings work fairly well, there are some shortcomings that get more noticeable as our components start to become more complicated.

The first and probably more obvious shortcoming is that the `template` property of a component expects the markup of a component to be kept within a string. For simple templates, this works fine but as components become larger; having __no syntax highlighting__ and the __entire markup of a component kept within back-ticks (or strings)__ makes the template of components __hard to read__.

The components we’ve created so far have done a good job in isolating markup (HTML) and logic (JS). Wouldn’t it also be nice if we could isolate the CSS a component contains to be within the component itself?

This is where one of Vue’s most useful features comes in - __Single File Components__. Before we dive into Single File Components, we'll be taking a quick detour tomorrow and discussing __render__ functions - functions that allow us to create the markup of components _entirely with JavaScript_.
