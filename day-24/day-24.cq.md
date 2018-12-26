# Vue Router

With our application scaffold established in the last article, let's see how we can enable routing in our Pokémon app. We’ll use Vue’s official client-side routing library, [__Vue Router__](https://router.vuejs.org/), to achieve this.

## Vue Router

In order to use the Vue Router library, we'll need to first install it into our project:

```shell
npm install vue-router --save
```

For module based Webpack applications, we’ll need to call `Vue.use(VueRouter)` before we’re able to use the Vue Router library. We can write the following code and the rest of the router instantiation in a `src/router.js` file.

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);
```

Before we continue, let's take a step back and from a high level look at _how_ and _why_ we plan to architect our application.

Conceptually, we've seen how we can create tree structures using components and nested components. Using this perspective with a single page app with routes, we can think of the different parts of a page as children. Routing in a single page app from this perspective is the idea that we can take a part of a subtree and switch it out with another subtree. We can then _dynamically_ switch out the different trees in the browser.

For a more _simpler_ explanation, we'll essentially need to use a Vue component that acts as a _root_ component of the routable elements. We can then tell Vue to change a view, which can just swap out an entire Vue component for another one as though it's a completely different page rendered by a server.

Before we use this _root_ router component, we’ll need to tell our router which views should be shown in which routes. This matching can be dictated in a `routes` array that we’ll create. We’ll create this array in the `src/router.js` file:

```javascript
import Vue from 'vue';
import VueRouter from 'vue-router';
import BlastoiseCard from "./components/BlastoiseCard";
import CharizardCard from "./components/CharizardCard";
import VenusaurCard from "./components/VenusaurCard";
import NotFound from "./components/NotFound";

Vue.use(VueRouter);

const routes = [
  { path: "/", component: CharizardCard },
  { path: "/charizard", component: CharizardCard },
  { path: "/blastoise", component: BlastoiseCard },
  { path: "/venusaur", component: VenusaurCard },
  { path: "*", component: NotFound }
];
```

We’ve set each Pokémon path to their own respective component (e.g. `/blastoise` will render the `BlastoiseCard` component). We’ve also set the root path `/` to the `CharizardCard` component.

The path of `*` is how we, in Vue Router, can show a certain fallback component if the user attempts to access a route that we haven’t explicitly defined (i.e. the user is accessing a ‘Not Found’ template). Any route entered in the URL that does not exist will return the `NotFound` component which contains a simple header template that states 'Sorry. We couldn't find that Pokémon :('.

{lang=html,line-numbers=off}
<<[src/pokemon-routing/src/components/NotFound.vue](./src/pokemon-routing/src/components/NotFound.vue)

We can now look to create our application wide router instance using the `new VueRouter({})` constructor. At the very minimum, the constructor expects the `routes` array that maps components to their respective pathnames:

```javascript
import Vue from "vue";
import VueRouter from "vue-router";
// ...

const routes = [
  // ...
];

export const router = new VueRouter({ 
  routes
});
```

Vue Router’s default mode is _hash_. Hash mode URLs always contain a hash symbol (#) after the hostname (i.e domain name). The hash mode basically means our application routes will be displayed like this - http://localhost:8080/#/charizard. The benefit to this often lies with allowing us to have multiple client side routes without having to provide the necessary server side fallbacks.

Since our application is a dead simple client-side app and we don’t want the hash in our URLs, we can get rid of it. To remove hashes in our URLs, we’ll specify the `history` mode property in our router instantiation:

```javascript
import Vue from "vue";
import VueRouter from "vue-router";
// ...

const routes = [
  // ...
];

export const router = new VueRouter({
  mode: 'history',
  routes
});
```

I> If we were to deploy our single-page app and depending on the server configuration we have, we may have to provide a catch-all fallback route to tell our server to always fall back to the same `index.html` file. The Vue Router documentation show some [example server configurations](https://router.vuejs.org/guide/essentials/history-mode.html#example-server-configurations) we can use to create this fallback route.

When a Vue Router instance is prepared, it’s made available to a Vue application by declaring the router object within the application wide Vue instance. We’ll do this in the `main.js` file where our Vue app is currently being instantiated:

{lang=javascript,line-numbers=off}
<<[src/pokemon-routing/src/main.js](./src/pokemon-routing/src/main.js)

With the router instance available everywhere in our app, we’re able to now use the components given to us from the Vue Router library. Remember that _root_ router component we talked about earlier that would decide which view to show based on the route that the user is in? __In Vue Router, this root router component is the `<router-view>` component__.

In the template of the parent `App` component, we’ll remove the declaration of `<PokemonCard />` and instead render the `<router-view>` component that Vue Router gives us.

```html
<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="css" src="./styles.css">
/* Styles from stylesheet */
</style>
```

`<router-view>` determines which component should be displayed based on the app’s location.

In our app, we'll need to add a links (or an anchor tag -- `<a />`) to enable our users to travel freely between the three different routes. However, using the `<a />` tag will tell the browser to treat the route like it's a server-side route. Instead, we'll need to use a different component that Vue Router also provides called: `<router-link>`.

Using the `<router-link>` component requires passing a `to` prop that specifies the route we would want the link to navigate to. Let's update the `App` component to use `<router-link>` to create the links we want in our application:

{lang=html,line-numbers=off}
<<[src/pokemon-routing/src/App.vue](./src/pokemon-routing/src/App.vue)

`<router-link>` would allow the user to change the location of the browser without making a web request.

And there we have it! If we save all the work we’ve done, we now have a fully functional client-side application built with Vue and Vue Router.

<iframe src='https://pokemon-routing.surge.sh/'
        height="900"
        scrolling="no"
        style='display: block; margin: 0 auto; width: 100%'>
</iframe>

I> If you’d like to re-absorb the subject of client-side routing in Vue - you can watch a talk I’ve given on this subject [here](https://www.youtube.com/watch?v=YFnimUl8Qjo)!

Vue Router provides so much more functionality that we don't have time to cover in our brisk intro to routing. Though this was a simple introduction, Vue Router provides more intermediate and advanced features like [dynamic route matching](https://router.vuejs.org/guide/essentials/dynamic-matching.html), [navigation guards](https://router.vuejs.org/guide/advanced/navigation-guards.html#global-guards), and [lazy loading routes](https://router.vuejs.org/guide/advanced/lazy-loading.html). For more information, be sure to check out the following links:

- [https://router.vuejs.org/](https://router.vuejs.org/)
- [Fullstack Vue - Routing](https://www.fullstack.io/vue/)
