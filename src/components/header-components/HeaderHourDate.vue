<template>
  <div class="p-d-flex p-p-3">
    <h2 class="hour-date">{{ currentTime() }} |</h2>
    <h2 class="hour-date">| {{ currentDate() }}</h2>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "HourDate",
  methods: {
    currentTime() {
      return moment().format("h:mm A");
    },
    currentDate() {
      return moment().format("MMMM Do YYYY");
    },
  },
};
</script>

<style scoped>
.hour-date {
  font-size: 2rem;
}
</style>
