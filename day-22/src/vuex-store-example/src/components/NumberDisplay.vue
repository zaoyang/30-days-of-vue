<template>
  <div>
    <h2>{{ getNumbers }}</h2>
  </div>
</template>

<script>
export default {
  name: "NumberDisplay",
  computed: {
    getNumbers() {
      return this.$store.getters.getNumbers;
    }
  }
};
</script>
