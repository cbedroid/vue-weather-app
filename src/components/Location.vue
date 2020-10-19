<template>
  <div class="location-container mx-auto w-100 text-left pl-2 py-4">
    <div
      class="place text-left p-3"
      :style="{ backgroundImage: `url('${state_image}')` }"
    >
      <div
        class="city d-flex align-content-baseline text-weight-600"
        :class="error ? 'error' : ''"
      >
        <span class="label" :class="error ? 'hidden' : ''">
          {{ !error ? "City: " : "" }}
        </span>
        <div class="content ml-1">
          {{ location.city ? capitalized(location.city) : "Your City" }}
        </div>
      </div>
      <div
        class="state d-flex align-content-baseline"
        :class="error ? 'error' : ''"
      >
        <span class="label" :class="error ? 'hidden' : ''"
          >{{ !error ? "State: " : "" }}
        </span>
        <div class="content ml-1">
          {{
            location.state ? location.state.toUpperCase().trim() : "Your State"
          }}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Location",

  props: {
    location: {
      type: [Object, String],
      required: true,
    },
    error: {
      type: Boolean,
      reuired: false,
    },
  },
  computed: {
    state_image() {
      let image = this.location.image || "";
      return image;
    },
  },
  methods: {
    capitalized(word) {
      if (typeof word !== "string") return word;
      return word
        .split(" ")
        .map((f) => f[0].toUpperCase() + f.slice(1))
        .join(" ");
    },
  },
};
</script>
<style scoped>
.location-container {
  font-size: 1.5rem;
  font-weight: 600;
  text-shadow: 2px 2px 16px blue;
}
.location-container .place {
  display: block;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.label {
  color: #fff;
  text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  font-size: 1.5rem;
  white-space: pre;
}

.hidden {
  display: none;
}

.city.error {
  color: red;
  font-size: 1.5rem;
  text-shadow: 2px 2px 16px #000;
}

.state.error {
  color: #fff;
  font-size: 1.25rem;
  text-align: left;
  padding: 15px 20px;
  border-left: 2px solid red;
  width: 75%;
  text-shadow: 2px 2px 8px #000;
  background: rgba(0, 0, 0, 0.7);
  line-height: 1.4rem;
  border-radius: 5px;
}
.state.error .label {
  background: blue;
}
</style>
