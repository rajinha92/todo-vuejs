import Vue from "vue";
import VueRouter from "vue-router";
import TodoList from "../views/TodoList/TodoList.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Todo List",
    component: TodoList,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
