<template>
  <div class="location-container text-left w-100">
    <div class="date-container">
      <h3 class="date">
        {{ current_date }}
      </h3>
    </div>
    <div class="city text-weight-600" :class="error ? 'error' : ''">
      {{ capitalized(city) || "Your City" }}
    </div>
    <div class="state" :class="error ? 'error' : ''">
      {{ state.toUpperCase() || "Your State" }}
    </div>
  </div>
</template>
<script>
export default {
  name: "Location",

  props: {
    city: {
      type: String,
      required: true,
    },
    state: {
      type: String,
      required: true,
    },
    date: {
      type: Object,
      required: true,
    },
    error: {
      type: Boolean,
      reuired: false,
    },
  },
  computed: {
    current_date() {
      let datetime = this.date["timenow"] || new Date().getTime();
      return this.convertDate(datetime);
    },
  },
  methods: {
    capitalized(word) {
      if (typeof word !== "string") return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    },
    convertDate(datetime) {
      if (datetime !== undefined) {
        let td = new Date(datetime);
        let months = [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        let days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        let day = days[td.getDay()];
        let date = td.getDate();
        let month = months[td.getMonth()];
        let year = td.getFullYear();
        return `${day}, ${month} ${date}, ${year}`;
      }
    },
  },
};
</script>
<style scoped>
.location-container {
  font-size: 3rem;
  font-weight: 600;
  text-shadow: 2px 2px 16px blue;
}
.error {
  color: red;
  text-shadow: 2px 2px 16px #000;
}
</style>
