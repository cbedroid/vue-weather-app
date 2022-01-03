<template>
  <div class="search-box">
    <form
      id="search-form"
      ref="searchForm"
      class="my-3 rounded-md w-full h-full relative"
      @submit.prevent="onSubmit"
    >
      <fieldset class="w-full">
        <div class="form-group">
          <label class="relative flex w-full">
            <span class="absolute inset-y-0 left-0 flex items-center pl-2">
              <svg
                viewBox="0 0 24 24"
                width="24"
                height="24"
                stroke="#333"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="css-i6dzq1"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <input
              id="searchbar"
              ref="searchbar"
              v-model="search"
              type="text"
              class="block text-gray-700 w-full rounded-md rounded-r-none placeholder:text-gray-200 placeholder:italic placeholder:text-gray-400 focus:bg-gray-50 pl-12"
              autocomplete="off"
              placeholder="Enter city, state"
              required
              @keydown="handleInput"
            />
            <input
              ref="searchSubmit"
              type="submit"
              class="bg-indigo-600 text-white px-6 text-lg font-semibold py-2 rounded-r-md"
              value="Go"
            />
          </label>
        </div>
        <div
          id="city-menu"
          ref="city_menu"
          class="w-1/2 lg:w-1/4 mt-1 bg-gray-400 h-full rounded-md"
        >
          <ul
            id="city-result"
            class="absolute bottom-100 left-0 w-1/2 lg:w-1/4 overflow-y-scroll bg-white rounded-md"
          ></ul>
        </div>
      </fieldset>
    </form>
  </div>
</template>

<script>
import $ from 'jquery';
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchForm',
  data() {
    return {
      search: '',
    };
  },
  computed: {
    ...mapGetters(['getCityData']),
  },

  methods: {
    ...mapActions(['fetchWeather', 'setCity']),
    handleInput({ target }) {
      const value = target.value.toLowerCase();
      const foundList = $('#city-result');
      const app = this;
      $(foundList).removeClass('border shadow-lg');
      $(foundList).html('');
      if (value.length > 4) {
        this.$refs.city_menu.classList.remove('hidden');
        $(foundList).addClass('border shadow-lg');

        const cityNames = $(this.getCityData).map(function () {
          return `${this.name},${this.stateCode}`;
        });

        for (let i = 0; i < cityNames.length; i += 1) {
          if (
            cityNames[i].toLowerCase().substr(0, value.length) ===
            value.toLowerCase().replace(/\s/g, '')
          ) {
            const li = document.createElement('li');
            li.innerHTML = cityNames[i];
            li.className = 'drawer-item';
            /* eslint-disable no-param-reassign */
            $(li).on('click', function () {
              target.value = $(this).text();
              app.search = $(this).text();
              app.onSubmit();
            });
            /* eslint-enable no-param-reassign */
            foundList.append(li);
          }
        }
        foundList.innerHTML = '';
      }
    },

    getCityCoords(search) {
      // TODO: Filter city and state to correct format
      const searchList = search.split(',');
      const cityInput = searchList.slice(0, -1).join(' ');
      const stateInput = searchList.slice(-1).join('');

      return this.getCityData
        .filter((c) => {
          return (
            c.name.toLowerCase() === cityInput.trim().toLowerCase() &&
            c.stateCode.toLowerCase() === stateInput.trim().toLowerCase()
          );
        })
        .map((f) => {
          this.setCity({ city: f.name, state: f.stateCode });
          return { lat: f.latitude, lon: f.longitude };
        });
    },

    onSubmit() {
      this.$refs.city_menu.classList.add('hidden');
      const coords = this.getCityCoords(this.search)[0];
      this.$refs.searchbar.blur();
      this.$refs.searchbar.value = '';

      if (coords) {
        this.fetchWeather(coords);
      } else {
        // handle invalid input city/state
        console.log('City not found');
      }
    },
  },
};
</script>

<style>
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
</style>
