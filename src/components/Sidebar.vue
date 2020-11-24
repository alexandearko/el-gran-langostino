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
    <div class="input position-relative">
      <input
        type="text"
        placeholder="Buscar"
        v-model="text"
        @input="filterByText"
      />
      <icon class="icon position-absolute" />
    </div>
    <nav>
      <div
        class="container-fluid p-0"
        v-for="button in buttons"
        :key="button.id"
      >
        <side-button
          :text="button.text"
          :active="button.active"
          @click="toogleNavs(button.id)"
        />
      </div>
    </nav>
  </div>
</template>
<script>
import SideButton from "./SideButton";
import icon from "./search";
export default {
  components: {
    SideButton,
    icon
  },
  data() {
    return {
      buttons: [
        {
          id: 0,
          text: "Todos",
          active: true,
        },
        {
          id: 1,
          text: "Carnes",
          active: false,
        },
        {
          id: 2,
          text: "Hamburguesas",
          active: false,
        },
        {
          id: 3,
          text: "Ensaladas",
          active: false,
        },
        {
          id: 4,
          text: "Sodas",
          active: false,
        },
      ],
      currentId: 0,
      text: ""
    };
  },
  created() {
    this.filterBy(this.currentId);
  },
  methods: {
    toogleNavs(id) {
      for (let index = 0; index < this.buttons.length; index++) {
        if (index == id) {
          this.buttons[index].active = true;
        } else {
          this.buttons[index].active = false;
        }
      }
      this.filterBy(id);
    },
    filterBy(id) {
      this.currentId = id;
      this.$store.commit("filterBy", id);
      this.$store.commit("filterByText", this.text)
    },
    filterByText() {
      this.$store.commit("filterBy", this.currentId);
      this.$store.commit("filterByText", this.text)
    }
  },
};
</script>
<style scoped>
.sidebar {
  width: 100%;
  color: #3e3e3e;
  height: auto;
  width: 184px;
  background-color: #fff;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 98;
  padding-top: 45px;
  box-shadow: 4px 0px 6px rgba(0, 0, 0, 0.05);
}
.avatar {
  height: 150px;
  width: 150px;
  margin-top: 10px;
  border-radius: 100%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.08);
}
.title {
  margin-top: 10px;
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
nav {
  margin-top: 10px;
  width: 100%;
}
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
@media only screen and (max-height: 640px) {
  .avatar {
    min-height: 85px;
    max-width: 85px;
  }
  .title {
    margin-top: 12px;
  }
}
@media only screen and (max-width: 576px) {
  .avatar {
    margin-top: 0px;
    height: 85px;
    min-height: 85px;
    max-width: 85px;
  }
  .sidebar {
    width: 100vw;
    height: auto;
    position: relative;
  }
  .title,
  .subtitle {
    width: 278px;
    margin-top: 10px;
  }
  .subtitle {
    margin-top: 0;
  }
  nav {
    display: flex;
    margin-top: 0;
    overflow: auto;
  }
  nav::-webkit-scrollbar {
  display: none;
}
}
</style>
