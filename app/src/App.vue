<template>
  <div id="app" class="min-h-screen h-full">
    <section id="main">
      <weather-app />
    </section>
  </div>
</template>

<script>
import WeatherApp from './components/WeatherApp.vue';

export default {
  name: 'App',
  components: {
    WeatherApp,
  },
};
</script>

<style>
#app {
  font-family: 'Montserrat', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  color: #fff;
}
</style>
