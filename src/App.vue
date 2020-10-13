<template>
  <div id="main_app" :class="bg_class" class="text-center p-5">
    <div class="container">
      <main class="pt-3 border-success my-3">
        <h1 class="text-primary font-weight-bold">
          Weather App
        </h1>
        <WeatherApp :weather="weather"></WeatherApp>
      </main>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import WeatherApp from "./components/WeatherApp";
import WeatherService from "./services/WeatherService.js";

export default {
  name: "App",
  components: {
    WeatherApp,
  },
  computed: {},
  data() {
    return {
      bg_class: "none",
      weather: new WeatherService(),
      tester: "",
    };
  },
};
</script>

<style scoped>
#main_app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: "montserrat", sans-serf;
  font-size: 16px;
  transition: 0.4s;
  color: #fff;
  background: #1c1c1c;
  min-height: 100vh;
  /* Add background image here */
  //background-image: url("./assets/images/cloudy.png");
}
main {
  display: block;
  min-height: 80vh;
  height: 100%;
  overflow: hidden;
  background: #242323;
  border-radius: 7px;
  box-shadow: 0px 0px 16px rgba(255, 255, 255, 0.5);
  opacity: 0.95;
}
</style>
