<template>
  <button :class="active ? 'active' : ''">
    {{ text }}
    <div v-if="active" class="mark"></div>
  </button>
</template>
<script>
export default {
  props: ["text", "active"],
};
</script>
<style scoped>
button {
  width: 100%;
  height: 48px;
  background-color: transparent;
  border: none;
  font-weight: bold;
  font-size: 16px;
  position: relative;
}
button:hover {
  color: #e94a47;
}
.active {
  color: #e94a47;
}
button:focus {
  outline: none;
}
.mark {
  position: absolute;
  height: 48px;
  width: 4px;
  padding: 0;
  background-color: #e94a47;
  top: 0;
  left: 0;
}
@media only screen and (max-width: 576px) {
  .mark {
    height: 2px;
    width: 100%;
    top: 100%;
  }
}
</style>
