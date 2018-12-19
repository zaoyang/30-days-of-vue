<template>
  <div class="card card--blastoise has-text-weight-bold has-text-white">
    <div class="card-image">
      <div class="card-image-container">
        <img src="../../static/blastoise.png" />
      </div>
    </div>
    <div class="card-content has-text-centered">
      <div class="main">
        <div class="title has-text-white">Blastoise</div>
        <div class="hp">hp 79</div>
      </div>
      <div class="stats columns is-mobile">
        <div class="column">
          💧<br />
          <span class="tag is-light">Type</span>
        </div>
        <div class="column center-column">
          223 lbs<br />
          <span class="tag is-light">Weight</span>
        </div>
        <div class="column">
          1.6 m<br />
          <span class="tag is-light">Height</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlastoiseCard"
};
</script>
