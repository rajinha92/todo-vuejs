import { mapMutations } from "vuex";
export default {
  name: "task-item",
  props: ["task"],
  data() {
    return {
      editing: false,
      editingDescription: "",
    };
  },
  methods: {
    ...mapMutations(["toggleDone", "updateDescription", "removeTask"]),
    editFinished() {
      this.updateDescription({
        task: this.task,
        description: this.editingDescription,
      });
      this.editingDescription = "";
      this.editing = false;
    },
    edit() {
      this.editingDescription = this.task.description;
      this.editing = true;
    },
    remove() {
      this.removeTask(this.task);
    },
  },
};
