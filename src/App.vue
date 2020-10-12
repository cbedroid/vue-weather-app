<template>
  <main>
    <WeatherApp> </WeatherApp>
  </main>
</template>

<script>
import WeatherApp from "./components/WeatherApp";
import WeatherService from "./services/WeatherService.js";

export default {
  name: "App",
  components: {
    WeatherApp,
  },
  data() {
    return {
      weather: new WeatherService(),
    };
  },
};
</script>

<style scoped>
main {
  min-height: 100vh;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 16px;
  font-family: "montserrat", sans-serf;
  color: #fff;
  background: #1c1c1c;
  text-align: center;
  margin: auto;
}
</style>
