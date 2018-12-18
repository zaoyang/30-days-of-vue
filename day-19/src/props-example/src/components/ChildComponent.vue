<template>
  <div>
    <h2>{{ numbers }}</h2>
  </div>
</template>

<script>
export default {
  name: "ChildComponent",
  props: {
    numbers: Array
  }
};
</script>
