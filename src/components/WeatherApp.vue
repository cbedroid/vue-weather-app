<template>
  <div class="main-container my-2 mx-3 p-1">
    <div class="weather-app">
      <Search v-on:click.prevent @setWeather="getWeather" />
      <div class="weather-details d-flex m-t-2 ml-3 px-2">
        <Location
          :date="this.weather.time || {}"
          :city="this.weather.city"
          :state="this.weather.state"
          :error="error"
        >
        </Location>
        <Forecast
          :temperature="this.weather.temperature"
          :condition="this.weather.condition"
        >
        </Forecast>
      </div>
    </div>
  </div>
</template>

<script>
import Location from "./Location";
import Search from "./Search";
import Forecast from "./Forecast";

export default {
  name: "WeatherApp",
  components: {
    Search,
    Location,
    Forecast,
  },

  props: {
    weather: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      error: false,
    };
  },
  computed: {
    getTime() {
      return (
        this.weather.time || {
          timenow: new Date().getTime(),
          sunrise: null,
          sunset: null,
        }
      );
    },
  },
  methods: {
    getWeather(location) {
      this.error = false;
      let params = { location: location };
      let GW = this.weather.getWeather(params);
      let data = this.weather;
      GW.then((resp) => {
        if (data.data == false || resp["cod"] !== 200) {
          return this.setResultFailed();
        }
        this.search = this.weather.city;
      });
    },
    setResultFailed() {
      /* Invalid City or state, Remove populated data and display error message to user */
      this.weather["city"] = "Error";
      this.weather["state"] = this.weather.results.error.msg;
      this.weather.condition = {};
      this.weather.temperature = {};
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main-container {
  display: block;
  background: #000;
  margin: 0 auto;
  text-align: center;
  background: inherit;
}
.weather-details {
  background-size: cover;
  background-position: center;
  transition: 0.4s;
  //background: whitesmoke;
  //background-image: url("../assets/images/raining.png");
}
</style>
