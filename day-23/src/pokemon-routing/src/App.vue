<template>
  <div class="container">
    <div class="pokemon">
      <PokemonCard />
    </div>
  </div>
</template>

<script>
import CharizardCard from "./components/CharizardCard";

export default {
  name: "App",
  components: {
    PokemonCard: CharizardCard
  }
};
</script>

<style lang="css" src="../styles.css">
/* Styles from stylesheet */
</style>
