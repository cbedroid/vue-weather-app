import stateImage from "./states";

/**
 * String formatter - "Foo {}".format('Bar')
 */
String.prototype.format = function() {
  var i = 0,
    args = arguments;
  return this.replace(/{}/g, function() {
    return typeof args[i] != "undefined" ? args[i++] : "";
  });
};

/**
 *  Main Weather service class
 */

class WeatherService {
  constructor() {
    this.results = {
      success: true,
      data: {},
      error: {},
    };

    this.api_key = process.env.VUE_APP_WEATHER_API_KEY;
    this._location = "new york,NY";
    this.unit = "imperial";

    this.city = "";
    this.state = "";
    this.condition = {};
    this.temperature = {};
    this.time;
    this.daily = [];
  }

  /**
   * Location (getter)
   */
  get location() {
    return this._location;
  }

  /**
   * Location (setter)
   * @param {String} loc - city and state
   */
  set location(loc) {
    this._location = loc;
  }

  /**
   * ObserveResults - monitor weather data changes and captured failures
   *
   * @param {Boolean} success - check for weather data failure
   * @param {Object} obj - weather data object - {data:{}} , msg:{}}
   */
  observeResults(success = true, obj = {}) {
    /* Sets the final results for Weather. */
    let results = {
      success: success,
      data: {},
      error: {},
    };

    results["success"] = success;
    if (success == true) {
      this.results["error"] = {};
      results["data"] = obj;
    } else {
      this.results["data"] = {};
      results["error"] = obj;
    }
    // update the final results
    this.results = { ...this.results, ...results };
  }

  /**
   * ResetResult - reset weather' data.
   */
  resetResults() {
    this.results = {
      ...this.results,
      ...{ success: true, error: {}, data: {} },
    };
  }

  /**
   *  ValidateSearch - validate weather search's city and state is valid.
   *    - Check the length of city and state.
   *    - Throw error if length filter_location length is less than 2
   *    - example: [city,state] --> filter_location  -->  filter_location.length ? 2
   */
  validateSearch() {
    let location = this.location
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

    let state = location.slice(-1)[0].trim();

    // Check if state has a value
    let city = filtered_location.trim().split(",")[0];

    if (!state || !city) {
      this.observeResults(false, {
        code: 1,
        msg: "A state must be enter along with a city",
      });
      console.log("city state Error", 1);
      return;
    } else {
      state = state.toUpperCase();
    }

    // Check if state has only two letters
    if (state.length > 2) {
      console.log("state Error", 2);
      this.observeResults(false, {
        code: 2,
        msg: "State can not be more than two characters",
      });
      return;
    }
    //this.resetSearch("State code must be only two letter. EX: CA");
    console.log(`\nCity: ${city}\tState: ${state}`);
    this.city = filtered_location.split(",")[0] || "N/A";
    this.state = filtered_location.split(",")[1] || "N/A";
    return filtered_location;
  }

  /**
   * FetchWeather - Calls openweather api and fetch weather data.
   *
   * @param {String} url - openweather api endpoint
   */
  async fetchWeather(url) {
    let resp = await fetch(url);
    return await resp.json();
  }

  /*
   * SetData - exports component's attributes to Vue
   */
  setData() {
    let { data } = this.results;
    try {
      if (this.results.success === true) {
        this.location = data
          ? {
              city: this.city,
              state: this.state,
              image: stateImage(this.state),
            }
          : {};
        this.condition = data.weather[0] || {};
        this.temperature = data.main || {};
        this.time = {
          timenow: data.dt,
          sunrise: data.sys.sunrise,
          sunset: data.sys.sunset,
        };
      }
    } catch {
      console.log("Error setData failed");
    }
  }

  /**
   * GetWeather - Collects data from fetchWeather. see fetchWeather
   *
   * @param {object} query - {location: "city,state"}
   */
  async getWeather(query) {
    let current_weather = await this.getCurrentWeather(query);
    if (current_weather) {
      let coord = current_weather["coord"];

      this.weeklyWeather(coord);
    }
    this.setData();
    return current_weather;
  }

  /**
   * GetCurrentWeather - Fetch the current for a city
   *
   * @param {object} query - {location: "city,state"}
   */
  async getCurrentWeather(query) {
    console.clear();
    if (query !== undefined || query !== "undefined") {
      this.resetResults();
      this.location = query.location;

      // Validate all search returns correct city and state
      if (!this.validateSearch()) {
        console.log("invalid Search");
        return this.results;
      }

      let url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location},US&units=${this.unit}&appid=${this.api_key}`;
      let await_results = await this.fetchWeather(url);
      try {
        if (await_results["cod"] == "404" || await_results["code"]) {
          this.observeResults(false, {
            code: +await_results.cod,
            msg: await_results.message,
          });
        } else {
          this.observeResults(true, await_results);
        }
      } catch {
        this.observeResults(false, await_results);
      }

      return await_results;
    }
  }

  /**
   * WeeklyWeather - Fetch four weather forecast for city.
   *
   * @params {Object} coord - latiude and longitude coordinates {lat:lat,lon:lon}
   */
  async weeklyWeather(coord) {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${coord.lat}&lon=${coord.lon}&units=${this.unit}&exclude=hourly,minutely&appid=${this.api_key}`;
    let forecast = await this.fetchWeather(url);
    let daily = forecast["daily"];

    // remove the first forecast if forecast exist
    this.daily = daily ? daily.slice(1) : daily;
    await this.setWeeklyForecast();
  }

  setWeeklyForecast() {
    if (this.daily) {
      this.daily = this.daily.map((data) => {
        let { dt, temp, weather } = data;
        weather = weather[0];
        let wicon = weather["icon"];
        let night = {
          updated: false, // to update DOM
          className: "night-theme",
          hovering: false,
          dt,
          weather,
          icon: wicon.replace(/[nd]/g, "n") || wicon,
          temp: Math.round(temp["night"]),
        };
        let day = {
          updated: false, // to update DOM
          className: "day-theme",
          hovering: false,
          dt,
          weather,
          icon: wicon.replace(/[nd]/g, "d") || wicon,
          temp: Math.round(temp["day"]),
        };
        return { day, night };
      });
    }
  }
}

export default WeatherService;
