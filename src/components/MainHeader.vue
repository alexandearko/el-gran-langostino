<template>
  <div class="main-header d-flex justify-content-between align-items-center">
    <div class="logo d-flex justify-content-center">
      <logo />
    </div>
    <button>
      <cart />
    </button>
  </div>
</template>
<script>
import logo from "./logo";
import cart from "./cart";
export default {
  components: {
    logo,
    cart,
  },
};
</script>
<style scoped>
.main-header {
  height: 55px;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
  position: absolute;
  top: 0;
  z-index: 99;
}
.logo {
  width: 184px;
}
button {
  background-color: transparent;
  border: none;
  margin-right: 20px;
}
</style>
