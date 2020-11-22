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
    <nav>
      <div class="container-fluid p-0" v-for="button in buttons" :key="button.id">
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
export default {
  components: {
    SideButton,
  },
  data() {
    return {
      buttons: [
        {
          id: 0,
          text: "Entradas",
          active: true,
        },
        {
          id: 1,
          text: "Fuertes",
          active: false,
        },
        {
          id: 2,
          text: "Sushi",
          active: false,
        },
      ],
    };
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
    },
  },
};
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
nav {
  margin-top: 30px;
  width: 100%;
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
    min-height: 85px;
    max-width: 85px;
  }
  .sidebar {
    width: 100vw;
    height: 300px;
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
  }
}
</style>
