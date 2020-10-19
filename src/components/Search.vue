<template>
  <div class="input-container my-3 mx-4 p-2 ">
    <b-input-group
      size="small"
      id="search-wrapper"
      class="mx-auto bg-light text-center w-100"
    >
      <b-input-group-prepend class="icon-wrapper text-dark" is-text>
        <b-icon icon="search" id="search_icon" aria-hidden="true"></b-icon>
      </b-input-group-prepend>
      <b-form-input
        @keypress="setSearch"
        class="text-center text-dark"
        v-model="search"
        type="text"
        name="search_input"
        id="search_input"
        placeholder="City,State"
      />
    </b-input-group>
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
        let params = {
          location: this.search,
        };
        this.$emit("setWeather", this.search);
        this.search = "";
        return params;
      }
    },
  },
};
</script>

<style>
.input-container {
  background: transparent;
  border-radius: 7px;
}

#search-wrapper,
#search_icon,
.icon-wrapper {
  border-radius: 7px;
}
#search-wrapper {
  align-self: center;
  justify-self: center;
}

#search_icon {
  font-size: 1.2rem;
  text-align: center;
  vertical-align: middle;
}

#search_input {
  color: #000;
  text-align: center;
  font-size: 18px;
  font-style: italic;
  outline: none;
  appearance: none;
  border: none;
  border-radius: 5px;
  background: rgba(175, 175, 175, 0.35);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
}

#search_input:hover,
#search_input:focus {
  background: rgba(255, 255, 255, 1);
  background: #fff;
  color: #000;
}

#search_input:focus {
  font-weight: 530;
  font-style: normal;
}
</style>
