<template>
  <div class="input position-relative">
    <input type="text" placeholder="Buscar" />
    <icon class="icon position-absolute" />
  </div>
</template>
<script>
import icon from "./search";
export default {
  components: {
    icon,
  },
};
</script>
<style scoped>
.input {
  width: 100%;
  padding: 10px 20px;
}
input {
  width: 100%;
  height: 40px;
  border: 1px solid #f2f2f2;
  border-radius: 5px;
  padding-left: 40px;
}
.icon {
  top: 20px;
  left: 30px;
}
</style>
