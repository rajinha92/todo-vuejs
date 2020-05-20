import listenerInput from "../../components/ListenerInput/ListenerInput.vue";
import categoryDropdown from "../../components/CategoryDropdown/CategoryDropdown.vue";
import collapsibleCategory from "../../components/CollapsibleCategory/CollapsibleCategory.vue";
import { mapMutations, mapActions } from "vuex";

export default {
  components: { listenerInput, categoryDropdown, collapsibleCategory },
  data() {
    return {
      title: "To-Do List",
      hint: "",
      category: "General",
      categoriesLabel: "Category",
      advanced: false,
    };
  },
  methods: {
    ...mapActions(["saveState"]),
    ...mapMutations(["addTask"]),
    storeTask(description) {
      console.log(description);
      this.addTask({
        description: description,
        category: this.category,
      });
    },
  },
  created() {
    this.unsubscribe = this.$store.subscribe(() => {
      this.saveState();
      this.hint = `Task list saved at ${new Date().toLocaleTimeString()} ...`;
    });
  },
  beforeDestroy() {
    this.unsubscribe && this.unsubscribe();
  },
};
