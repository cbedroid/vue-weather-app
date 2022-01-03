<template>
  <div
    id="main-weather"
    class="min-h-screen min-w-screen pt-10"
    :style="{
      'background-image':
        'url(' + require('../assets/images/' + setBackgroundImage) + ')',
    }"
  >
    <div class="md:container mx-auto p-1 lg:p-6">
      <div
        class="card bg-gray-100 text-gray-900 border border-gray-50 border-opacity-25 shadow-lg min-h-screen p-4 md:px-12"
      >
        <div class="card-top">
          <search-form />
        </div>
        <div class="card-body p-0 mb:p-12">
          <div class="content- middle">
            <fore-cast current-weather="getCurrentWeather" />
          </div>
          <div class="content-bottom">
            <daily-weather />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex';
import moment from 'moment';
import _ from 'lodash';
import SearchForm from './SearchForm';
import DailyWeather from './DailyWeather';
import ForeCast from './ForeCast';

export default {
  name: 'WeatherApp',
  components: {
    SearchForm,
    ForeCast,
    DailyWeather,
  },
  data() {
    return {
      country: 'US',
    };
  },

  computed: {
    ...mapGetters(['user_location', 'getCurrentWeather']),
    setBackgroundImage() {
      try {
        const weather = (
          this.getCurrentWeather.weather[0].main || 'clear'
        ).toLowerCase();

        const imageMap = {
          ash: 'ash.png',
          clear: weather.dt < weather.sunset ? 'clear.png' : 'clear_night.png',
          clouds:
            weather.dt < weather.sunset ? 'clouds.png' : 'clouds_night.png',
          drizzle: 'drizzle.png',
          snow: weather.dt < weather.sunset ? 'snowy.png' : 'snowy_night.png',
          mist: 'drizzle.png',
          night: 'night.png',
          haze: 'haze.png',
          dust: 'dust.png',
          fog: 'fog.png',
          rain: 'rain.png',
          sand: 'sand.png',
          smoke: 'smoke.png',
          squall: 'squall.png',
          thunderstorm: 'thunderstorm.png',
          tornado: 'tornado.png',
        };
        return imageMap[weather];
      } catch (e) {
        return 'sunny.png';
      }
    },
  },
  created() {
    // TODO: Get User Location
    this.findUserLocation();
    _.debounce(() => {
      const { city } = this.user_location;
      const { state } = this.user_location;
      this.setCity({ city, state });
      const userCoords = {
        lat: Math.floor(this.user_location.latitude),
        lon: Math.floor(this.user_location.longitude),
      };
      this.fetchWeather(userCoords);
    }, 1000)();
  },
  methods: {
    ...mapActions(['findUserLocation', 'fetchWeather', 'setCity']),
    convertDateTime(dt) {
      return moment(dt * 1000).format('MMM Do, YYYY, h:mm a');
    },
    getWeatherIcon(icon) {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },

    calculateWindDirection(degrees) {
      const compass = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
      const filteredDegrees = Math.round((degrees * 8) / 360);
      // Ensure it's within 0-7
      const direction = (filteredDegrees + 8) % 8;
      return compass[direction];
    },
  },
};
</script>

<style>
#main-weather {
  display: block;
  background-color: #1c1c1c;
  min-height: 100vh;
  min-width: 100vw;
  background-position: center;
  background-repeat: no-repeat no-repeat;
  background-size: cover;
  border-radius: 20px;
  padding: 20px;
  width: 100%;
  height: 100%;
}
</style>
