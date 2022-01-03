<template>
  <div
    id="daily-weather"
    class="flex flex-col md:flex-row place-content-center md:space-x-3 lg:space-x-6 overflow-x-auto divide-y md:divide-y-0 md:divide-x divide-gray-800 bg-gray-900 rounded-md p-6"
  >
    <div v-for="weather in getDailyWeather || []" :key="weather">
      <ul
        class="daily text-gray-50 bg-gray-700 bg-opacity-80 select-none rounded-lg mt-2 px-6 w-full"
      >
        <li
          class="flex md:flex-col place-items-center place-content-between align-items-center p-2"
        >
          <div class="date font-bold">{{ getDate(weather.dt) }}</div>
          <div class="forecast">
            <img
              class="object-fit w-16 h-16"
              :src="getIconUrl(weather.weather[0].icon)"
              alt="weather icon"
            />
            <p>{{ weather.weather[0]['main'] }}</p>
          </div>
          <div
            class="temp-hilo flex place-items-center place-content-center text-gray-200 mt-2"
          >
            <p class="font-bold text-md">
              <span>{{ Math.floor(weather.temp.max) }}</span>
              <sup>&#176;</sup>
            </p>
            <div class="spacer mx-1">&#47;</div>
            <p class="text-gray-400">
              <span> {{ Math.floor(weather.temp.min) }} </span>
              <sup>&#176;</sup>
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  name: 'DailyWeather',
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(['getDailyWeather']),
  },
  methods: {
    getDate(dt) {
      return moment(dt * 1000).format('ddd');
    },

    getIconUrl(icon) {
      return this.$parent.getWeatherIcon(icon);
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
