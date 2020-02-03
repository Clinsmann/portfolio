<template>
  <transition name="fade">
    <div>
      Loader
      <div class="main" id="main">
        <NavBar />
        <transition name="fade">flash</transition>
        <transition name="fade">flash</transition>
        <router-view />
      </div>
    </div>
  </transition>
</template>

<script>
import Flash from "./utilities/flash";
import NavBar from "./components/navbar/";
//import { interceptors, post } from "./utilities/api";

export default {
  components: {
    NavBar
  },

  data() {
    return {};
  },

  beforeCreate() {},

  created() {
    /* interceptors(err => {
      if (err.response.status === 401) this.$router.push("/login");
      if (err.response.status === 500) Flash.setError(err.response.statusText);
      if (err.response.status === 404) this.$router.push("/not-found");
    }); */

    window.addEventListener("load", () => {
      this.showStatus(navigator.onLine);
      window.addEventListener("online", () => this.showStatus(true));
      window.addEventListener("offline", () => this.showStatus(false));
    });
  },

  computed: {},

  methods: {
    showStatus(online) {
      online
        ? Flash.setSuccess("you are connected to the internet!")
        : this.$networkErr();
    },

    clearFlash() {
      Flash.removeMsg();
    }
  }
};
</script>