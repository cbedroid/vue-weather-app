<template>
  <div class="main-container my-2 mx-3 p-1">
    <div class="weather-app">
      <Search
        v-on:click.prevent
        :placeholder="this.placeholder"
        @setWeather="getWeather"
      />
      <div class="weather-details d-flex m-t-2 ml-3 px-2">
        <Location :city="city" :state="state"> </Location>
        <Forecast :temperature="temperature" :condition="condition"></Forecast>
      </div>
    </div>
    <h1>This {{ search }}</h1>
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
      search: "nothing",
      city: "Your City",
      state: "Your State",
      placeholder: "",
      temperature: 90,
      condition: "Cloudy",
    };
  },
  computed: {
    filterSearch() {
      return "non";
    },
  },
  methods: {
    getWeather(location) {
      alert("running");
      let params = { location: location };
      let weather = this.weather.getWeather(params);
      console.log("Real Weather", weather);
    },

    setForecast() {
      return this.temperature ? this.temperature : 80;
    },
    setCondition() {
      return this.condition ? this.condition : "cloudy";
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
