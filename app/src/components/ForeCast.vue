<template>
  <div
    v-if="current"
    id="current-forecast"
    class="card mx-auto text-center font-bold w-96 mb-8 pt-14 relative"
  >
    <div
      class="
        card-title
        absolute
        top-10
        left-50
        flex
        place-items-center
        pb-10
        mt-2
        w-full
      "
    >
      <div
        class="
          img-wrapper
          mx-auto
          ring-inset ring-4 ring-white
          rounded-full
          drop-shadow-lg
        "
      >
        <img
          class="text-center h-20 p-0"
          :src="getIconUrl"
          alt="forecast icon"
        />
      </div>
    </div>
    <div
      class="
        card-body
        bg-gray-800 bg-opacity-60
        border-t-8 border-gray-800 border-opacity-5
        rounded-md
        py-6
        pt-20
        px-0
      "
    >
      <div
        class="
          temperature
          flex
          place-items-center place-content-center
          border-t-2 border-white
          py-6
        "
      >
        <div class="text-7xl">
          <span>{{ getTemperature }}</span>
          <sup>&#176;</sup>
          <span class="font-normal">F</span>
        </div>
      </div>
      <div class="feels-temp text-2xl">
        <span class="text-base mr-2">Feels like</span>
        <span>{{ toFahrenheit(current.feels_like) }}</span>
        <sup>&#176;</sup>
        <span class="font-normal">F</span>
      </div>
      <div class="description">{{ current.weather[0].description }}</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "ForeCast",
  data() {
    return {
      weather: "",
      current: "",
      daily: "",
    };
  },

  computed: {
    ...mapGetters(["getWeather"]),
    getTemperature() {
      if (this.current) {
        return this.toFahrenheit(this.current.temp);
      }
      return "";
    },
    getIconUrl() {
      const icon = this.current.weather[0]["icon"];
      return this.$parent.getWeatherIcon(icon);
    },
  },
  methods: {
    toFahrenheit(temp) {
      if (temp) {
        return Math.floor(((temp - 273.15) * 9) / 5 + 32);
      }
      return "/";
    },
  },
  watch: {
    getWeather() {
      const weather = this.getWeather;
      this.current = weather.current;
      this.daily = weather.daily;
    },
  },
};
</script>
<style scoped>
.forecast-icon {
  position: relative;
  overflow: hidden;
}
</style>