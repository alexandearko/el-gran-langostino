<template>
  <div class="item d-flex position-relative">
    <button
      @click="deleteThis"
      v-if="v4"
      type="button"
      class="close position-absolute"
    >
      <span aria-hidden="true">&times;</span>
    </button>
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
          v-if="!v4"
          class="add d-flex justify-content-center align-items-center"
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
import { uuid } from "vue-uuid";
export default {
  props: ["name", "price", "image", "v4"],
  methods: {
    getInfo() {
      return {
        v4: uuid.v4(),
        name: this.name,
        price: this.price,
        image: this.image,
      };
    },
    addToCart() {
      this.$store.commit("addToCart", this.getInfo());
    },
    deleteThis() {
      this.$store.commit("deleteProduct", this.v4);
    },
  },
};
</script>
<style scoped>
.item {
  width: 100%;
  max-width: 300px;
  height: 100px;
  margin: 30px;
}
.img {
  width: 100px;
  border-radius: 5px;
  height: 100%;
}
img {
  height: 100px;
  width: 100px;
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
.add {
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
.close {
  top: -5px;
  right: 0;
}
@media only screen and (max-width: 576px) {
  .item {
    margin: 20px;
  }
}
@media only screen and (max-width: 425px) {
  .item {
    max-width: 90%;
  }
}
</style>
