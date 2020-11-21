<template>
  <div>
    <main-view />

    <!-- modals -->
    <modal-cart />
  </div>
</template>

<script>
import MainView from "./views/MainView";
import ModalCart from "./components/ModalCart";

export default {
  name: "App",
  components: {
    MainView,
    ModalCart,
  },
};
</script>

<style>
#app {
  font-family: "DM Sans", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
