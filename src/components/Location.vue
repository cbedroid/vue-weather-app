<template>
  <div class="location-container text-left w-100">
    <div class="city text-weight-600">{{ city }}</div>
    <div class="state">{{ state }}</div>
  </div>
  <!--div class="date">{{ convertDate() }}</div-->
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
  },
  methods: {
    convertDate() {
      let td = new Date();
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
      return `${day} ${month} ${date} ${year}`;
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
</style>
