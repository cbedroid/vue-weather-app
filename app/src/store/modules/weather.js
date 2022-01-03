import axios from 'axios';
import Jquery from 'jquery';
import { City } from 'country-state-city';

const APIKey = process.env.VUE_APP_WEATHER_API_KEY;
const openWeatherUrl = 'https://api.openweathermap.org/data/2.5/onecall';

const state = {
  search: {},
  location: {
    city: '',
    state: '',
    country: 'US',
  },
  all_cities: [],
  current_city: {},
  current_weather: [],
  daily_weather: [],
};

// Getters
/* eslint no-shadow: ["error", { "allow": ["state"] }] */
const getters = {
  getCurrentWeather: (state) => state.current_weather,
  getDailyWeather: (state) => state.daily_weather,
  getCurrentCity: (state) => state.current_city,
  user_location: (state) => state.location,
  filtered_search: (state) => state.search,
  getCityData: (state) => state.all_cities,
};

// Actions
const actions = {
  findUserLocation({ commit, dispatch }) {
    Jquery.ajax({
      url: 'https://geolocation-db.com/jsonp',
      jsonpCallback: 'callback',
      dataType: 'jsonp',
      success(response) {
        commit('setUserLocation', response);
        dispatch('getCitiesFromCountry', response.country_code);
      },
    });
  },
  async fetchWeather({ commit }, { lat, lon }) {
    const response = await axios({
      url: openWeatherUrl,
      params: {
        lat: Math.floor(lat),
        lon: Math.floor(lon),
        exclude: 'minutely',
        units: 'imperial',
        appid: APIKey,
      },
    });
    console.log({ response });
    // TODO: Handle response errors
    commit('setCurrentWeather', response.data);
    commit('setDailyWeather', response.data);
  },

  setCity({ commit }, location) {
    commit('setCurrentCity', location);
  },
  getCitiesFromCountry({ commit }, country) {
    const cities = City.getCitiesOfCountry(country);
    commit('setAllCities', cities);
  },
};

// Mutations
/* eslint no-return-assign: ["error"] */
/* eslint-disable no-param-reassign */
const mutations = {
  setUserLocation: (state, location) => (state.location = location),
  setSearch: (state, search) => (state.search = search),
  setAllCities: (state, cities) => (state.all_cities = cities),
  setCurrentCity: (state, location) => (state.current_city = location),
  setCurrentWeather: (state, weather) =>
    (state.current_weather = weather.current),
  setDailyWeather: (state, weather) =>
    (state.daily_weather = weather.daily.slice(1)),
};
/* eslint-enable no-param-reassign */

export default {
  state,
  getters,
  actions,
  mutations,
};