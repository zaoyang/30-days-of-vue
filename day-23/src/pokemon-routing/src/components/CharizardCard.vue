<template>
  <div class="card card--charizard has-text-weight-bold has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../static/charizard.png"/>
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Charizard</div>
        <div class="hp">hp 78</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">🔥<br>
          <span class="tag is-warning">Type</span>
        </div>
        <div class="column center-column">199 lbs<br>
          <span class="tag is-warning">Weight</span>
        </div>
        <div class="column">1.7 m <br>
          <span class="tag is-warning">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CharizardCard",
};
</script>
