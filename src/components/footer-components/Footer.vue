<template>
  <div class="p-grid footer-bg p-ai-center p-shadow-6 container-push-down">
    <div class="p-col-12 p-md-6 p-lg-4">
      <div v-if="result.current">
        <h1 class="weather-section-title">{{ result.location.name }}</h1>
      </div>
      <div v-if="result.current">
        <h2 class="weather-section-title">
          {{ result.current.condition.text }}
        </h2>
      </div>
      <div v-if="result.current">
        <img class="weather-img" :src="result.current.condition.icon" />
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-lg-2">
      <div v-if="result.current">
        <h2 class="weather-section-title">
          Temperature - {{ result.current.temp_c }}°
        </h2>
        <h2 class="weather-section-title">
          Feels Like - {{ result.current.feelslike_c }}°
        </h2>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-lg-2">
      <h3>
        <div v-if="result.current">
          <img class="weather-img" :src="humidity" />
          <h2 class="weather-section-title">Humidity %</h2>
          <h2 class="weather-value">{{ result.current.humidity }}</h2>
        </div>
      </h3>
    </div>
    <div class="p-col-12 p-md-6 p-lg-2">
      <div v-if="result.current">
        <img class="weather-img" :src="windSpeed" />
        <h2 class="weather-section-title">Wind Speed:</h2>
        <h2 class="weather-value">{{ result.current.wind_kph }}kph</h2>
      </div>
    </div>
    <div class="p-col-12 p-md-6 p-lg-2">
      <div v-if="result.current">
        <img class="weather-img" :src="windDirection" />
        <h2 class="weather-section-title">Wind Direction:</h2>
        <h2 class="weather-value">{{ result.current.wind_dir }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import humidity from "@/assets/humidity.png";
import windSpeed from "@/assets/wind_icon.png";
import windDirection from "@/assets/wind_direction.png";

export default {
  data: () => ({
    result: [],
    humidity: humidity,
    windSpeed: windSpeed,
    windDirection: windDirection,
  }),

  name: "Footer",
  async mounted() {
    const headers = { "Content-Type": "application/json" };
    await axios
      .get(
        "http://api.weatherapi.com/v1/current.json?key=API_KEY_HERE&q=New York&aqi=no",
        { headers }
      )
      .then((result) => {
        this.result = result.data;
      });
  },
};
</script>
<style scoped>
.footer-bg {
  background-color: rgba(255, 255, 255, 0.863);
  flex-shrink: 0;
}
.weather-value {
  font-size: 3rem;
  text-align: center;
}
.weather-section-title {
  font-size: 2rem;
  text-align: center;
}
.weather-img {
  margin-left: 40%;
}
.container-push-down {
  margin-top: 42vh;
}
</style>
