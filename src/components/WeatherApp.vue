<template>
  <div class="weather-app">
    <div class="hello">hello</div>
    <Input :placeholder="this.placeholder" />
    <Location :city="city" :state="state"> </Location>
    <Temperature></Temperature>
  </div>
</template>

<script>
import Location from "./Location";
import Input from "./Input";
import Temperature from "./Temperature";

export default {
  name: "WeatherApp",
  components: {
    Input,
    Location,
    Temperature,
  },
  data() {
    return {
      search: "nothing",
      city: "Virginia Beach",
      state: "Virginia",
      placeholder: "",
      temperture: 90,
      condition: "Cloudy",
    };
  },
  computed: {
    filterSearch() {
      return "ok";
    },
  },
  methods: {
    setTemperature() {
      return this.temperature ? this.temperature : 80;
    },
    setCondition() {
      return this.condition ? this.condition : "cloudy";
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
