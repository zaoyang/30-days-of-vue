<template>
  <div class="container">
    <div class="pokemon">
      <router-view></router-view>

      <div class="pokemon-links has-text-centered">
        <router-link to="/charizard">/charizard</router-link>
        <router-link to="/blastoise">/blastoise</router-link>
        <router-link to="/venusaur">/venusaur</router-link>
      </div>
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
