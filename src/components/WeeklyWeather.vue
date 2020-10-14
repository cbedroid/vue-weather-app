<template>
  <div id="weather-week_main" class="mt-3 container ">
    <ul class="weather-week-list p-0  row justify-content-center">
      <li
        class="list-item mx-1 col-12 col-sm-3 col-md-2 "
        :class="isDayTime ? 'day-theme' : 'night-theme'"
        v-for="forecast in dailyforecast"
        v-bind:key="forecast.dt || 0"
        @mouseover="normalFalse"
        @mouseleave="normalTrue"
      >
        <div class="item-wrapper  w-100">
          <div class="daytime text-primary ">
            <p class=" d-block px-4 w-100">
              {{ getDay(forecast.dt) }}
            </p>
          </div>
          <div class="content">
            <b-img
              blank-color="#777"
              :src="forecast_icon(forecast.weather[0]['icon'])"
              alt="forecast icon"
            >
            </b-img>

            <div class="temp">
              <b-icon
                icon="thermometer"
                :variant="
                  get_temp(forecast['temp']) < 75 ? 'primary' : 'danger'
                "
              ></b-icon>
              {{ get_temp(forecast["temp"]) }} &deg;
            </div>
            <div class="condition">
              {{ forecast["weather"][0]["main"] }}
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "WeeklyWeather",
  components: {},

  props: {
    dailyforecast: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      normal: true,
    };
  },
  computed: {
    isDayTime() {
      // military time
      let sunrise = 6;
      let sunset = 18;
      let daytime = new Date().getTime();
      return sunrise < daytime > sunset ? this.normal : !this.normal;
    },
  },

  methods: {
    normalFalse() {
      this.normal = false;
    },
    normalTrue() {
      this.normal = true;
    },
    get_temp(temp) {
      let time_of_day = this.isDayTime ? "day" : "night";
      return Math.round(temp[time_of_day]);
    },
    getDay(date) {
      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let datetime = new Date(date * 1000).getDay();
      return days[datetime] || "N/A";
    },
    forecast_icon(icon = "01") {
      let icon_choice = this.isDayTime ? "d" : "n";
      icon = icon ? icon.replace(/[nd]/g, "") : "";
      return `http://openweathermap.org/img/wn/${icon}${icon_choice}.png`;
    },
  },
};
</script>
<style scoped>
.weather-week-list li {
  list-style: none;
  border: 1px solid #fff;
  box-shadow: 5px 2px 16px rgba(255, 255, 255, 0.4);
  transition: 0.25s ease-in-out;
}

.weather-week-list li:hover {
  border: 1px solid #000;
  box-shadow: 4px 2px 6px #000;
  transform: scale(1.25);
}
.daytime {
  background: #fff;
  width: 100%;
  padding: 0;
  margin: 0;
}

.day-theme {
  border: 1px solid #fff;
  box-shadow: 5px 2px 16px rgba(255, 255, 255, 0.4);
  background: #23239f;
}
.night-theme {
  border: 1px solid #000;
  background: transparent;
  background: #242323;
  box-shadow: 4px 2px 6px #000;
}
.night-theme .daytime {
  background: #1c1c1c;
  color: whitesmoke;
}
@media screen and (max-width: 575px) {
  .weather-week-list li .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}
</style>
