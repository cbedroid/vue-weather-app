<template>
  <div class="input-container my-3 mx p-2">
    <div
      id="search-wrapper"
      class="d-flex justify-content-center mx-auto align-content-center bg-light text-center w-50"
    >
      <div class="icon-wrapper p-1 text-center text-dark">
        <b-icon-search
          class="mx-2"
          id="search_icon"
          aria-hidden="true"
        ></b-icon-search>
      </div>
      <b-form-input
        @keypress="setSearch"
        class="text-center text-dark"
        v-model="search"
        type="text"
        name="search_input"
        id="search_input"
        placeholder="City,State"
      />
    </div>
    <h1>Hello {{ search }}</h1>
  </div>
</template>
<script>
export default {
  name: "Search",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    setSearch(e) {
      if (e.key == "Enter" && this.search.length !== 0) {
        //alert("running");
        let params = { location: this.search };
        //console.log({ params });
        this.$emit("setWeather", this.search);
        return params;
      }
    },

    // updateSearch(data) {
    //   this.search = data;
    // },
  },
};
</script>
<style>
.input-container {
  display: block;
  background: #000;
  margin: auto;
  text-align: center;
}

#search-wrapper {
  align-self: center;
  justify-self: center;
  border-radius: 7px;
}

#search_icon {
  font-size: 1.2rem;
  text-align: center;
  vertical-align: middle;
}

#search_input {
  text-align: center;
  font-size: 18px;
  font-style: italic;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.55);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
}

#search_input:hover,
#search_input:focus {
  background: rgba(255, 255, 255, 0.85);
}
</style>
