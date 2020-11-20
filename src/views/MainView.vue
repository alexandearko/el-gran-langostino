<template>
  <div class="main-view">
    <main-header />
    <sidebar />
    <body>
      <div class="title">Carnes</div>
      <div class="d-flex flex-wrap">
        <div v-for="item in grill_meat" :key="item.id">
          <item :name="item.name" :price="item.name" :image="item.image" />
        </div>
      </div>
      <div class="title">Hamburguesas</div>
      <div class="d-flex flex-wrap">
        <div v-for="item in hamburgers" :key="item.id">
          <item :name="item.name" :price="item.name" :image="item.image" />
        </div>
      </div>
      <div class="title">Ensaladas</div>
      <div class="d-flex flex-wrap">
        <div v-for="item in salads" :key="item.id">
          <item :name="item.name" :price="item.name" :image="item.image" />
        </div>
      </div>
      <div class="title">Sodas</div>
      <div class="d-flex flex-wrap">
        <div v-for="item in sodas" :key="item.id">
          <item :name="item.name" :price="item.name" :image="item.image" />
        </div>
      </div>
    </body>
  </div>
</template>
<script>
import MainHeader from "../components/MainHeader";
import Sidebar from "../components/Sidebar";
import Item from "../components/Item";
export default {
  components: {
    MainHeader,
    Sidebar,
    Item,
  },
  data() {
    return {
      data: "",
      grill_meat: "",
      hamburgers: "",
      salads: "",
      sodas: "",
    };
  },
  created() {
    this.getMenu();
  },
  methods: {
    async getMenu() {
      const axiosInstance = this.axios.create({
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const res = await axiosInstance.get(
        "https://nelkir-frontend.s3.amazonaws.com/categories_product_food.json",
        { crossdomain: true }
      );
      this.grill_meat = res.data.categories.grill_meat.products;
      this.hamburgers = res.data.categories.hamburgers.products;
      this.salads = res.data.categories.salads.products;
      this.sodas = res.data.categories.sodas.products;
    },
  },
};
</script>
<style scoped>
.main-view {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
body {
  padding-top: 55px;
  padding-left: 214px;
}
.title {
  font-weight: bold;
  font-size: 18px;
  margin-top: 30px;
}
</style>
