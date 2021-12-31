<template>
  <div
    id="main-weather"
    class="min-h-screen min-w-screen pt-10"
    v-bind:style="{
      'background-image':
        'url(' + require('../assets/images/' + setBackgroundImage) + ')',
    }"
  >
    <div class="container mx-auto">
      <div
        class="
          card
          border border-gray-100
          bg-white bg-opacity-50
          shadow
          content
          p-12
          min-h-screen
        "
      >
        <div class="card-header">
          <CardHeader
            :city="getCurrentCity.city"
            :state="getCurrentCity.state"
          />
        </div>
        <div class="card-body mb-12">
          <div class="content-top">
            <form
              id="search-form"
              class="flex flex-cols rounded-md w-full h-full relative"
              @submit.prevent="onSubmit"
            >
              <fieldset class="w-full">
                <div class="form-group relative flex w-full">
                  <input
                    @keydown="handleInput"
                    ref="searchbar"
                    id="searchbar"
                    type="text"
                    class="text-gray-800 w-full rounded-md rounded-r-none"
                    v-model="search"
                    autocomplete="off"
                    placeholder="Enter city, state"
                    required
                  />
                  <input
                    type="submit"
                    class="
                      bg-indigo-600
                      text-white
                      px-6
                      text-lg
                      font-semibold
                      py-2
                      rounded-r-md
                    "
                    value="Go"
                  />
                </div>
                <div
                  id="city-menu"
                  ref="city_menu"
                  class="drawer w-1/2 lg:w-1/4 mt-1 bg-gray-50 rounded-md"
                >
                  <ul
                    id="city-result"
                    class="
                      absolute
                      bottom-100
                      left-0
                      w-1/2
                      lg:w-1/4
                      max-h-96
                      overflow-y-scroll
                      bg-white
                      rounded-md
                    "
                  ></ul>
                </div>
              </fieldset>
            </form>
          </div>
          <div class="content-middle my-5">
            <ForeCast />
          </div>
          <div class="content-bottom">
            <div
              class="p-4 space-x-4 carousel carousel-center bg-neutral w-full"
            >
              <div v-for="daily in this.getWeather.daily" :key="daily.dt">
                <div class="carousel-item">
                  <DailyWeather :weather="daily" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CardHeader from "./CardHeader";
import ForeCast from "./ForeCast";
import DailyWeather from "./DailyWeather";
import { mapGetters, mapActions } from "vuex";
import moment from "moment";
import $ from "jquery";
import _ from "lodash";

export default {
  name: "WeatherApp",
  components: {
    CardHeader,
    ForeCast,
    DailyWeather,
  },
  data() {
    return {
      country: "US",
      search: "",
    };
  },
  computed: {
    ...mapGetters([
      "user_location",
      "getCityData",
      "getWeather",
      "getCurrentCity",
    ]),
    setBackgroundImage() {
      let bgi;
      try {
        const weather = (
          this.getWeather.current.weather[0]["main"] || "clear"
        ).toLowerCase();

        const image_map = {
          ash: "ash.png",
          clear: weather.dt < weather.sunset ? "clear.png" : "clear_night.png",
          clouds:
            weather.dt < weather.sunset ? "clouds.png" : "clouds_night.png",
          drizzle: "drizzle.png",
          snow: weather.dt < weather.sunset ? "snowy.png" : "snowy_night.png",
          mist: "drizzle.png",
          night: "night.png",
          haze: "haze.png",
          dust: "dust.png",
          fog: "fog.png",
          rain: "rain.png",
          sand: "sand.png",
          smoke: "smoke.png",
          squall: "squall.png",
          thunderstorm: "thunderstorm.png",
          tornado: "tornado.png",
        };

        bgi = image_map[weather];
        return bgi;
      } catch (e) {
        return "sunny.png";
      }
    },
  },
  methods: {
    ...mapActions([
      "findUserLocation",
      "fetchWeather",
      "getCitiesFromCountry",
      "setCity",
    ]),
    handleInput({ target }) {
      const value = target.value.toLowerCase();
      const found_list = $("#city-result");
      $(found_list).removeClass("border shadow-lg");
      $(found_list).html("");
      if (value.length > 4) {
        this.$refs.city_menu.classList.remove("hidden");
        $(found_list).addClass("border shadow-lg");
        console.log("City Names", this.getCityData);
        const city_names = $(this.getCityData).map(function () {
          return `${this.name},${this.stateCode}`;
        });

        for (let i = 0; i < city_names.length; i++) {
          if (
            city_names[i].toLowerCase().substr(0, value.length) ==
            value.toLowerCase().replace(/\s/g, "")
          ) {
            const li = document.createElement("li");
            li.innerHTML = city_names[i];
            li.className = "drawer-item";
            $(li).on("click", function () {
              target.value = $(this).text();
              // $('#search-form').submit();
            });
            found_list.append(li);
          }
        }
        found_list.innerHTML = "";
      }
    },

    getCityCoords(search) {
      //TODO: Filter city and state to correct format
      const [city_input, state_input] = search.split(",");
      console.log("Getting Coors for", city_input, state_input);
      let city = this.getCityData.filter((c) => {
        if (
          c.name.toLowerCase() == city_input.replace(/\s/g, "") &&
          c.stateCode.toLowerCase() == state_input.replace(/\s/g, "-")
        ) {
          this.setCity({ city: c.name, state: c.stateCode });
          return c;
        }
      });
      if (city.length === 0) return;
      return { lat: city[0]["latitude"], lon: city[0]["longitude"] };
      // return { city: search[0], state: search[1] }
    },

    onSubmit() {
      this.$refs.searchbar.value = "";
      this.$refs.searchbar.blur();
      this.$refs.city_menu.classList.add("hidden");
      const coords = this.getCityCoords(this.search);

      if (coords) {
        this.fetchWeather(coords);
      } else {
        // handle invalid input city/state
        console.log("City not found");
      }
    },
    convertDateTime(dt) {
      return moment(dt * 1000).format("MMMM Do YYYY, h:mm:ss a");
    },
    getWeatherIcon(icon) {
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
  },
  created() {
    console.clear();
    // TODO: Get User Location
    this.findUserLocation();
    _.debounce(() => {
      const city = this.user_location.city;
      const state = this.user_location.state;
      this.setCity({ city: city, state: state });
      const user_coords = {
        lat: Math.floor(this.user_location.latitude),
        lon: Math.floor(this.user_location.longitude),
      };
      this.fetchWeather(user_coords);
    }, 1000)();
  },
};
</script>

<style >
.hidden {
  display: none;
}
ul {
  list-style: none;
  padding: 0;
}
li {
  cursor: pointer;
}
.drawer-item {
  background: #fff;
  color: #3c3c3c;
  padding: 6px;
  transition: all 0.3s;
}
.drawer-item:hover {
  background: #3c3c3c;
  color: #fff;
}
#city-menu #city-menu::-webkit-scrollbar {
  width: 3px;
}
#city-menu::-webkit-scrollbar-track {
  background: #f1f1f1;
}
#city-menu::-webkit-scrollbar-thumb {
  background: #888;
}
#city-menu::-webkit-scrollbar-thumb:hover {
  background: #555;
}
#main-weather {
  display: block;
  background-color: gray;
  background-position: 0 0;
  background-size: cover;
  min-width: 100vw;
  min-height: 100vh;
}
</style>
