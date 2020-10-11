<template>
  <div id="app" :class="bg_class">
    <main>
      <h1 class="title text-center">Weather App</h1>
      <!-- change box shadow accorning to forecast -->
      <div class="search-tray">
        <input
          id="search_input"
          type="text"
          v-model="search"
          @keypress="getWeather"
          placeholder="City, State"
        />
      </div>

      <!-- QUERIED WEATHER STATE-->
      <div class="weather-container" v-if="typeof weather.main !== 'undefined'">
        <!-- Location and date -->
        <div class="location-tray">
          <div id="location">
            {{ weather.name }}, {{ this.state }} {{ weather.sys.country }}
          </div>
          <div id="date">{{ createDate() }}</div>
        </div>
        <!-- Location and date -->
        <!--Temperature -->
        <div class="row justify-content-center">
          <div class="col-9">
            <div class="temperature-tray py-3">
              <div class="temp">
                <span>{{ Math.round(weather.main.temp) }}</span> °F
              </div>
              <div class="forecast">{{ weather.weather[0].main }}</div>
            </div>
          </div>
        </div>
        <!--Temperature -->
      </div>

      <!-- INIITAL WEATHER STATE -->
      <div class="weather-container" v-else>
        <!-- Location and date -->
        <div class="location-tray">
          <div id="location">Your City, Your State</div>
          <div id="date">Sunday Nov 9, 2020</div>
        </div>
        <!-- Location and date -->
        <!--Temperature -->
        <div class="row justify-content-center">
          <div class="col-6 offset-col-3">
            <div class="temperature-tray py-3">
              <div class="temp">70 °</div>
              <div class="forecast">Cloudy</div>
            </div>
          </div>
        </div>
        <!--Temperature -->
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "App",
  //mounted() {
  // load placesearch script for async searching for cities an state
  //   let external_script = document.createElement("script");
  //   external_script.setAttribute(
  //     "src",
  //     "https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.js"
  //   );

  //   // load css
  //   let external_css = document.createElement("link");
  //   external_css.setAttribute(
  //     "href",
  //     "https://api.mqcdn.com/sdk/place-search-js/v1.0.0/place-search.css"
  //   );
  //   document.head.appendChild(external_script);
  //   document.head.appendChild(external_css);
  // },
  data() {
    return {
      bg_class: "cloudy",
      title: "Weather App",
      search: "",
      location: "",
      weather: {},
      state: "",
      temp: "",
      api_key: process.env.VUE_APP_WEATHER_API_KEY,
      search_key: process.env.VUE_APP_MAPQUEST_API_KEY || "",
    };
  },
  methods: {
    setBackgroundImage() {
      /*
       Set the main background according to weather conditions
      */
      let bg_class;
      let classnames = {
        cloudy: "cloudy",
        sunny: "sunny",
        rain: "raining",
        thunder: "thundering",
        snow: "snowing",
      };

      if (this.weather !== undefined || this.weather !== "undefined") {
        for (const [key, value] of Object.entries(classnames)) {
          if (value.includes(this.weather.weather[0].main.toLowerCase())) {
            bg_class = key;
          }
        }
      }
      console.log({ bg_class });
      this.bg_class = bg_class || "cloudy";
    },

    resetSearch(placeholder = "City, State") {
      const search_input = document.getElementById("search_input");
      search_input.setAttribute("placeholder", placeholder);
      search_input.value = "";
      this.search = "";
    },

    validate_city_state() {
      //let loc = this.search.match(/(\w*\s?)[\W]*(\w*)/i);
      //let city = this.search.match(/(\w*\s*){0,2}\W*/i)[0]
      //let location = this.search.match(/([\w\s]*)\W*(\w*)/i)[0]
      let location = this.search
        .match(/(\w*)*[\W]*/gi)
        .filter((nonull) => nonull);

      let filtered_location =
        location
          .slice(0, -1)
          .join("")
          .replace(/\W/g, " ")
          .trim() +
        "," +
        location.slice(-1)[0].trim();

      // TODO: Add error for null filtered_locations
      let state = location.slice(-1)[0].trim();
      // Check if state has a value
      if (!state) {
        this.resetSearch("A state must be enter along with a city");
      } else {
        this.state = state.toUpperCase();
        console.log("Cleaned city and state", filtered_location);
      }

      // Check if state code is only two letters
      if (state.length > 2) {
        this.resetSearch("State code must be only two letter. EX: CA");
      }

      return filtered_location;
    },
    createDate() {
      let td = new Date();
      let months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      let day = days[td.getDay()];
      let date = td.getDate();
      let month = months[td.getMonth()];
      let year = td.getFullYear();
      return `${day} ${month} ${date} ${year}`;
    },
    getWeather(e) {
      if (e.key == "Enter") {
        let location = this.validate_city_state();

        const unit = "imperial";
        const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${location},US&units=${unit}&appid=${this.api_key}`;
        console.log({ weather_url });

        fetch(weather_url)
          .then((resp) => resp.json())
          .then((data) => {
            console.log({ data });
            this.weather = data;
            console.log("condition", this.weather.weather[0].main);
            this.setBackgroundImage();
            this.resetSearch();
          })
          .catch((err) => {
            this.resetSearch("Opps, that city was not found");
            console.log("Error", err);
          });
      } // if statement
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  padding: 0;
  margin: 0;
  background-size: cover;
  background-position: bottom;
  transition: 0.4s;
}
main {
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.25),
    rgba(0, 0, 0, 0.75)
  );
}

.rain {
  background-image: url("assets/images/raining.png");
}
.cloudy {
  background-image: url("assets/images/cloudy.png");
}
</style>
