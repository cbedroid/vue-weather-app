<template>
  <div class="main-container my-2">
    <div class="weather-app p-2">
      <Search v-on:click.prevent @setWeather="getWeather" />
      <div class="border-top w-100 d-block my-3"></div>
      <div class="weather-details mt-2  px-2 row ">
        <div class="col-sm-5 col-md-6 col-lg-6  ">
          <Location :location="this.weather.location || {}" :error="error">
          </Location>
        </div>
        <div class="col-sm-7 col-md-6 col-lg-6   ">
          <Forecast
            :temperature="this.weather.temperature"
            :condition="this.weather.condition"
          >
          </Forecast>
        </div>
      </div>
      <div class="breadcrumb-wrapper"></div>
      <WeeklyWeather :dailyforecast="this.weather.daily"> </WeeklyWeather>
    </div>
  </div>
</template>

<script>
import Location from "./Location";
import Search from "./Search";
import Forecast from "./Forecast";
import WeeklyWeather from "./WeeklyWeather";

export default {
  name: "WeatherApp",
  components: {
    Search,
    Location,
    Forecast,
    WeeklyWeather,
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
    convertDate(datetime) {
      if (datetime !== undefined) {
        let td = new Date(datetime);
        let months = [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "June",
          "July",
          "Aug",
          "Sept",
          "Oct",
          "Nov",
          "Dec",
        ];
        let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        let day = days[td.getDay()];
        let date = td.getDate();
        let month = months[td.getMonth()];
        let year = td.getFullYear();
        return `${day}, ${month} ${date}, ${year}`;
      }
    },
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
      this.error = true;
      this.weather["location"] = {};
      this.weather.location["city"] = "Error:";
      this.weather.location["state"] = this.weather.results.error.msg;
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
  background: transparent;
}
.weather-details {
  background-size: cover;
  background-position: center;
  transition: 0.4s;
}
</style>
