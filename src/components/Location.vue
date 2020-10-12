<template>
  <div class="location">
    <div class="city">{{ city }}</div>
    <div class="state">{{ state }}</div>
  </div>
</template>
<script>
export default {
  name: "Location",

  props: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
  },
};
</script>
<style scoped>
.location {
  display: flex;
  font-size: 18px;
  font-weight: 600;
}
.state::before {
  content: ", ";
}
.state {
  margin-left: 5px;
}
</style>
