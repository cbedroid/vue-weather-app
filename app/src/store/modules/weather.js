import axios from 'axios';
import Jquery from 'jquery';
import { City } from "country-state-city";
const APIKey = process.env.VUE_APP_WEATHER_API_KEY;
const open_weather_url = "https://api.openweathermap.org/data/2.5/onecall";

const state = {
  search: {},
  location: {
    city: "",
    state: "",
    country: "US"
  },
  all_cities: [],
  current_city: {},
  weather: [],
};

// Getters
const getters = {
  getWeather: state => state.weather,
  getCurrentCity: state => state.current_city,
  user_location: state => state.location,
  filtered_search: state => state.search,
  getCityData: state => state.all_cities,
};

// Actions
const actions = {
  findUserLocation({ commit, dispatch }) {
    Jquery.ajax({
      url: "https://geolocation-db.com/jsonp",
      jsonpCallback: "callback",
      dataType: "jsonp",
      success: function (response) {
        commit('setUserLocation', response);
        dispatch("getCitiesFromCountry", response.country_code);
      }
    });
  },

  async fetchWeather({ commit }, { lat, lon }) {
    const response = await axios({
      url: open_weather_url,
      params: {
        lat: Math.floor(lat),
        lon: Math.floor(lon),
        exclude: "minutely",
        appid: APIKey
      }
    });
    console.log({ response });
    //TODO: Handle response errors
    commit("setWeather", response.data);

  },

  setCity({ commit }, location) {
    commit("setCurrentCity", location);
  },
  getCitiesFromCountry({ commit }, country) {
    const cities = City.getCitiesOfCountry(country);
    commit('setAllCities', cities);
  }

};

// Mutations
const mutations = {
  setUserLocation: (state, location) => (state.location = location),
  setWeather: (state, weather) => (state.weather = weather),
  setSearch: (state, search) => (state.search = search),
  setAllCities: (state, cities) => (state.all_cities = cities),
  setCurrentCity: (state, location) => (state.current_city = location)


};

export default {
  state,
  getters,
  actions,
  mutations,

};