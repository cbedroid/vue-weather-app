<template>
  <div class="temperature-container">
    <div class="temp">{{ temperature ? tempature : 80 }} &deg;</div>
    <div class="condition">{{ condition ? condition : "cloudy" }}</div>
  </div>
</template>
<script>
export default {
  name: "Temperature",
  props: {
    temperature: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dtemp: "80",
      dcondition: "cloudy",
    };
  },

  methods: {},
};
</script>
<style></style>
