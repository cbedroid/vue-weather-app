<template>
  <div class="forecast-main w-100 mx-auto">
    <div class="date-container">
      <h3 class="date">
        {{ current_date }}
      </h3>
    </div>
    <div class="forecast-container text-left  ">
      <div class="forecast-condition  ">
        <div class="forecast-icon-wrapper">
          <b-img blank-color="#777" :src="forecast_icon" alt="forecast icon">
          </b-img>
        </div>
        <div class="temp mb-2">
          <span class="label">
            <b-icon
              icon="thermometer-half"
              class="mr-4"
              scale="1.8"
              :variant="current_temperature < 75 ? 'primary' : 'danger'"
            >
            </b-icon>
          </span>
          <span class="content"
            >{{ current_temperature || "" }}
            {{ current_temperature ? "&deg;" : "" }}
          </span>
        </div>
        <div class="condition mb-2">
          <span class="label "></span>
          <b-icon icon="cloud-fill" scale="1.8" class="mr-3" shift-h="-7">
          </b-icon>
          <span class="content">{{ current_condition || "" }}</span>
        </div>
      </div>
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
    current_date() {
      let datetime = new Date().getTime();
      return this.$parent.convertDate(datetime);
    },
    current_temperature() {
      let temp = this.temperature ? Math.round(this.temperature.temp) : "";
      return temp;
    },
    current_condition() {
      let condition = this.condition ? this.condition.main : "";
      return condition;
    },
    current_description() {
      let desc = this.condition ? this.condition.decsciption : "";
      return desc;
    },
    forecast_icon() {
      let icon = "";
      try {
        icon = this.condition["icon"] || "01d";
      } catch {
        icon = "01d";
      }
      return `http://openweathermap.org/img/wn/${icon}@2x.png`;
    },
  },
  methods: {},
};
</script>

<style>
.forecast-main .date {
  font-weight: 550;
  font-size: 1.2em;
  text-shadow: none;
}
.forecast-container {
  font-size: 1.25rem;
  font-weight: 600;
}

.forecast-main .forecast-condition {
  display: flex;
  text-align: center;
  justify-content: space-between;
  align-items: center;
  margin: 3px 0;
  padding: 5px;
}
.forecast-container .label {
  text-align: left;
  font-size: 1rem;
  color: #fff;
  text-shadow: 3px 2px 2px rgba(0, 0, 0, 0.5);
  margin-right: 10px;
}
.forecast-container .content {
  //font-size: 0.85rem;
  text-shadow: 2px 2px 30px blue;
}
.forecast-container .description .content {
  font-size: 0.9rem;
  text-align: left;
  text-shadow: none;
  text-overflow: break-word;
}

@media screen and (max-width: 476px) {
  .forecast-main {
    margin-top: 15px;
    padding: 0 15px;
  }
}
@media screen and (max-width: 475px) {
  .forecast-main .forecast-condition .content {
    display: block;
    margin-top: 3px;
    vertical-align: middle;
    padding-top: 5px;
  }
}
</style>
