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
          <div id="date">Sunday Nov 9, 2020</div>
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
          <div id="location">Virginia Beach, Virginia</div>
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

    setInput(placeholder = "City, State") {
      const search_input = document.getElementById("search_input");
      search_input.setAttribute("placeholder", placeholder);
      search_input.value = "";
      this.search = "";
    },

    validate_city_state(location) {
      let city = location[1];
      let state = location[2];
      console.log({ city }, { state });

      // Check if state has a value
      if (!state) {
        this.setInput("A state must be enter along with a city");
      } else {
        city = city.replace(/\W/gi, "");
        state = state.replace(/\W/gi, "");
        console.log("Cleaned city and state", { city }, { state });
      }

      // Check if state code is only two letters
      if (state.length > 2) {
        this.setInput("State code must be only two letter. EX: CA");
      }

      return { city: city, state: state };
    },
    getWeather(e) {
      if (e.key == "Enter") {
        let loc = this.search.match(/(\w*\s?)[\W]*(\w*)/i);
        let { city, state } = this.validate_city_state(loc);

        if (
          city === undefined ||
          city === "undefined" ||
          state === undefined ||
          state == "undefined"
        ) {
          return;
        }

        const unit = "imperial";
        const weather_url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${state},US&units=${unit}&appid=${this.api_key}`;
        console.log({ weather_url });

        fetch(weather_url)
          .then((resp) => resp.json())
          .then((data) => {
            console.log({ data });
            this.weather = data;
            this.state = state.toUpperCase();
            this.setBackgroundImage();
            this.setInput();
          })
          .catch((err) => {
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
