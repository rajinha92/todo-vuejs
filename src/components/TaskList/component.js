import taskItem from "../TaskItem/TaskItem.vue";

export default {
  name: "task-list",
  components: { taskItem },
  props: ["tasks"],
};
