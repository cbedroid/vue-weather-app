// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
// let $ = window.$;

class WeatherService {
  constructor() {
    this.results = {
      success: true,
      data: {},
      error: {},
    };

    this.city = "";
    this.state = "";
    this.condition = {};
    this.temperature = {};
    this.time;
    this.unit = "imperial";
    this._location = "virginia beach,Va";
    this.api_key = process.env.VUE_APP_WEATHER_API_KEY;
  }

  get location() {
    return this._location;
  }

  set location(loc) {
    this._location = loc;
  }

  setResults(success = true, obj = {}) {
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

  resetResults() {
    this.results = {
      ...this.results,
      ...{ success: true, error: {}, data: {} },
    };
  }

  validateSearch() {
    // Clean and validate location

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

    /* - Check the length of city and state.
       - Throw error if length filter_location length is less than 2 
       - example: [city,state] --> filter_location  -->  filter_location.length ? 2 
    */
    // Check if state has a value
    let city = filtered_location.trim().split(",")[0];

    if (!state || !city) {
      this.setResults(false, {
        code: 1,
        msg: "A state must be enter along with a city",
      });
      console.log("city state Error", 1);
    } else {
      state = state.toUpperCase();
    }

    // Check if state code is only two letters
    if (state.length > 2) {
      console.log("state Error", 2);
      this.setResults(false, {
        code: 2,
        msg: "state can not be more than two characters",
      });
    }
    //this.resetSearch("State code must be only two letter. EX: CA");
    console.log(`\nCity: ${city}\nState: ${state}`);
    this.city = filtered_location.split(",")[0] || "N/A";
    this.state = filtered_location.split(",")[1] || "N/A";
    return filtered_location;
  }

  async fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location},US&units=${this.unit}&appid=${this.api_key}`;
    let resp = await fetch(url);
    return await resp.json();
  }

  /* Set attributes need for front end components */
  setData() {
    let { data } = this.results;
    try {
      if (this.results.success === true) {
        this.location = data ? { city: this.city, state: this.state } : {};
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
  /*
    Fetching data from openweather 
    @param {object} data - {location: "city,state"}
  */
  async getWeather(data) {
    console.clear();
    if (data !== undefined || data !== "undefined") {
      this.resetResults();
      this.location = data.location;
      // validate all fetch params are correct
      this.validateSearch();
      // if (this.results.success !== true) {
      //   return this.results;
      // }
      let await_results = await this.fetchWeather();
      try {
        if (await_results["cod"] == "404" || await_results["code"]) {
          this.setResults(false, {
            code: +await_results.cod,
            msg: await_results.message,
          });
        } else {
          this.setResults(true, await_results);
        }
      } catch {
        this.setResults(false, await_results);
      }
      this.setData();
      return await_results;
    }
  }
}

export default WeatherService;
