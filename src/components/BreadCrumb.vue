<template>
  <div class="my-2" :id="this.id" :class="this.className">
    <ul class="breadcrumb-list  d-flex  justify-content-around">
      <li
        class="breadcrumb-item"
        v-for="(item, index) in crumb_list"
        v-bind:key="index"
        @click.prevent="handleClick(index)"
      >
        <a :href="'#' + item.url" class="anchor">
          {{ item.name }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  props: {
    crumb_list: {
      type: [Object, Array],
      required: true,
    },
    callback: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: false,
    },
    className: {
      type: String,
      required: false,
    },
  },
  methods: {
    handleClick(index) {
      this.$emit("toggleForecast", index);
      //alert(`Callback name ${this.callback} index: ${index}`);
      return index;
    },
  },
};
</script>

<style scoped></style>
