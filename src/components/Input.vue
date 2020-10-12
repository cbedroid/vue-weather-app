<template>
  <div class="input-tray">
    <div id="main_input">
      <input
        v_model="search"
        @keypress="getWeather"
        type="text"
        name="location_search"
        id="location_search"
        :placeholder="setPlaceholder"
      />{{ search }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Input",
  props: {
    search: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dplaceholder: "City,State",
    };
  },
  computed: {
    setPlaceholder() {
      return this.placeholder ? this.placeholder : this.dplaceholder;
    },
  },
  methods: {
    getWeather(e) {
      if (e.key == "Enter") {
        alert("Key Pressed");
      }
    },
  },
};
</script>

<style></style>
