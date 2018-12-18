<template>
  <div>
    <input v-model="number" type="number" />
    <button @click="addNumber">
     Add new number
    </button>
  </div>
</template>

<script>
import { EventBus } from "../event-bus.js";

export default {
  name: "NumberSubmit",
  data() {
    return {
      number: 0
    };
  },
  methods: {
    addNumber() {
      EventBus.$emit("number-added", Number(this.number));
    }
  }
};
</script>
