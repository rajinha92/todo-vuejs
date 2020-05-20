import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "animate.css/animate.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
