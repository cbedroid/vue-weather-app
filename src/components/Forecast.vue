<template>
  <div class="forecast-container w-50 text-left  px-1">
    <div class="forecast-icon-wrapper">
      <b-img blank-color="#777" :src="forecast_icon" alt="forecast icon">
      </b-img>
    </div>
    <div class="temp">
      <span class="label">Temp:</span>
      <span class="content"
        >{{ current_temperature || "unknown" }}
        {{ current_temperature ? "&deg;" : "" }}
      </span>
    </div>
    <div class="condition">
      <span class="label ">condition: </span>
      <span class="content">{{ current_condition || "unknown" }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "Forecast",
  props: {
    temperature: {
      type: Object,
      required: true,
    },
    condition: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      dtemp: "80",
    };
  },
  computed: {
    current_temperature() {
      let temp = this.temperature
        ? Math.round(this.temperature.temp)
        : "unknown";
      return temp;
    },
    current_condition() {
      let condition = this.condition ? this.condition.main : "unknown";
      return condition;
    },
    forecast_icon() {
      let icon = "";
      try {
        icon = this.condition["icon"] || "01d";
        console.log("Icon", icon);
      } catch {
        icon = "01d";
      }
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
  },
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
  //font-size: 0.85rem;
  text-shadow: 2px 2px 30px blue;
}
</style>
