<template>
  <div>
    <main-view />
  </div>
</template>

<script>
import MainView from "./views/MainView";

export default {
  name: "App",
  components: {
    MainView,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
