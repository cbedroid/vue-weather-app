<template>
  <div>
    <h1
      v-if="typeof title !== 'undefined'"
      class="header-title text-info font-weight-bold bg-secondary py-2 m-0"
    >
      {{ title }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    title: {
      type: String,
      required: false,
    },
  },
};
</script>

<style scoped>
.header-title {
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}
</style>
