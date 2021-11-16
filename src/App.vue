<template>
  <div class="p-d-flex p-flex-column">
    <div class="p-p-2">
      <HeaderContainer />
      <Footer />
    </div>
  </div>
</template>

<script>
import HeaderContainer from "./components/header-components/HeaderContainer.vue";
import Footer from "./components/footer-components/Footer.vue";

export default {
  name: "App",
  components: {
    Footer,
    HeaderContainer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Quicksand");

body {
  background-color: #e1f5fe;
  font-family: Quicksand;
  background-image: url("assets/app-bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  overflow: none;
}
</style>
