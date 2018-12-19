import Vue from "vue";
import VueRouter from "vue-router";
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

export default new VueRouter({
  mode: "history",
  routes
});
