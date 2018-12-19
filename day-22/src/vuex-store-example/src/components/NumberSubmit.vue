<template>
  <div>
    <input v-model="numberInput" type="number" />
    <button @click="addNumber(numberInput)">
     Add new number
    </button>
  </div>
</template>

<script>
export default {
  name: "NumberSubmit",
  data() {
    return {
      numberInput: 0
    };
  },
  methods: {
    addNumber(numberInput) {
      this.$store.dispatch("addNumber", Number(numberInput));
    }
  }
};
</script>
