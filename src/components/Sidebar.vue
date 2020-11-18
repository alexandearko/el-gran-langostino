<template>
  <div class="sidebar d-flex flex-column align-items-center">
    <div class="avatar d-flex justify-content-center align-items-center">
      <img src="@/assets/avatar.png" alt="avatar" />
    </div>
    <div class="title">
      El Gran Langostino
    </div>
    <div class="subtitle">
      Inspirados en la cocina tradicional del pacífico y sus raíces africanas
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.sidebar {
  color: #3e3e3e;
  height: 100vh;
  width: 184px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
  padding-top: 55px;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.05);
}
.avatar {
  height: 150px;
  width: 150px;
  margin-top: 30px;
  border-radius: 100%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
}
.title {
  margin-top: 30px;
  font-weight: bold;
  font-size: 20px;
  line-height: 26px;
  text-align: center;
  width: 150px;
}
.subtitle {
  margin-top: 10px;
  font-weight: normal;
  font-size: 16px;
  line-height: 21px;
  text-align: center;
  width: 150px;
}
</style>
