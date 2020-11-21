<template>
  <div class="item d-flex position-relative">
    <div class="img d-flex justify-content-center align-items-center">
      <img :src="image" alt="" />
    </div>
    <div class="info d-flex flex-column justify-content-between">
      <div>
        <div class="title">
          {{ name }}
        </div>
        <p>Anillos de Calamar tempurados en Panko con el toque de la...</p>
      </div>
      <div class="d-flex justify-content-between">
        <div>${{ price }}</div>
        <button
          class="d-flex justify-content-center align-items-center"
          @click="addToCart"
        >
          Agregar
        </button>
      </div>
    </div>
    <div class="line position-absolute"></div>
  </div>
</template>
<script>
export default {
  props: ["name", "price", "image"],
  methods: {
    getInfo() {
      return {
        name: this.name,
        price: this.price,
        image: this.image,
      };
    },
    addToCart() {
      this.$store.commit('addToCart', this.getInfo());
    },
  },
};
</script>
<style scoped>
.item {
  width: 100%;
  max-width: 364px;
  height: 100px;
  margin: 30px;
}
.img {
  width: 85px;
  border-radius: 5px;
  height: 100%;
}
img {
  height: 85px;
  width: 85px;
}
.info {
  padding-left: 16px;
  max-width: 280px;
}
.title {
  font-weight: bold;
}
p {
  font-size: 12px;
}
button {
  font-weight: bold;
  font-size: 14px;
  height: 30px;
  width: 85px;
  background: #02c874;
  border-radius: 5px;
  border: none;
  color: white;
}
.line {
  height: 1px;
  width: 100%;
  background-color: #e0e0e0;
  bottom: -30px;
}
</style>
