<template>
  <div id="app">
    <ParentComponent/>
  </div>
</template>

<script>
import ParentComponent from "./components/ParentComponent";

export default {
  name: "App",
  components: {
    ParentComponent
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
