<template>
  <div class="forecast-container w-50 text-left px-2">
    <div class="forecast-icon-wrapper">
      <b-img blank-color="#777" :src="forecast_icon" alt="forecast icon">
      </b-img>
    </div>
    <div class="temp">
      <span class="label">Temp:</span>
      <span class="content">{{ temperature ? temperature : 80 }} &deg;</span>
    </div>
    <div class="condition">
      <span class="label ">condition: </span>
      <span class="content">{{ condition ? condition : "cloudy" }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forecast",
  props: {
    temperature: {
      type: Number,
      required: true,
    },
    condition: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      dtemp: "80",
      dcondition: "cloudy",
      icon: "01d",
    };
  },
  computed: {
    forecast_icon() {
      return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
    },
  },
  methods: {},
};
</script>

<style>
.forecast-container {
  font-size: 1.25rem;
  font-weight: 600;
}

.forecast-container .label {
  font-size: 1rem;
  color: #5d5d5d;
  margin-right: 10px;
}
.forecast-container .content {
  text-shadow: 2px 2px 30px blue;
}
</style>
