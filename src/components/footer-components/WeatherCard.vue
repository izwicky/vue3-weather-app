<template>
  <div>
    <WeatherApiCall />
  </div>
</template>

<script>
import WeatherApiCall from "./WeatherCard.vue";

export default {
  name: "WeatherCard",
  components: {
    WeatherApiCall,
  },
};
</script>
