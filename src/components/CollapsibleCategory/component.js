import taskList from "../TaskList/TaskList.vue";
import { mapGetters } from "vuex";

export default {
  name: "collapsible-category",
  components: { taskList },
  computed: {
    ...mapGetters(["categories", "tasksByCategory"]),
  },
  methods: {},
  mounted() {
    const elems = document.querySelectorAll(".collapsible");
    const instances = window.M.Collapsible.init(elems, { accordion: false });
    for (const instance of instances) {
      instance.open();
    }
  },
};
