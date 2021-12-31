<template>
  <div class="header">
    <div class="flex place-content-between align-item-center">
      <svg
        viewBox="0 0 24 24"
        width="36"
        height="36"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <line x1="21" y1="10" x2="3" y2="10"></line>
        <line x1="21" y1="6" x2="3" y2="6"></line>
        <line x1="21" y1="14" x2="3" y2="14"></line>
        <line x1="21" y1="18" x2="3" y2="18"></line>
      </svg>
      <div class="header-center text-center">
        <h1 class="text-3xl font-bold">{{ city }},{{ state }}</h1>
        <div class="datetime mt-2">
          <p class="font-normal">{{ current_datetime }}</p>
        </div>
      </div>
      <svg
        viewBox="0 0 24 24"
        width="36"
        height="36"
        stroke="currentColor"
        stroke-width="2"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="css-i6dzq1"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "CardHeader",
  props: {
    city: String,
    state: String,
  },
  computed: {
    current_datetime() {
      return moment().format("ddd, MMM DD,YYYY h:mm a ");
    },
  },
};
</script>
