<template>
  <div class="card card--venusaur has-text-weight-bold has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../static/venusaur.png" />
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Venusaur</div>
        <div class="hp hp-venusaur">hp 80</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">
          🍃<br />
          <span class="tag is-danger">Type</span>
        </div>
        <div class="column center-column">
          220 lbs<br />
          <span class="tag is-danger">Weight</span>
        </div>
        <div class="column">
          2.0 m<br />
          <span class="tag is-danger">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VenusaurCard"
};
</script>
