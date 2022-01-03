<template>
  <div v-if="currentWeather" id="current-forecast">
    <div class="forecast-header">
      <h3 class="text-2xl font-bold">Current Forecast</h3>
      <div class="header-bottom text-center mt-2">
        <div class="datetime mt-2">
          <p class="font-normal text-gray-500">{{ getDateTime }}</p>
        </div>
      </div>
    </div>
    <div
      class="forecast grid grid-cols-1 md:grid-cols-2 place-content-center my-8 pt-8"
    >
      <div class="cw--left">
        <div class="forecast-detail text-black mx-auto w-56">
          <h1 class="text-2xl font-bold">{{ city }},{{ state }}</h1>
          <div class="condition flex place-items-center font-semibold">
            <img
              class="mx-auto object-fit"
              :src="getIconUrl"
              alt="forecast icon"
            />
          </div>
          <div class="temperature text-6xl font-bold">
            <span>{{ getTemperature }}</span>
            <sup>&#176;</sup>
            <span class="font-normal">F</span>
          </div>
        </div>
      </div>

      <div class="cw--right hidden md:block mt-3">
        <div
          class="box grid grid-cols-2 bg-gray-600 text-gray-50 rounded-md shadow-lg ring ring-gray-300 p-4 pt-8"
        >
          <!-- box-left -->
          <ul class="h-full flex flex-col place-content-center space-y-4">
            <li class="flex align-items-center space-x-2 text-xl">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="#00f"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
              </svg>
              <span>{{ currentWeather.humidity }}%</span>
            </li>
            <li class="flex align-items-center space-x-2 text-xl">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path
                  d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                ></path>
              </svg>
              <span class="font-bold mr-1">{{ getWindDirection }}</span>
              <span> {{ Math.floor(currentWeather.wind_speed) }} mph</span>
            </li>
          </ul>
          <!-- box-right -->

          <ul>
            <li
              class="flex align-items-center space-x-2 text-base font-semibold"
            >
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path
                  d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"
                ></path>
              </svg>
              <span class="text-gray-300">Feels like</span>
              <div class="wrapper">
                <span>{{ Math.floor(currentWeather.feels_like) }}</span>
                <sup>&#176;</sup>
                <span>F</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'ForeCast',
  data() {
    return {
      currentWeather: undefined,
      city: '',
      state: '',
    };
  },
  computed: {
    ...mapGetters(['getCurrentWeather', 'getCurrentCity']),
    getTemperature() {
      return Math.floor(this.currentWeather.temp);
    },

    getDateTime() {
      return this.$parent.convertDateTime(this.currentWeather.dt);
    },
    getWindDirection() {
      return this.$parent.calculateWindDirection(this.currentWeather.wind_deg);
    },
    getDescription() {
      return this.currentWeather.weather.description;
    },
    getIconUrl() {
      const { icon } = this.currentWeather.weather[0];
      return this.$parent.getWeatherIcon(icon);
    },
  },
  watch: {
    getCurrentWeather() {
      this.currentWeather = this.getCurrentWeather;
    },
    getCurrentCity() {
      this.city = this.getCurrentCity.city;
      this.state = this.getCurrentCity.state;
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
