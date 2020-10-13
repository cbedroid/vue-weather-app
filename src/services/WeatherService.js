// import jQuery from "jquery";
// window.$ = window.jQuery = jQuery;
// let $ = window.$;

class WeatherService {
  constructor() {
    this.results = {
      success: true,
      data: [{}],
      error: [
        {
          code: 0,
          msg: "",
        },
      ],
    };
    this.state = "weather";
    this.condition = {};
    this.unit = "imperial";
    this.count = 0;
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
    // set the success and errors for class
    this.results.success = success;
    if (success === true) {
      this.results.error = [];
      this.setData(obj);
    } else {
      this.results.error.push(obj);
    }
  }
  resetResults() {
    this.results = {
      ...this.results,
      ...{ success: true, error: [], data: [] },
    };
  }

  validateSearch() {
    // Clean and validate location

    console.log("location", this.location);
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
    if (!state) {
      this.setResults(false, {
        code: 1,
        msg: "A state must be enter along with a city",
      });
    } else {
      state = state.toUpperCase();
      console.log("Cleaned city and state", filtered_location);
    }

    // Check if state code is only two letters
    if (state.length > 2) {
      this.setResults(false, {
        code: 2,
        msg: "state can not be more than two characters",
      });
    }
    //this.resetSearch("State code must be only two letter. EX: CA");
    console.log(`state: ${state}`);
    return filtered_location;
  }

  async fetchWeather() {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${this.location},US&units=${this.unit}&appid=${this.api_key}`;
    let resp = await fetch(url);
    return await resp.json();
  }

  setData(data) {
    // set all weather data information
    this.result.data.push(data);
  }

  /*
    Fetching data from openweather 
    @param {object} data - {location: "city,state"}
  */
  async getWeather(data) {
    if (data !== undefined || data !== "undefined") {
      this.resetResults();
      this.location = data.location;

      // validate all fetch params are correct
      this.validateSearch();
      if (this.results.success !== true) {
        return this.results;
      }

      console.log("Validation passed");
      let await_resp = null;
      try {
        await_resp = await this.fetchWeather();
        this.setData(await_resp);
        console.log("results", this.results);
      } catch (e) {
        this.setResults(false, { code: 4, msg: "City not found" });
        console.log("results", this.results);
        return this.results;
      }
    }
  }
}

export default WeatherService;
