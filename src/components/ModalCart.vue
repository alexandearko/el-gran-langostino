<template>
  <div class="modal" tabindex="-1" id="myModal">
    <div class="modal-dialog modal-xl">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body d-flex">
          <div>
            <div v-for="(item, index) in getProducts" :key="index">
              <item :name="item.name" :price="item.price" :image="item.image" :v4="item.v4" />
            </div>
          </div>
          <div class="payment">
            Cuenta
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
  computed: {
    getProducts() {
      return this.$store.getters.getProducts;
    },
  },
};
</script>
<style scoped>
.payment {
  width: 356px;
}
</style>
