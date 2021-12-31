<template>
  <div class="daily bg-green-400 rounded-md mt-3 px-6">
    <div class="flex place-items-center place-content-between">
      <div class="date">{{ getDate }}</div>
      <div class="forecast">
        <img class="block" :src="getIconUrl" alt="weather icon" />
        <p>{{ weather.weather[0]["description"] }}</p>
      </div>
      <div class="temp-hi-lo flex place-items-center">
        <span>{{ toFahrenheit(weather.temp.max) }}</span>
        <span class="divider">&#47;</span>
        <span>{{ toFahrenheit(weather.temp.min) }}</span>
      </div>
    </div>
  </div>
</template>
<script>
import moment from "moment";

export default {
  name: "DailyWeather",
  props: {
    weather: Object,
  },
  computed: {
    getDate() {
      return moment(this.weather.dt * 1000).format("dddd ");
    },
    getTemperature() {
      return this.toFahrenheit(this.weather.temp);
    },
    getIconUrl() {
      const icon = this.weather.weather[0]["icon"];
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
};
</script>
<style scoped>
.forecast-icon {
  position: relative;
  overflow: hidden;
}
</style>