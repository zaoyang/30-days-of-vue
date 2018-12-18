<template>
  <div>
    <input v-model="numberInput" type="number" />
    <button @click="addNumber(numberInput)">
     Add new number
    </button>
  </div>
</template>

<script>
import { store } from "../store.js";

export default {
  name: "NumberSubmit",
  data() {
    return {
      numberInput: 0
    };
  },
  methods: {
    addNumber(numberInput) {
      store.addNumber(Number(numberInput));
    }
  }
};
</script>
