<template>
  <div>
    <ChildComponent :numbers="numbers" />
  </div>
</template>

<script>
import ChildComponent from "./ChildComponent";

export default {
  name: "ParentComponent",
  data() {
    return {
      numbers: [1, 2, 3]
    };
  },
  components: {
    ChildComponent
  }
};
</script>
