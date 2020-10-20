<template>
  <div id="weather-week_main">
    <div id="wf_bc_main" :class="!isMobile ? 'hidden' : ''">
      <WeekBreadCrumb
        :callback="'toggleForecast'"
        @toggleForecast="displayForecast"
        :crumb_list="crumbList"
        :id="'wf_breadcrumb'"
        :className="'bg-dark d-block  text-light text-center font-weight-bold'"
      >
      </WeekBreadCrumb>
    </div>
    <div class="mt-3 container ">
      <ul class="weather-week-list p-0  row justify-content-center">
        <li
          class="forecast-item animate_slider font-weight-bold mx-1 p-0 col-12 col-sm-3 col-md-2 "
          :class="isMobile ? 'animate_slider' : 'grow_big'"
          v-for="(fc, index) in dailyforecast"
          v-bind:forecast="
            (forecast = currentForecast(fc, (hoverstate = isHovering)))
          "
          v-bind:key="index"
          v-show="
            !isMobile || (index === 0 && mobile_hide.length === 0)
              ? true
              : mobile_hide[index]
          "
          @mouseenter="getHoverState(forecast, index, true)"
          @mouseleave="getHoverState(forecast, index, false)"
        >
          <div
            :id="'wf-' + index"
            class="item-wrapper "
            :class="forecast['className']"
          >
            <div class="daytime text-primary ">
              <p class=" d-block px-4 w-100">
                {{ getDay(forecast.dt) }}
              </p>
              <div class="hidden">{{ isHovering(forecast) }}</div>
            </div>
            <div class="content">
              <b-img
                blank-color="#777"
                :src="forecast_icon(forecast)"
                alt="forecast icon"
              >
              </b-img>

              <div class="temp">
                <b-icon
                  icon="thermometer"
                  :variant="forecast['temp'] < 75 ? 'primary' : 'danger'"
                ></b-icon>
                {{ forecast["temp"] }} &deg;
              </div>
              <div class="condition">
                {{ forecast["weather"]["main"] }}
              </div>
            </div>
            <div
              class="description-wrapper justify-content-around my-1 mx-n1 w-100"
              :class="isMobile ? 'd-flex' : 'hidden'"
            >
              <b-icon
                icon="info-circle-fill"
                font-scale="1.5"
                :variant="isHovering(forecast) ? 'text-light' : 'text-dark'"
              >
              </b-icon>
              <p class="description">
                {{ forecast["weather"]["description"] }}
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import BreadCrumb from "./BreadCrumb";

export default {
  name: "WeeklyWeather",
  components: {
    WeekBreadCrumb: BreadCrumb,
  },

  props: {
    dailyforecast: {
      type: [Object, Array],
      required: true,
    },
  },
  data() {
    return {
      mobile_hide: [],
      mobile_size: 475,
    };
  },
  computed: {
    screenWidth() {
      /* Return device screen's width */
      return screen.width;
    },
    isMobile() {
      /* Check whether device is mobile or desktop */
      return this.screenWidth <= this.mobile_size;
    },
    crumbList() {
      /* Boolean Array queue that determines and handles
        which weekly weather forecast to displayed 
        **** MOBILE USE ONLY  --See BreadCrumb component***
      */
      let breadcrumb = [];
      this.dailyforecast.forEach((r, i) => {
        breadcrumb.push({
          name: this.getDay(r["day"]["dt"]),
          url: "wf-" + i,
        });
      });
      return breadcrumb;
    },
    isDayTime() {
      /* Return whether its daytime or night-time (in 24hr format)*/
      let sunrise = 5;
      let sunset = 18;
      let daytime = new Date().getHours();
      return sunrise <= daytime <= sunset;
    },
  },
  methods: {
    displayForecast(index) {
      /* Handles BreadCrumb click and shows an individual 
         weekly forecst for the week. (Mobile ONLY)
      */

      // Reset all forecast for breadcrumb
      this.mobile_hide = [];
      this.dailyforecast.forEach((obj, i) => {
        obj;
        i;
        this.mobile_hide.push(false);
      });

      // Hide all week forecast
      this.mobile_hide[index] = true;
      return this.mobile_hide[index];
    },
    currentForecast(forecast) {
      /* Returns day or night forecast.*/
      let fc = this.isHovering(forecast) ? forecast["day"] : forecast["night"];
      return fc;
    },
    getHoverState(forecast, index, hoverstate) {
      /* Change the hovering attribute on a forecast item
         Removes and sets the hovering state of each individualforecast
      */
      forecast["hovering"] = hoverstate; //          Apparently.. This is needed to update DOM ??
      //                                  \__(- -)
      //                                      | |
      this.dailyforecast[index]["hovering"] = hoverstate;
    },
    isHovering(forecast) {
      /* Hovering will reverse the current day time from night to day
       and vice versa
       */
      try {
        let hoverstate = forecast["hovering"];
        return hoverstate === true ? !this.isDayTime : this.isDayTime;
      } catch {
        return false;
      }
    },
    get_temp(temp) {
      /* Return the current weather's temperature */
      let time_of_day = this.isDayTime ? "day" : "night";
      return Math.round(temp[time_of_day]);
    },

    getDay(date) {
      /* Returns day of week */

      let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      let datetime = new Date(date * 1000).getDay();
      return days[datetime] || "N/A";
    },
    forecast_icon(forecast) {
      /* Returns image url for icon */
      return `http://openweathermap.org/img/wn/${forecast["icon"]}.png`;
    },
  },
};
</script>
<style>
.weather-week-list li {
  list-style: none;
  border: 1px solid #fff;
  box-shadow: 5px 2px 16px rgba(255, 255, 255, 0.4);
  transition: 0.25s ease-in-out;
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
.hidden {
  display: none;
}
.show {
  display: block;
}

.animate_slider {
  /* weekly forecast mobile layout animation */
  animation: animate_slider 1s ease-in-out;

  /* name duration timing-function delay iteration-count direction fill-mode play-state; */
}

#wf_breadcrumb ul {
  width: 100%;
  margin: auto;
  padding: 0;
}
#wf_breadcrumb ul li {
  position: relative;
  padding: 7px 2px;
}
#wf_breadcrumb ul li a {
  margin-top: 7px;
  list-style: none;
}
#wf_breadcrumb ul li:nth-child(1) a {
  color: green;
}
#wf_breadcrumb ul li:nth-child(2) a {
  color: red;
}
#wf_breadcrumb ul li:nth-child(3) a {
  color: blue;
}
#wf_breadcrumb ul li:nth-child(4) a {
  color: white;
}
#wf_breadcrumb ul li:nth-child(5) a {
  color: yellow;
}
#wf_breadcrumb ul li:nth-child(7) a {
  color: purple;
}
#wf_breadcrumb ul li::before {
  content: "";
  position: absolute;
  display: block;
  background: red;
  height: 2px;
  width: 90%;
}

@media screen and (max-width: 575px) {
  .weather-week-list li .content {
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .forecast-item {
    margin-bottom: 5px;
    border-radius: 7px;
  }
}
.grow_big:hover {
  /* weekly forecast desktop layout grow */
  transform: scale(1.25);
  z-index: 100;
}
@media screen and (min-width: 574px) {
  .forecast-item:hover {
    border: 1px solid #000;
    box-shadow: 4px 2px 6px #000;
  }
}
@keyframes animate_slider {
  0% {
    visibility: hidden;
    transform: rotateX(90deg) translateX(250%);
  }
  50% {
    visibility: show;
    transform: rotateX(70deg) translateX(0%);
  }

  75% {
    transform: rotateX(70deg) translateX(0%) scale(3);
  }
  100% {
    transform: rotateX(0deg) translateX(0%) scale(1);
    width: 100%;
  }
}
</style>
