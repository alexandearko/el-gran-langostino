<template>
  <div class="modal" tabindex="-1" id="myModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">El Gran Langostino</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body d-flex justify-content-center">
          <div>
            <div v-for="(item, index) in getProducts" :key="index">
              <item
                class="mb-5"
                :name="item.name"
                :price="item.price"
                :image="item.image"
                :v4="item.v4"
              />
            </div>
          </div>
          <div>
            <div class="payment">
              <div class="title">
                Cuenta
              </div>
              <div>
                <div v-for="(item, index) in getProducts" :key="index">
                  <div class="text d-flex justify-content-between">
                    <div>
                      {{ item.name }}
                    </div>
                    <div>${{ item.price }}</div>
                  </div>
                </div>
                <div class="d-flex justify-content-between">
                  <div class="text">
                    Propina
                  </div>
                  <div class="text">${{ propina }}</div>
                </div>
                <hr />
                <div class="d-flex justify-content-between">
                  <div class="text">
                    TOTAL
                  </div>
                  <div class="text">${{ totalMount }}</div>
                </div>
              </div>
              <button class="payment-button">
                Ordenar y Pagar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Item from "./Item";
export default {
  components: {
    Item,
  },
  data() {
    return {
      propina: 0,
    };
  },
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
    totalMount() {
      let total = 0;
      for (let index = 0; index < this.getProducts.length; index++) {
        total += this.getProducts[index].price;
      }
      return total;
    },
  },
};
</script>
<style scoped>
.payment {
  width: 356px;
  border: 1px solid #f3f3f3;
  box-shadow: 0px 4px 4px rgba(230, 230, 230, 0.2);
  border-radius: 10px;
  padding: 20px;
}
.title {
  font-weight: bold;
}
.text {
  margin-top: 5px;
}
.payment-button {
  margin-top: 10px;
  width: 100%;
  height: 55px;
  color: white;
  background-color: #02c874;
  border-radius: 5px;
  border: none;
}
@media only screen and (max-width: 991px) {
  .modal-dialog {
    max-width: 95%;
  }
}
@media only screen and (max-width: 854px) {
  .payment {
    width: auto;
  }
}
@media only screen and (max-width: 672px) {
  .modal-body {
    flex-direction: column;
    align-items: center;
    height: auto;
  }
}
</style>
