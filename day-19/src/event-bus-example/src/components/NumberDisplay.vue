<template>
  <div>
    <h2>{{ numbers }}</h2>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "NumberDisplay",
  data() {
    return {
      numbers: [1, 2, 3]
    };
  },
  created() {
    EventBus.$on("number-added", number => {
      this.numbers.push(number);
    });
  }
};
</script>
